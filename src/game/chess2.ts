export const helloWorld = (): string => {
    return 'Hello world!';
}

/* CONSTANTS */

export const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const letters = 'abcdefgh';
const BLACK_FEN = "prnbqk";
const WHITE_FEN = "PRNBQK";

/* TEAM */

type Team = 'black' | 'white';

const OTHER_TEAM: Record<Team, Team> = {
    'black': 'white',
    'white': 'black',
};

/* PIECE */

enum Pieces {
    Pawn = 'pawn',
    Rook = 'rook',
    Knight = 'knight',
    Bishop = 'bishop',
    King = 'king',
    Queen = 'queen',
};

const PIECES_FEN = [Pieces.Pawn, Pieces.Rook, Pieces.Knight, Pieces.Bishop, Pieces.Queen, Pieces.King];

interface Piece {
    type: Pieces;
    team: Team;
    fen: string;
}

const fenToPiece = (piece: string): Piece => {
    if (piece.length !== 1) {
        throw new Error(`Invalid piece ${piece} is not a valid FEN piece`);
    }
    const team: Team = WHITE_FEN.indexOf(piece) >= 0 ? 'white' : 'black';
    if (team === 'black' && BLACK_FEN.indexOf(piece) < 0) {
        throw new Error(`Invalid piece ${piece} is not a valid FEN piece`);
    }
    const index = team === 'white' ? WHITE_FEN.indexOf(piece) : BLACK_FEN.indexOf(piece);
    const type = PIECES_FEN[index];

    return {
        type,
        team,
        fen: piece,
    }
}

const pieceToFen = (piece: Piece): string => {
    const lookup = piece.team === 'white' ? WHITE_FEN : BLACK_FEN;
    return lookup[PIECES_FEN.indexOf(piece.type)];
}

/* BOARD */

type Board = (Piece | undefined)[][];

const fenToBoard = (boardFen: string): Board => {
    const PARSE_INTS = (v: string) => Number.isNaN(parseInt(v)) ? v : parseInt(v);
    const rows = boardFen.split('/');
    const board: Board = new Array(8).fill(0).map(_ => new Array(8).fill(undefined));
    let y = 0;
    for (const row of rows) {
        const chars = row.split("").map(PARSE_INTS);
        let x = 0;

        for (const char of chars) {
            if (typeof char === 'number') {
                x += char;
            } else {
                board[y][x] = fenToPiece(char);
                x += 1;
            }
        }

        y += 1;
    }
    return board;
}

const boardToFen = (board: Board): string => {
    const strings: string[] = [];

    for (const row of board) {
        let i = 0;
        let string = '';
        for (const val of row) {
            if (val === undefined) {
                i++;
            } else {
                if (i > 0) {
                    string += `${i}`;
                    i = 0;
                }
                string += pieceToFen(val);
            }
        }

        if (i > 0) {
            string += `${i}`;
        }
        strings.push(string);
    }

    return strings.join('/');
}

/* INDEX */

type Index = [x: number, y: number];

export const indexToString = (index: Index): string => {
    const [x, y] = index;
    if (x < 0 || x > 7) {
        throw Error(`Invalid index ${index}, x ${x} is invalid`);
    }
    if (y < 0 || y > 7) {
        throw Error(`Invalid index ${index}, y ${y} is invalid`);
    }
    return `${letters[x]}${8 - y}`
}

export const stringToIndex = (position: string): Index => {
    if (position.length !== 2) {
        throw Error(`Invalid position ${position}, position must be two characters.`);
    }

    const [l, nStr] = position;
    const n = parseInt(nStr);

    if (letters.indexOf(l) < 0) {
        throw Error(`Invalid position ${position}, letter ${l} is invalid`);
    }
    if (Number.isNaN(n) || n < 1 || n > 8) {
        throw Error(`Invalid position ${position}, number ${n} is invalid`);
    }

    return [letters.indexOf(l), 8 - n];
}

