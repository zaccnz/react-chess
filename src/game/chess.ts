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

interface ActionMovePiece {
  type: PieceType;
  takes?: PieceType;
  takes_has_moved?: boolean;
  first_move: boolean;
  from_x: number;
  from_y: number;
  to_x: number;
  to_y: number;
}

interface ActionChangeTeam {
  from_team: Team;
  to_team: Team;
}

interface ActionCastle {
  rook_x: number;
  rook_y: number;
  king_x: number;
  king_y: number;
}

type Action = ActionMovePiece | ActionChangeTeam | ActionCastle;

export class Chess {
  rows: number;
  columns: number;

  grid: (GamePiece | null)[][];
  lost_pieces: PieceType[][];
  actions: Action[];
  current_team: Team;

  constructor(rows: number, columns: number) {
    this.grid = [...Array(rows)].map(() => [...Array(columns)].map(() => null));
    for (let i = 0; i < DefaultPieceLayout.length; i++) {
      this.grid[0][i] = {
        type: DefaultPieceLayout[i],
        has_moved: false,
        team: Team.BLACK,
        uid: uuidv4(),
      };
      this.grid[1][i] = {
        type: PieceType.Pawn,
        has_moved: false,
        team: Team.BLACK,
        uid: uuidv4(),
      };
      this.grid[7][i] = {
        type: DefaultPieceLayout[i],
        has_moved: false,
        team: Team.WHITE,
        uid: uuidv4(),
      };
      this.grid[6][i] = {
        type: PieceType.Pawn,
        has_moved: false,
        team: Team.WHITE,
        uid: uuidv4(),
      };
    }
    this.lost_pieces = [[], []];
    this.rows = rows;
    this.columns = columns;
    this.actions = [];
    this.current_team = Team.WHITE;
  }

