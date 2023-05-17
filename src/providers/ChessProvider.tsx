import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { SettingsContext } from './SettingsProvider';

import BotWorker from '@/game/bot?worker';
import { BotMessage, BotResult } from '@/game/bot';
import { Chess, Color, Move, Piece, PieceSymbol, Square } from 'chess.js';

export type PlayerType = 'local' | 'bot' | 'online';

export interface ChessConfig {
  player_white: PlayerType;
  player_black: PlayerType;
  positions: string;
}

export const XYtoSquare = (x: number, y: number): Square => {
  return `${'abcdefgh'[x]}${8 - y}` as Square;
}

export const SquareToXY = (square: Square): [number, number] => {
  return ["abcdefgh".indexOf(square[0]), 8 - parseInt(square[1])];
}

type StartNewGame_Func = (config: ChessConfig) => void;
type MakeMove_Func = (from: Square, to: Square) => boolean;
type Promote_Func = (from: Square, to: Square, promotion: PieceSymbol) => boolean;
type PotentialMoves_Func = (from_x: number, from_y: number) => { to: Square, flags: string }[];
type UndoMove_Func = () => boolean;
type RedoMove_Func = () => boolean;
type Pause_Func = () => boolean;

type Board = ({ type: PieceSymbol, team: Color, uid: string } | null)[][];
type Captured = Record<Color, PieceSymbol[]>;
type MoveUID = { taken?: string };
type GameOver = { checkmate: boolean, check: boolean, draw: boolean, threefoldRepitition: boolean, insufficientMaterial: boolean };
type Names = Record<Color, string>;

interface ChessInterface {
  board: Board,
  captured: Captured,
  turn: Color,
  history: Move[],
  redoStack: Move[],
  gameOver?: GameOver,
  names: Names,
  StartNewGame: StartNewGame_Func;
  MakeMove: MakeMove_Func;
  Promote: Promote_Func;
  PotentialMoves: PotentialMoves_Func;
  UndoMove: UndoMove_Func;
  RedoMove: RedoMove_Func;
  Pause: Pause_Func;
}

export const ChessContext = createContext<ChessInterface | null>(null);

export const useChessContext = (): ChessInterface => {
  const chessCtx = useContext(ChessContext);
  if (chessCtx === null) {
    throw new Error('Chess state has not been created.');
  }
  return chessCtx;
};

interface ChessProviderProps {
  children?: React.ReactNode,
}

