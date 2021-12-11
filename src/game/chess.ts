import { pieceToString, PieceType } from './piece';
import { v4 as uuidv4 } from 'uuid';


export enum Team {
  WHITE,
  BLACK,
  MAX,
}

type PotentialMove = [to_x: number, to_y: number, takes: boolean, castle: boolean];

export interface GamePiece {
  type: PieceType;
  has_moved: boolean;
  team: Team;
  uid: string;
}

interface GamePieceWithLocation extends GamePiece {
  x: number;
  y: number;
}

export interface ChessMove {
  from_x: number;
  from_y: number;
  to_x: number;
  to_y: number;

  piece: PieceType;
  first_move: boolean;
  team: Team;

  time_elapsed: number;

  takes?: {
    piece: PieceType;
    first_move: boolean;
  }

  castle?: {
    rook_from_x: number;
    rook_from_y: number;
    rook_to_x: number;
    rook_to_y: number;
  }
}

export interface ChessState {
  board: (GamePiece | null)[];

  rows: number;
  columns: number;

  moves: ChessMove[];
  move_index: number;

  current_team: Team;
  lost_pieces: PieceType[][];
  check: boolean[];
  checkmate: boolean[];

  time_started: number;
}

const XYtoIndex = (state: ChessState, x: number, y: number): number => {
  return (y * state.columns) + x;
};

const IndexToXY = (state: ChessState, index: number): [x: number, y: number] => {
  return [index % state.columns, Math.floor(index / state.columns)];
};

const DefaultPieceLayout = [
  PieceType.Rook,
  PieceType.Knight,
  PieceType.Bishop,
  PieceType.Queen,
  PieceType.King,
  PieceType.Bishop,
  PieceType.Knight,
  PieceType.Rook,
];

export const ChessInitializeState = (rows: number, columns: number): ChessState => {
  const state: ChessState = {
    board: [...Array(rows * columns)].map(() => null),
    rows, columns,

    moves: [],
    move_index: -1,

    current_team: Team.WHITE,
    lost_pieces: [[], []],
    check: [...Array(Team.MAX)].map(_ => false),
    checkmate: [...Array(Team.MAX)].map(_ => false),

    time_started: new Date().getTime()
  };

  for (let i = 0; i < DefaultPieceLayout.length; i++) {
    state.board[XYtoIndex(state, i, 0)] = {
      type: DefaultPieceLayout[i],
      has_moved: false,
      team: Team.BLACK,
      uid: uuidv4(),
    };
    state.board[XYtoIndex(state, i, 1)] = {
      type: PieceType.Pawn,
      has_moved: false,
      team: Team.BLACK,
      uid: uuidv4(),
    };
    state.board[XYtoIndex(state, i, 6)] = {
      type: PieceType.Pawn,
      has_moved: false,
      team: Team.WHITE,
      uid: uuidv4(),
    };
    state.board[XYtoIndex(state, i, 7)] = {
      type: DefaultPieceLayout[i],
      has_moved: false,
      team: Team.WHITE,
      uid: uuidv4(),
    };
  }

  return state;
};

export const ChessTimeSinceStarted = (state: ChessState): string => {
  const time_passed = (new Date().getTime() - state.time_started) / 1000;
  const seconds = Math.floor(time_passed % 60);
  const minutes = Math.floor(time_passed / 60) % 60;
  const hours = Math.floor(time_passed / (60 * 60));

  const pad: (n: number) => string = n => n.toString().padStart(2, '0');

  return (hours > 0 ? `${pad(hours)}:` : '') + `${pad(minutes)}:${pad(seconds)}`;
};

export const ChessLogDebug = (state: ChessState): void => {
  for (let i = 0; i < state.rows; i++) {
    let val = '';
    for (let j = 0; j < state.columns; j++) {
      const piece = state.board[XYtoIndex(state, j, i)];
      if (piece !== null)
        val += pieceToString(piece.type, piece.team == Team.WHITE);
      else
        val += '  ';
    }
    console.log(val);
  }
};