  shallowClone(): Chess {
    const clone = new Chess(this.rows, this.columns);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        clone.grid[i][j] = this.grid[i][j];
      }
    }
    for (let i = 0; i < Team.MAX; i++) {
      for (let j = 0; j < this.lost_pieces[i].length; j++) {
        clone.lost_pieces[i].push(this.lost_pieces[i][j]);
      }
    }
    for (let i = 0; i < this.actions.length; i++) {
      clone.actions.push(this.actions[i]);
    }

    clone.current_team = this.current_team;

    return clone;
  }

  debugBoard(): void {
    for (let i = 0; i < this.rows; i++) {
      let val = '';
      for (let j = 0; j < this.columns; j++) {
        const piece = this.grid[i][j];
        if (piece !== null)
          val += pieceToString(piece.type, piece.team == Team.WHITE);
        else
          val += '  ';
      }
      console.log(val);
    }
  }

  popAction(): void {
    if (this.actions.length <= 0) {
      console.log('attempted to pop an action when one hasnt been taken yet');
      return;
    }

    const action = this.actions.pop();

    if (action === undefined) {
      console.log('last action invalid');
      return;
    }

    if ((action as ActionMovePiece).from_x !== undefined) {
      console.log('undo movement');
      const move = action as ActionMovePiece;
      const piece = this.grid[move.to_y][move.to_x];
      this.grid[move.from_y][move.from_x] = piece;
      this.grid[move.to_y][move.to_x] = null;

      if (piece === null) {
        console.log('attempted to undo non-existant move!');
        return;
      }

      if (move.takes && move.takes_has_moved) {
        const other_team = piece.team == Team.WHITE ? Team.BLACK : Team.WHITE;
        console.log(`popping move, replacing at (${move.to_x}, ${move.to_y})`);
        this.grid[move.to_y][move.to_x] = {
          type: move.takes,
          has_moved: move.takes_has_moved,
          team: other_team,
          uid: uuidv4(),
        };
        const i = this.lost_pieces[other_team].indexOf(move.takes);
        this.lost_pieces[other_team].splice(i, 1);
      }

      if (move.first_move) {
        piece.has_moved = false;
      }
    } else if ((action as ActionChangeTeam).from_team !== undefined) {
      console.log('undo change team');
      const change = action as ActionChangeTeam;
      if (change.to_team != this.current_team) {
        console.log(`undo move mismatch - expected current team ${this.current_team} to be team ${change.to_team}`);
      }
      this.current_team = change.from_team;
    } else if ((action as ActionCastle).rook_x !== undefined) {
      console.log('undo castle');
      const castle = action as ActionCastle;
      const rook_x = castle.rook_x === 2 ? 0 : 7;
      const y = castle.rook_y;
      const rook = this.grid[y][castle.rook_x];
      const king = this.grid[y][castle.king_x];
      if (rook === null || king === null) {
        console.log('failed to un-castle, rook or king was null!');
        return;
      }
      rook.has_moved = false;
      king.has_moved = false;
      this.grid[y][castle.king_x] = null;
      this.grid[y][4] = king;
      this.grid[y][castle.rook_x] = null;
      this.grid[y][rook_x] = rook;
    }
  }

  popActionUntilMove(): void {
    if (this.actions.length <= 0)
      return;

    let next_action = this.actions[this.actions.length - 1];
    let do_stop = false;
    do {
      if ((next_action as ActionMovePiece).first_move !== undefined)
        do_stop = true;

      this.popAction();

      if (this.actions.length <= 0)
        return;
      next_action = this.actions[this.actions.length - 1];

    } while (next_action && !do_stop);
  }

  pushAction(action: Action): void {
    this.actions.push(action);
  }

  getNextTeam(): Team {
    return this.current_team == Team.WHITE ? Team.BLACK : Team.WHITE;
  }

  pushNextTeam(): void {
    const new_team = this.getNextTeam();

    const change_team: ActionChangeTeam = {
      from_team: this.current_team,
      to_team: new_team,
    };
    this.pushAction(change_team);

    this.current_team = new_team;
  }

  pushMove(from_x: number, from_y: number, to_x: number, to_y: number): void {
    const move = this.getPossibleMoves(from_x, from_y)
      .find(v => v[0] == to_x && v[1] == to_y);

    if (move == undefined) {
      console.log(`attempted to make an impossible move from (${from_x}, ${from_y}) to (${to_x}, ${to_y})`);
      return;
    }

    if (move[3]) {
      const rook_x = to_x == 2 ? 0 : 7;
      const rook = this.grid[to_y][rook_x];
      const king = this.grid[from_y][from_x];
      if (rook === null || king === null) {
        console.log('castle failed, king or rook was null!');
        return;
      }
      rook.has_moved = false;
      king.has_moved = false;

      this.grid[to_y][to_x] = rook;
      this.grid[to_y][rook_x] = null;
      this.grid[to_y][to_x + (to_x == 2 ? - 1 : 1)] = king;
      this.grid[to_y][from_x] = null;

      const action: ActionCastle = {
        rook_x: to_y,
        rook_y: rook_x,
        king_x: from_x,
        king_y: from_y,
      };
      this.pushAction(action);
      this.pushNextTeam();
      return;
    }

    const piece = this.grid[from_y][from_x];
    if (piece === null) {
      console.log(`attempted to move a piece that doesnt exist at (${from_x}, ${from_y})`);
      return;
    }

    const lost = this.grid[to_y][to_x];
    if (lost !== null) {
      if (lost.team == piece.team) {
        console.log(`attempted to take own piece (${from_x}, ${from_y}) to (${to_x}, ${to_y}) - team ${lost.team}`);
        return;
      }
      this.lost_pieces[lost.team].push(lost.type);
    }

    this.grid[from_y][from_x] = null;
    this.grid[to_y][to_x] = piece;

    const first_move = !piece.has_moved;
    piece.has_moved = true;

    const action: ActionMovePiece = {
      type: piece.type,
      first_move,
      from_x, from_y, to_x, to_y
    };
    if (lost !== null) {
      action.takes = lost.type;
      action.takes_has_moved = lost.has_moved;
    }

    this.pushAction(action);
    this.pushNextTeam();
  }

  isCheck(): boolean {
    return false;
  }

  moveIsCheck(from_x: number, from_y: number, to_x: number, to_y: number): boolean {
    const temp = this.grid[to_y][to_x];
    this.grid[to_y][to_x] = this.grid[from_y][from_x];
    const is_check = this.isCheck();
    this.grid[to_y][to_x] = temp;
    return is_check;
  }

  getPossibleMoves(from_x: number, from_y: number): PotentialMove[] {
    const piece = this.grid[from_y][from_x];
    if (piece == null) return [];
    const moves: PotentialMove[] = [];
    const white = piece.team == Team.WHITE;

    const inBounds = (to_x: number, to_y: number) => !(to_x < 0 || to_x >= this.columns || to_y < 0 || to_y >= this.columns);

    const isEnemy = (x: number, y: number) => {
      if (!inBounds(x, y)) return false;
      const replaces = this.grid[y][x];
      return replaces && replaces.team != piece.team;
    };

    const pushMove = (to_x: number, to_y: number, is_castle = false) => {
      if (!inBounds(to_x, to_y)) return;

      const replaces = this.grid[to_y][to_x];
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
      this.grid[to_y][to_x] == null && pushMove(to_x, to_y);
    };

    const pushInDirection = (dir_x: number, dir_y: number) => {
      let x = from_x + dir_x, y = from_y + dir_y;
      while (inBounds(x, y)) {
        pushMove(x, y);
        if (this.grid[y][x] != undefined)
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
        pushMove(from_x - 1, from_y - 1);
        pushMove(from_x + 1, from_y);
        pushMove(from_x - 1, from_y);
        pushMove(from_x, from_y + 1);
        pushMove(from_x, from_y - 1);

        const king = this.grid[from_y][from_x];
        if (king?.has_moved) {
          break;
        }

        let rook = this.grid[from_y][0];
        if (rook && rook.type == PieceType.Rook && !rook.has_moved) {
          let can_castle = !this.isCheck();
          for (let i = 5; i < 7; i++) {
            can_castle = can_castle && this.grid[from_y][i] == null;
          }
          for (let i = 5; i < 7; i++) {
            can_castle = can_castle && !this.moveIsCheck(from_x, from_y, i, from_y);
          }
          if (can_castle) {
            console.log('pushing castle');
            pushMove(6, from_y, true);
          }
        }
        rook = this.grid[from_y][7];
        if (rook && rook.type == PieceType.Rook && !rook.has_moved) {
          let can_castle = !this.isCheck();
          for (let i = 1; i < 4; i++) {
            can_castle = can_castle && this.grid[from_y][i] == null;
          }
          for (let i = 1; i < 4; i++) {
            can_castle = can_castle && !this.moveIsCheck(from_x, from_y, i, from_y);
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

    return moves;
  }

  getPieces(): GamePieceWithLocation[] {
    return this.grid.reduce((acc: (GamePieceWithLocation | null)[], val: (GamePiece | null)[], y: number) => {
      return acc.concat(val.map((v, x) => (v == null ? null : { ...v, x, y } as GamePieceWithLocation)));
    }, []).filter(v => v !== null) as GamePieceWithLocation[];
  }

  getLost(team: Team): PieceType[] {
    return this.lost_pieces[team];
  }
}