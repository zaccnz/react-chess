import React, { createContext, useContext, useEffect, useRef } from 'react';
import { PlayerType, ChessState, Team, ChessGetPossibleMoves, ChessCanUndo } from '@/game/chess';
import { createGame } from '../game/reducer';
import { SettingsContext } from './SettingsProvider';

import BotWorker from '@/game/bot?worker';
import { BotMessage, BotResult } from '@/game/bot';

export interface ChessConfig {
  player_white: PlayerType;
  player_black: PlayerType;
  positions: string;
}

type StartNewGame_Func = (config: ChessConfig) => void;
type PlayerCanMove_Func = (team: Team) => boolean;
type MakeMove_Func = (from_x: number, from_y: number, to_x: number, to_y: number) => boolean;
type PotentialMoves_Func = (from_x: number, from_y: number) => [number, number, boolean, boolean][];
type UndoMove_Func = () => boolean;
type RedoMove_Func = () => boolean;
type Pause_Func = () => boolean;

interface ChessInterface {
  board: ChessState;
  StartNewGame: StartNewGame_Func;
  PlayerCanMove: PlayerCanMove_Func;
  MakeMove: MakeMove_Func;
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
  const [board, dispatch] = createGame(defaultUsername, gameLength);
  const workerRef = useRef(new BotWorker());

  workerRef.current.onmessage = (e) => {
    const result = e.data as BotResult;
    switch (result.type) {
      case 'success': {
        dispatch({ type: 'move', ...result.move });
        break;
      }
      case 'failed': {
        alert('bot failed to generate a move');
        break;
      }
    }
  }

  useEffect(() => {
    if (board.players[board.current_team].type === 'bot' && board.move_index === board.moves.length - 1) {
      console.log('dispatch ai move');

      workerRef.current.postMessage({
        type: 'generateMove',
        state: board,
        team: board.current_team,
      } as BotMessage);
    }
  }, [board.current_team]);

  const contextValue: ChessInterface = {
    board,
    StartNewGame: (config: ChessConfig): void => {
      dispatch({ type: 'create', config, username: defaultUsername, length: gameLength });
    },
    PlayerCanMove: (team: Team): boolean => {
      return board.current_team == team &&
        (board.players[board.current_team].type === 'local' ||
          board.players[board.current_team].type === 'online-local');
    },
    MakeMove: (from_x: number, from_y: number, to_x: number, to_y: number): boolean => {
      dispatch({ type: 'move', from_x, from_y, to_x, to_y });
      return true;
    },
    PotentialMoves: (from_x: number, from_y: number): [number, number, boolean, boolean][] => {
      return ChessGetPossibleMoves(board, from_x, from_y);
    },
    UndoMove: (): boolean => {
      if (!ChessCanUndo(board)) {
        return false;
      }

      dispatch({ type: 'undo' });
      return true;
    },
    RedoMove: (): boolean => {
      if (!ChessCanUndo(board)) {
        return false;
      }

      dispatch({ type: 'redo' });
      return true;
    },
    Pause: (): boolean => {
      if (!allowPause) return false;
      if (!ChessCanUndo(board)) return false;

      dispatch({ type: 'pause' });
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