export const ChessProvider: React.FC<ChessProviderProps> = (props) => {
  const { allowPause, defaultUsername, gameLength } = useContext(SettingsContext);
  const [board, setBoard] = useState<Board>([]);
  const [turn, setTurn] = useState<Color>('w');
  const [history, setHistory] = useState<Move[]>([]);
  const [redoStack, setRedoStack] = useState<Move[]>([]);
  const [gameOver, setGameOver] = useState<GameOver | undefined>(undefined);
  const [captured, setCaptured] = useState<Captured>({ 'w': [], 'b': [] });
  const [names, setNames] = useState<Names>({ w: '', b: '' });

  const stateRef = useRef(new Chess());
  const workerRef = useRef(new BotWorker());
  const configRef = useRef<ChessConfig | undefined>(undefined);

  const redoStackRef = useRef<Move[]>([]);
  const pieceUidsRef = useRef<Record<string, string>>({});
  const moveUidsTrackerRef = useRef<MoveUID[]>([]);

  workerRef.current.onmessage = (e) => {
    const result = e.data as BotResult;
    switch (result.type) {
      case 'success': {
        try {
          const move = stateRef.current.move(result.move);
          doUpdateUids(move);
          updateBoard();
        } catch (e) {
          console.error('Bot movement error');
          console.error(e);
        }
        break;
      }
      case 'failed': {
        alert('bot failed to generate a move');
        break;
      }
    }
  }

  useEffect(() => {
    const thisPlayer = (turn === 'b' ? configRef.current?.player_black : configRef.current?.player_white);
    if (thisPlayer === 'bot' && redoStackRef.current.length === 0) {
      workerRef.current.postMessage({
        type: 'generateMove',
        fen: stateRef.current.fen(),
        team: turn,
      } as BotMessage);
    }
  }, [turn]);

  const updateBoard = () => {
    const board = stateRef.current.board();
    if (Object.keys(pieceUidsRef.current).length === 0) {

      board.flat().map((key, i) => {
        if (key === null) return;
        pieceUidsRef.current[key.square] = `${i}`;
      });
    }
    setBoard(
      stateRef.current.board()
        .map(row => row
          .map(value => value ?
            { type: value.type, team: value.color, uid: pieceUidsRef.current[value.square] } : value
          )
        )
    );
    setHistory(stateRef.current.history({ verbose: true }));
    setRedoStack([...redoStackRef.current]);
    if (stateRef.current.isGameOver()) {
      setGameOver({
        check: stateRef.current.isCheck(),
        checkmate: stateRef.current.isCheckmate(),
        draw: stateRef.current.isDraw(),
        insufficientMaterial: stateRef.current.isInsufficientMaterial(),
        threefoldRepitition: stateRef.current.isThreefoldRepetition(),
      });
    } else {
      setGameOver(undefined);
    }
    setTurn(stateRef.current.turn());
  }

  const doCapture = (colour: Color, piece: PieceSymbol) => {
    setCaptured((captured) => {
      let { w, b } = captured;
      (colour === 'w' ? w : b).push(piece);
      return {
        w, b
      }
    });
  }

  const undoCapture = (colour: Color, piece: PieceSymbol) => {
    setCaptured((captured) => {
      let { w, b } = captured;
      if (colour === 'w') {
        const index = w.indexOf(piece);
        w = w.filter((_, i) => i !== index);
      } else {
        const index = b.indexOf(piece);
        b = b.filter((_, i) => i !== index);
      }
      return {
        w, b
      }
    })
  }

  const doUpdateUids = (move: Move) => {
    const tracked: MoveUID = {};
    // needs to handle -> captures, castling
    if (move.captured) {
      // get stored uid
      tracked.taken = pieceUidsRef.current[move.to];
      pieceUidsRef.current[move.to] = pieceUidsRef.current[move.from];
      delete pieceUidsRef.current[move.from];
    } else if (move.flags.indexOf('k') >= 0) {
      // swap uids for both king and castle (kingside)
      pieceUidsRef.current[move.to] = pieceUidsRef.current[move.from];
      delete pieceUidsRef.current[move.from];
      const castleFrom = `h${move.from[1]}`;
      const castleTo = `f${move.from[1]}`;
      pieceUidsRef.current[castleTo] = pieceUidsRef.current[castleFrom];
      delete pieceUidsRef.current[castleFrom];
    } else if (move.flags.indexOf('q') >= 0) {
      // swap uids for both king and castle (queenside)
      pieceUidsRef.current[move.to] = pieceUidsRef.current[move.from];
      delete pieceUidsRef.current[move.from];
      const castleFrom = `a${move.from[1]}`;
      const castleTo = `d${move.from[1]}`;
      pieceUidsRef.current[castleTo] = pieceUidsRef.current[castleFrom];
      delete pieceUidsRef.current[castleFrom];
    } else {
      // normal move, just move uid
      pieceUidsRef.current[move.to] = pieceUidsRef.current[move.from];
      delete pieceUidsRef.current[move.from];
    }

    moveUidsTrackerRef.current.push(tracked);
  }

  const undoUpdateUids = (move: Move) => {
    const update = moveUidsTrackerRef.current.pop();
    if (move.captured) {
      // get stored uid
      pieceUidsRef.current[move.from] = pieceUidsRef.current[move.to];
      if (update && update.taken) {
        pieceUidsRef.current[move.to] = update.taken;
      } else {
        console.error('move UID tracker made a mistake');
        delete pieceUidsRef.current[move.to];
      }
    } else if (move.flags.indexOf('k') >= 0) {
      // swap uids for both king and castle (kingside)
      pieceUidsRef.current[move.from] = pieceUidsRef.current[move.to];
      delete pieceUidsRef.current[move.to];
      const castleFrom = `h${move.from[1]}`;
      const castleTo = `f${move.from[1]}`;
      pieceUidsRef.current[castleFrom] = pieceUidsRef.current[castleTo];
      delete pieceUidsRef.current[castleTo];
    } else if (move.flags.indexOf('q') >= 0) {
      // swap uids for both king and castle (queenside)
      pieceUidsRef.current[move.from] = pieceUidsRef.current[move.to];
      delete pieceUidsRef.current[move.to];
      const castleFrom = `a${move.from[1]}`;
      const castleTo = `d${move.from[1]}`;
      pieceUidsRef.current[castleFrom] = pieceUidsRef.current[castleTo];
      delete pieceUidsRef.current[castleTo];
    } else {
      // normal move, just move uid
      pieceUidsRef.current[move.from] = pieceUidsRef.current[move.to];
      delete pieceUidsRef.current[move.to];
    }
  }

  const contextValue: ChessInterface = {
    board,
    captured,
    turn,
    history,
    redoStack,
    gameOver,
    names,
    StartNewGame: (config: ChessConfig): void => {
      configRef.current = config;
      stateRef.current = new Chess();
      pieceUidsRef.current = {};
      redoStackRef.current = [];

      // TODO: username resolution for online play
      setNames({
        'w': config.player_white,
        'b': config.player_black,
      })
      setCaptured({ 'w': [], 'b': [] });
      updateBoard();
    },
    MakeMove: (from: Square, to: Square): boolean => {
      redoStackRef.current = [];
      try {
        const move = stateRef.current.move({ from, to });
        doUpdateUids(move);

        if (move.captured) {
          doCapture(move.color, move.captured);
        }
      } catch (e) {
        return false;
      }

      updateBoard();
      return true;
    },
    Promote: (from, to, promotion) => {
      redoStackRef.current = [];
      try {
        const move = stateRef.current.move({ from, to, promotion });
        doUpdateUids(move);

        if (move.captured) {
          doCapture(move.color, move.captured);
        }
      } catch (e) {
        return false;
      }

      updateBoard();
      return true;
    },
    PotentialMoves: (from_x: number, from_y: number): { to: Square, flags: string }[] => {
      return stateRef.current.moves({ square: XYtoSquare(from_x, from_y), verbose: true });
    },
    UndoMove: (): boolean => {
      let move = stateRef.current.undo();
      if (move === null) {
        return false;
      }
      undoUpdateUids(move);

      if (move.captured) {
        undoCapture(move.color, move.captured);
      }

      redoStackRef.current.push(move);
      updateBoard();
      return true;
    },
    RedoMove: (): boolean => {
      if (redoStackRef.current.length === 0) {
        return false;
      }

      let move = redoStackRef.current.pop();
      if (move === undefined) {
        return false;
      }

      stateRef.current.move({ to: move.to, from: move.from, promotion: move.promotion });
      doUpdateUids(move);

      if (move.captured) {
        doCapture(move.color, move.captured);
      }

      updateBoard();

      return true;
    },
    Pause: (): boolean => {
      if (!allowPause) return false;
      return true;
    }
  };

  return (
    <ChessContext.Provider value={contextValue}>
      {
        props.children
      }
    </ChessContext.Provider>
  );
};