export const ChessDoMove = (state: ChessState, move: ChessMove): void => {
  const piece = state.board[XYtoIndex(state, move.from_x, move.from_y)];
  if (piece === null) {
    console.log(`invalid move - no piece at ${(move.from_x, move.from_y)}`);
    return;
  } else if (piece.type !== move.piece) {
    console.log(`invalid move - piece at ${(move.from_x, move.from_y)} is a ${piece.type} not a ${move.piece}`);
    return;
  } else if (piece.team !== move.team) {
    console.log(`invalid move - piece at ${(move.from_x, move.from_y)} is a ${piece.team} not a ${move.team}`);
    return;
  }

  const takes = state.board[XYtoIndex(state, move.to_x, move.to_y)];
  if (takes === null && move.takes !== undefined) {
    console.log('');
    return;
  }

  if (move.takes && takes) {
    state.lost_pieces[takes.team].push(takes.type);
  }

  if (move.castle) {
    const rook = state.board[XYtoIndex(state, move.castle.rook_from_x, move.castle.rook_from_y)];
    if (!rook || rook.type !== PieceType.Rook) {
      console.log('');
      return;
    }
    state.board[XYtoIndex(state, move.castle.rook_to_x, move.castle.rook_to_y)] = rook;
    state.board[XYtoIndex(state, move.castle.rook_from_x, move.castle.rook_from_y)] = null;

    rook.has_moved = true;
  }

  state.board[XYtoIndex(state, move.to_x, move.to_y)] = piece;
  state.board[XYtoIndex(state, move.from_x, move.from_y)] = null;

  piece.has_moved = true;

  state.current_team = move.team === Team.WHITE ? Team.BLACK : Team.WHITE;
  return;
};

export const ChessUndoMove = (state: ChessState, move: ChessMove): void => {
  const piece = state.board[XYtoIndex(state, move.to_x, move.to_y)];
  if (piece === null) {
    console.log(`invalid move - no piece at ${move.to_x, move.to_y}`);
    return;
  } else if (piece.type !== move.piece) {
    console.log(`invalid move - piece at ${(move.to_x, move.to_y)} is a ${piece.type} not a ${move.piece}`);
    return;
  } else if (piece.team !== move.team) {
    console.log(`invalid move - piece at ${(move.to_x, move.to_y)} is a ${piece.team} not a ${move.team}`);
    return;
  }

  piece.has_moved = !move.first_move;

  state.board[XYtoIndex(state, move.to_x, move.to_y)] = null;
  state.board[XYtoIndex(state, move.from_x, move.from_y)] = piece;

  if (move.takes) {
    const team = piece.team == Team.WHITE ? Team.BLACK : Team.WHITE;
    state.board[XYtoIndex(state, move.to_x, move.to_y)] = {
      type: move.takes.piece,
      has_moved: !move.takes.first_move,
      team,
      uid: uuidv4(),
    };
    state.lost_pieces[team].splice(state.lost_pieces[team].indexOf(move.takes.piece), 1);
  }

  if (move.castle) {
    const rook = state.board[XYtoIndex(state, move.castle.rook_to_x, move.castle.rook_to_y)];
    if (!rook || rook.type !== PieceType.Rook) {
      console.log('');
      return;
    }
    state.board[XYtoIndex(state, move.castle.rook_to_x, move.castle.rook_to_y)] = null;
    state.board[XYtoIndex(state, move.castle.rook_from_x, move.castle.rook_from_y)] = rook;

    rook.has_moved = false;
  }

  state.current_team = move.team;
  return;
};

export const ChessRedo = (state: ChessState): void => {
  if (state.move_index < -1 || state.move_index >= state.moves.length - 1) {
    console.log('');
    return;
  }
  const move = state.moves[++state.move_index];
  ChessDoMove(state, move);
  return;
};

export const ChessUndo = (state: ChessState): void => {
  if (state.move_index < 0 || state.move_index >= state.moves.length) {
    console.log('');
    return;
  }
  const move = state.moves[state.move_index--];
  ChessUndoMove(state, move);
  return;
};

/*
 * ChessMakeMove - creates a move and adds it to the game.  note that it does not
 * actually move the pieces on the board
 */
export const ChessMakeMove = (state: ChessState, from_x: number, from_y: number, to_x: number, to_y: number): void => {
  const move = ChessGetPossibleMoves(state, from_x, from_y)
    .find(v => v[0] == to_x && v[1] == to_y);

  if (move == undefined) {
    console.log(`attempted to make an impossible move from (${from_x}, ${from_y}) to (${to_x}, ${to_y})`);
    return;
  }

  const piece = state.board[XYtoIndex(state, from_x, from_y)];
  if (piece === null) {
    console.log(`attempted to move a piece that doesnt exist at (${from_x}, ${from_y})`);
    return;
  }

  const chessMove: ChessMove = {
    from_x: from_x,
    from_y: from_y,
    to_x: to_x,
    to_y: to_y,
    piece: piece.type,
    first_move: !piece.has_moved,
    team: piece.team,
    time_elapsed: 0
  };

  const lost = state.board[XYtoIndex(state, to_x, to_y)];
  if (lost !== null) {
    if (lost.team == piece.team) {
      console.log(`attempted to take own piece (${from_x}, ${from_y}) to (${to_x}, ${to_y}) - team ${lost.team}`);
      return;
    }

    chessMove.takes = {
      piece: lost.type,
      first_move: !lost.has_moved
    };
  }

  if (move[3]) {
    const rook_x = to_x == 2 ? 0 : 7;
    const rook = state.board[XYtoIndex(state, rook_x, to_y)];
    const king = state.board[XYtoIndex(state, from_x, from_y)];
    if (rook === null || king === null) {
      console.log('castle failed, king or rook was null!');
      return;
    }
    rook.has_moved = false;
    king.has_moved = false;

    chessMove.castle = {
      rook_from_x: rook_x,
      rook_from_y: from_y,
      rook_to_x: to_x,
      rook_to_y: from_y,
    };

    chessMove.to_x = to_x + (to_x == 2 ? - 1 : 1);
  }

  if (state.move_index + 1 !== state.moves.length) {
    state.moves = [...state.moves.slice(0, state.move_index + 1)];
  }
  state.moves.push(chessMove);
  state.move_index += 1;
  ChessDoMove(state, chessMove);
};

