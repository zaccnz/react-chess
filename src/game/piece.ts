const PIECES_HAVE_SHADOW = true;
const PIECES_RESOLUTION = '512px';

enum PieceType {
  Pawn = 'pawn',
  Rook = 'rook',
  Knight = 'knight',
  Bishop = 'bishop',
  King = 'king',
  Queen = 'queen',
}

const pieceToString = (piece: PieceType, is_white: boolean): string => {
  switch (piece) {
    case 'pawn': return is_white ? '♙' : '♟︎';
    case 'rook': return is_white ? '♖' : '♜';
    case 'knight': return is_white ? '♘' : '♞';
    case 'bishop': return is_white ? '♗' : '♝';
    case 'king': return is_white ? '♔' : '♚';
    case 'queen': return is_white ? '♕' : '♛';
  }
  return '_';
};

const pieceToFilename = (piece: PieceType, is_white: boolean): string => {
  const path = `/pieces/${PIECES_HAVE_SHADOW ? '' : 'no_'}shadow/${PIECES_RESOLUTION}/`;
  const fname =
    `${is_white ? 'w' : 'b'}_\
${piece}_png_\
${PIECES_HAVE_SHADOW ? 'shadow_' : ''}\
${PIECES_RESOLUTION}.png`;

  return path + fname;
};

export { PieceType, pieceToFilename, pieceToString };