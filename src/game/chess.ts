import { pieceToString, PieceType } from './piece';
import { v4 as uuidv4 } from 'uuid';


export enum Team {
  WHITE,
  BLACK,
  MAX,
}

type PotentialMove = [to_x: number, to_y: number, takes: boolean, castle: boolean];

interface GamePiece {
  type: PieceType;
  has_moved: boolean;
  team: Team;
  uid: string;
}

interface GamePieceWithLocation extends GamePiece {
  x: number;
  y: number;
}

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

export type Action =
  | {
    type: 'MovePiece', piece: PieceType, takes?: PieceType, takes_has_moved?: boolean,
    first_move: boolean, from_x: number, from_y: number, to_x: number, to_y: number
  }
  | { type: 'ChangeTeam', from_team: Team, to_team: Team }
  | { type: 'Castle', rook_x: number, rook_y: number, king_x: number, king_y: number };

export interface ChessState {
  board: (GamePiece | null)[];
  rows: number;
  columns: number;
  lost_pieces: PieceType[][];
  actions: Action[];
  current_team: Team;
  check: boolean[];
  checkmate: boolean[];
  time_started: number
}

const XYtoIndex = (state: ChessState, x: number, y: number): number => {
  return (y * state.columns) + x;
};

const IndexToXY = (state: ChessState, index: number): [x: number, y: number] => {
  return [index % state.columns, Math.floor(index / state.columns)];
};

const GetNextTeam = (state: ChessState): Team => {
  return state.current_team == Team.WHITE ? Team.BLACK : Team.WHITE;
};