export const ChessIsCheck = (state: ChessState): boolean[] => {
  const pieces = state.board.map((v, i) => v === null ? null : [v, ...IndexToXY(state, i)])
    .filter(v => v !== null) as [piece: GamePiece, x: number, y: number][];

  const white_king = pieces.find(p => p[0].type === 'king' && p[0].team == Team.WHITE);
  const black_king = pieces.find(p => p[0].type === 'king' && p[0].team == Team.BLACK);

  if (!white_king || !black_king) {
    console.log('a player is missing a king.  invalid game state!');
    return [white_king === undefined, black_king === undefined];
  }

  const [, wk_x, wk_y] = white_king;
  const [, bk_x, bk_y] = black_king;

  const check = [...Array(Team.MAX)].map(_ => false);
  for (const [piece, x, y] of pieces.filter(p => p[0].type !== 'king')) {
    const moves = ChessGetPossibleMoves(state, x, y, false);
    for (const [move_x, move_y,] of moves.filter(p => p[2])) {
      const [compare_x, compare_y] = piece.team == Team.WHITE ? [bk_x, bk_y] : [wk_x, wk_y];
      if (compare_x == move_x && compare_y == move_y) {
        check[piece.team == Team.WHITE ? Team.BLACK : Team.WHITE] = true;
      }
    }
  }
  return check;
};

export const ChessIsCheckmate = (state: ChessState): boolean[] => {
  const kings = (state.board.map((v, i) => v === null ? null : [v, ...IndexToXY(state, i)]) as [piece: GamePiece, x: number, y: number][])
    .filter(v => v !== null && v[0].type === 'king');

  const checkmate = [...Array(Team.MAX)].map(_ => true);
  for (const [king, x, y] of kings) {
    const moves = ChessGetPossibleMoves(state, x, y, false);
    for (const [to_x, to_y,] of moves) {
      checkmate[king.team] = checkmate[king.team] && ChessMoveIsCheck(state, x, y, to_x, to_y)[king.team];
    }
  }

  return checkmate;
};

export const ChessMoveIsCheck = (state: ChessState, from_x: number, from_y: number, to_x: number, to_y: number): boolean[] => {
  const temp = state.board[XYtoIndex(state, to_x, to_y)];
  state.board[XYtoIndex(state, to_x, to_y)] = state.board[XYtoIndex(state, from_x, from_y)];
  state.board[XYtoIndex(state, from_x, from_y)] = null;
  const is_check = ChessIsCheck(state);
  state.board[XYtoIndex(state, from_x, from_y)] = state.board[XYtoIndex(state, to_x, to_y)];
  state.board[XYtoIndex(state, to_x, to_y)] = temp;
  return is_check;
};

export const ChessCheckWin = (state: ChessState): void => {
  state.check = ChessIsCheck(state);
  state.checkmate = ChessIsCheckmate(state);
};