/* MOVE */

interface Move {
    piece: Piece;
    from: [x: number, y: number];
    to: [x: number, y: number];
    flags: {
        captures?: Piece;
        castling?: 'kingside' | 'queenside';
        disabledCastling?: 'both' | 'kingside' | 'queenside';
        /* if promotion is true, replace with piece before making the move */
        promotion: boolean;
        promoteTo?: Piece;
        checking: boolean;
        checkmating: boolean;
        enPassant: boolean;
    }
};

const moveSan = (move: Move): string => {
    // TODO: https://en.wikipedia.org/wiki/Algebraic_notation_(chess)
    return '';
}

/* CHESS */

interface Chess {
    board: Board;
    turn: Team;
    castling: {
        whiteKing: boolean;
        whiteQueen: boolean;
        blackKing: boolean;
        blackQueen: boolean;
    }
    enPassant?: [x: number, y: number];
    halfmoves: number;
    fullmoves: number;

    check: Record<Team, boolean>;
    checkMate: Record<Team, boolean>;
    staleMate: boolean;
    draw: boolean;
    captures: Piece[];

    moves: Move[];
    moveIndex: number;
};

export const chessCreate = (fen: string = INITIAL_FEN): Chess => {
    const [board, turn, castling, enPassant, half, full] = fen.split(' ');

    const chess: Chess = {
        board: fenToBoard(board),
        turn: turn === 'w' ? 'white' : 'black',
        castling: {
            blackKing: castling.includes('k'),
            blackQueen: castling.includes('q'),
            whiteKing: castling.includes('K'),
            whiteQueen: castling.includes('Q'),
        },
        enPassant: enPassant !== '-' ? stringToIndex(enPassant) : undefined,
        halfmoves: parseInt(half),
        fullmoves: parseInt(full),

        check: {
            'white': false,
            'black': false,
        },
        checkMate: {
            'white': false,
            'black': false,
        },
        staleMate: false,
        draw: false,
        captures: [],

        moves: [],
        moveIndex: -1,
    }

    chessUpdateState(chess)

    return chess;
}

export const chessGetFen = (chess: Chess): string => {
    const board = boardToFen(chess.board);
    const turn = chess.turn === 'white' ? 'w' : 'b';
    const castling = Object.values(chess.castling).some(v => v) ?
        (chess.castling.whiteKing ? 'K' : '') + (chess.castling.whiteQueen ? 'Q' : '')
        + (chess.castling.blackKing ? 'k' : '') + (chess.castling.blackQueen ? 'q' : '')
        : '-';
    const enPassant = chess.enPassant ? indexToString(chess.enPassant) : '-';
    const clock = `${chess.halfmoves} ${chess.fullmoves}`;

    return `${board} ${turn} ${castling} ${enPassant} ${clock}`;
}

const chessGetMoves = (chess: Chess, legal: boolean = true): Move[] => {
    const moves: Move[] = [];

    return moves;
}

const chessMakeMove = (chess: Chess, move: Move) => {

}

const chessUndoMove = (chess: Chess, move: Move) => {

}

const chessUndo = (chess: Chess) => {

}

const chessRedo = (chess: Chess) => {

}

const chessUpdateState = (chess: Chess) => {
    // check for check, stalemate, etc
}

/* TESTING FUNCTIONS */

const chessPerft = (chess: Chess, depth: number): number => {
    if (depth === 0) {
        return 1;
    }

    const moves = chessGetMoves(chess, false);
    let nodes = 0;
    for (let i = 0; i < moves.length; i++) {
        chessMakeMove(chess, moves[i]);
        /* CHECK: do we need 'OTHER_TEAM' */
        if (chess.check[OTHER_TEAM[chess.turn]])
            nodes += chessPerft(chess, depth - 1);
        chessUndoMove(chess, moves[i]);
    }

    return nodes;
}