export const ChessInitializeState = (rows: number, columns: number): ChessState => {
  const state: ChessState = {
    board: [...Array(rows * columns)].map(() => null),
    rows, columns,
    lost_pieces: [[], []],
    actions: [],
    current_team: Team.WHITE,
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

export const ChessPopAction = (state: ChessState): void => {
  if (state.actions.length <= 0) {
    console.log('attempted to pop an action when one hasnt been taken yet');
    return;
  }

  const action = state.actions.pop();

  if (action === undefined) {
    console.log('last action invalid');
    return;
  }

  switch (action.type) {
    case 'MovePiece': {
      const piece = state.board[XYtoIndex(state, action.to_x, action.to_y)];
      state.board[XYtoIndex(state, action.from_x, action.from_y)] = piece;
      state.board[XYtoIndex(state, action.to_x, action.to_y)] = null;

      if (piece === null) {
        console.log('attempted to undo non-existant move!');
        break;
      }

      if (action.takes && action.takes_has_moved) {
        console.log(`popping move, replacing at (${action.to_x}, ${action.to_y})`);

        const other_team = piece.team == Team.WHITE ? Team.BLACK : Team.WHITE;
        state.board[XYtoIndex(state, action.to_x, action.to_y)] = {
          type: action.takes,
          has_moved: action.takes_has_moved,
          team: other_team,
          uid: uuidv4(),
        };
        const i = state.lost_pieces[other_team].indexOf(action.takes);
        state.lost_pieces[other_team].splice(i, 1);
      }

      if (action.first_move) {
        piece.has_moved = false;
      }
      break;
    }
    case 'ChangeTeam': {
      if (action.to_team != state.current_team) {
        console.log(`undo move mismatch - expected current team ${state.current_team} to be team ${action.to_team}`);
      }
      state.current_team = action.from_team;
      break;
    }
    case 'Castle': {
      const rook_x = action.rook_x === 2 ? 0 : 7;
      const y = action.rook_y;
      const rook = state.board[XYtoIndex(state, action.rook_x, y)];
      const king = state.board[XYtoIndex(state, action.king_x, y)];
      if (rook === null || king === null) {
        console.log('failed to un-castle, rook or king was null!');
        break;
      }
      rook.has_moved = false;
      king.has_moved = false;
      state.board[XYtoIndex(state, action.king_x, y)] = null;
      state.board[XYtoIndex(state, 4, y)] = king;
      state.board[XYtoIndex(state, action.rook_x, y)] = null;
      state.board[XYtoIndex(state, rook_x, y)] = rook;
      break;
    }
  }
  ChessCheckWin(state);
};

export const ChessPopActionUntil = (state: ChessState, type: string): void => {
  if (state.actions.length <= 0)
    return;

  let next_action = state.actions[state.actions.length - 1];
  let do_stop = false;
  do {
    if (next_action.type === type)
      do_stop = true;

    ChessPopAction(state);

    if (state.actions.length <= 0)
      return;
    next_action = state.actions[state.actions.length - 1];

  } while (next_action && !do_stop);
};

export const ChessPushAction = (state: ChessState, action: Action): void => {
  state.actions = [...state.actions, action];
};

export const ChessPushNextTeam = (state: ChessState): void => {
  const new_team = GetNextTeam(state);

  const change_team: Action = {
    type: 'ChangeTeam',
    from_team: state.current_team,
    to_team: new_team,
  };
  ChessPushAction(state, change_team);

  state.current_team = new_team;
};

export const ChessPushMove = (state: ChessState, from_x: number, from_y: number, to_x: number, to_y: number): void => {
  const move = ChessGetPossibleMoves(state, from_x, from_y)
    .find(v => v[0] == to_x && v[1] == to_y);

  if (move == undefined) {
    console.log(`attempted to make an impossible move from (${from_x}, ${from_y}) to (${to_x}, ${to_y})`);
    return;
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

    state.board[XYtoIndex(state, to_x, to_y)] = rook;
    state.board[XYtoIndex(state, rook_x, to_y)] = null;
    state.board[XYtoIndex(state, to_x + (to_x == 2 ? - 1 : 1), to_y)] = king;
    state.board[XYtoIndex(state, from_x, to_y)] = null;

    const action: Action = {
      type: 'Castle',
      rook_x: to_y,
      rook_y: rook_x,
      king_x: from_x,
      king_y: from_y,
    };
    ChessPushAction(state, action);
    ChessPushNextTeam(state);
    ChessCheckWin(state);
    return;
  }

  const piece = state.board[XYtoIndex(state, from_x, from_y)];
  if (piece === null) {
    console.log(`attempted to move a piece that doesnt exist at (${from_x}, ${from_y})`);
    return;
  }

  const lost = state.board[XYtoIndex(state, to_x, to_y)];
  if (lost !== null) {
    if (lost.team == piece.team) {
      console.log(`attempted to take own piece (${from_x}, ${from_y}) to (${to_x}, ${to_y}) - team ${lost.team}`);
      return;
    }
    state.lost_pieces[lost.team].push(lost.type);
  }

  state.board[XYtoIndex(state, from_x, from_y)] = null;
  state.board[XYtoIndex(state, to_x, to_y)] = piece;

  const first_move = !piece.has_moved;
  piece.has_moved = true;

  const action: Action = {
    type: 'MovePiece',
    piece: piece.type,
    first_move,
    from_x, from_y, to_x, to_y
  };
  if (lost !== null) {
    action.takes = lost.type;
    action.takes_has_moved = lost.has_moved;
  }

  ChessPushAction(state, action);
  ChessPushNextTeam(state);
  ChessCheckWin(state);
};

export const ChessIsCheck = (state: ChessState): boolean[] => {
  const pieces = state.board.map((v, i) => v === null ? null : [v, ...IndexToXY(state, i)])
    .filter(v => v !== null) as [piece: GamePiece, x: number, y: number][];

  const white_king = pieces.find(p => p[0].type === 'king' && p[0].team == Team.WHITE);
  const black_king = pieces.find(p => p[0].type === 'king' && p[0].team == Team.BLACK);

  if (!white_king || !black_king) {
    console.log('a player is missing a king.  invalid game state!');
    return [...Array(Team.MAX)].map(_ => true);
  }

  const [, wk_x, wk_y] = white_king;
  const [, bk_x, bk_y] = black_king;

  const check = [...Array(Team.MAX)].map(_ => false);
  for (const [piece, x, y] of pieces.filter(p => p[0].type !== 'king')) {
    const moves = ChessGetPossibleMoves(state, x, y, false);
    for (const [move_x, move_y,] of moves.filter(p => p[2])) {
      const [compare_x, compare_y] = piece.team == Team.WHITE ? [bk_x, bk_y] : [wk_x, wk_y];
      if (compare_x == move_x && compare_y == move_y) {
        console.log(`${piece.type} at (${x},${y}) to (${compare_x},${compare_y})`);
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
    if (moves.length === 0) {
      checkmate[king.team] = false;
    }
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
      if (!piece.has_moved)
        pushMove(from_x, piece.team == Team.WHITE ? 4 : 3);
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
      if (ChessMoveIsCheck(state, from_x, from_y, moves[i][0], moves[i][1])[state.current_team]) {
        console.log('move is check');
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

export const ChessGetLost = (state: ChessState, team: Team): PieceType[] => {
  return state.lost_pieces[team];
};