export const ChessGetPossibleMoves = (state: ChessState, from_x: number, from_y: number, not_check = true): PotentialMove[] => {
  const piece = state.board[XYtoIndex(state, from_x, from_y)];
  if (piece == null) return [];
  const moves: PotentialMove[] = [];
  const white = piece.team == Team.WHITE;

  const inBounds = (to_x: number, to_y: number) =>
    !(to_x < 0 || to_x >= state.columns || to_y < 0 || to_y >= state.columns);

  const isEnemy = (x: number, y: number) => {
    if (!inBounds(x, y)) return false;
    const replaces = state.board[XYtoIndex(state, x, y)];
    return replaces && replaces.team != piece.team;
  };

  const pushMove = (to_x: number, to_y: number, is_castle = false) => {
    if (!inBounds(to_x, to_y)) return;

    const replaces = state.board[XYtoIndex(state, to_x, to_y)];
    if (replaces && replaces.team == piece.team)
      return;
    moves.push([to_x, to_y, replaces !== null ? true : false, is_castle]);
  };

  const pushMoveIfEnemy = (to_x: number, to_y: number) => {
    if (!inBounds(to_x, to_y)) return;
    isEnemy(to_x, to_y) && pushMove(to_x, to_y);
  };

  const pushMoveNoEnemy = (to_x: number, to_y: number) => {
    if (!inBounds(to_x, to_y)) return;
    state.board[XYtoIndex(state, to_x, to_y)] == null && pushMove(to_x, to_y);
  };

  const pushInDirection = (dir_x: number, dir_y: number) => {
    let x = from_x + dir_x, y = from_y + dir_y;
    while (inBounds(x, y)) {
      pushMove(x, y);
      if (state.board[XYtoIndex(state, x, y)] != undefined)
        break;
      x += dir_x; y += dir_y;
    }
  };

  switch (piece.type) {
    case 'pawn': {
      if (!piece.has_moved && state.board[XYtoIndex(state, from_x, from_y + (white ? -1 : 1))] === null)
        pushMoveNoEnemy(from_x, white ? 4 : 3);
      pushMoveNoEnemy(from_x, from_y + (white ? -1 : 1));
      pushMoveIfEnemy(from_x - 1, from_y + (white ? -1 : 1));
      pushMoveIfEnemy(from_x + 1, from_y + (white ? -1 : 1));
      break;
    }
    case 'rook': {
      pushInDirection(-1, 0);
      pushInDirection(1, 0);
      pushInDirection(0, -1);
      pushInDirection(0, 1);
    } break;
    case 'knight': {
      pushMove(from_x - 1, from_y - 2);
      pushMove(from_x + 1, from_y - 2);
      pushMove(from_x - 1, from_y + 2);
      pushMove(from_x + 1, from_y + 2);
      pushMove(from_x - 2, from_y - 1);
      pushMove(from_x + 2, from_y - 1);
      pushMove(from_x - 2, from_y + 1);
      pushMove(from_x + 2, from_y + 1);
    } break;
    case 'bishop': {
      pushInDirection(-1, -1);
      pushInDirection(1, -1);
      pushInDirection(-1, 1);
      pushInDirection(1, 1);
    } break;
    case 'king': {
      pushMove(from_x - 1, from_y - 1);
      pushMove(from_x - 1, from_y + 1);
      pushMove(from_x + 1, from_y + 1);
      pushMove(from_x + 1, from_y - 1);
      pushMove(from_x + 1, from_y);
      pushMove(from_x - 1, from_y);
      pushMove(from_x, from_y + 1);
      pushMove(from_x, from_y - 1);

      const king = state.board[XYtoIndex(state, from_x, from_y)];
      if (king?.has_moved) {
        break;
      }

      let rook = state.board[XYtoIndex(state, 0, from_y)];
      if (rook && rook.type == PieceType.Rook && !rook.has_moved) {
        let can_castle = !ChessIsCheck(state);
        for (let i = 5; i < 7; i++) {
          can_castle = can_castle && state.board[XYtoIndex(state, i, from_y)] == null;
        }
        for (let i = 5; i < 7; i++) {
          can_castle = can_castle && !ChessMoveIsCheck(state, from_x, from_y, i, from_y);
        }
        if (can_castle) {
          console.log('pushing castle');
          pushMove(6, from_y, true);
        }
      }
      rook = state.board[XYtoIndex(state, 7, from_y)];
      if (rook && rook.type == PieceType.Rook && !rook.has_moved) {
        let can_castle = !ChessIsCheck(state);
        for (let i = 1; i < 4; i++) {
          can_castle = can_castle && state.board[XYtoIndex(state, i, from_y)] == null;
        }
        for (let i = 1; i < 4; i++) {
          can_castle = can_castle && !ChessMoveIsCheck(state, from_x, from_y, i, from_y);
        }
        if (can_castle) {
          console.log('pushing castle');
          pushMove(2, from_y, true);
        }
      }
    } break;
    case 'queen': {
      pushInDirection(-1, 0);
      pushInDirection(1, 0);
      pushInDirection(0, -1);
      pushInDirection(0, 1);

      pushInDirection(-1, -1);
      pushInDirection(1, -1);
      pushInDirection(-1, 1);
      pushInDirection(1, 1);
    } break;
  }

  if (not_check) {
    for (let i = moves.length - 1; i >= 0; i--) {
      if (ChessMoveIsCheck(state, from_x, from_y, moves[i][0], moves[i][1])[piece.team]) {
        moves.splice(i, 1);
      }
    }
  }

  return moves;
};

export const ChessGetPieces = (state: ChessState): GamePieceWithLocation[] => {
  return state.board.map((v, i) => {
    const [x, y] = IndexToXY(state, i);
    return v == null ? null : { ...v, x, y };
  }).filter(v => v !== null) as GamePieceWithLocation[];
};