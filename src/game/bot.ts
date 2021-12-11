import { ChessGetPossibleMoves, ChessState, GamePiece, Team } from './chess';
import { PieceType } from './piece';

type AiMove = { from_x: number, from_y: number, to_x: number, to_y: number };

const scorePiece = (piece: PieceType, ours: boolean): number => {
  const multiplier = ours ? 1 : -1;
  let cost = 0;
  switch (piece) {
    case 'pawn': cost = 10; break;
    case 'knight': cost = 30; break;
    case 'bishop': cost = 30; break;
    case 'rook': cost = 50; break;
    case 'queen': cost = 90; break;
    case 'king': cost = 900; break;
  }
  return cost * multiplier;
};

const aiScoreTeam = (state: ChessState, team: Team): number => {
  return (state.board.filter(p => p !== null) as { type: PieceType, team: Team }[])
    .map(p => scorePiece(p.type, p.team === team))
    .reduce((a, v) => a + v, 0);
};

const aiTempMove = (state: ChessState, move: AiMove): GamePiece | null => {
  const xy2i = (x: number, y: number) => y * state.columns + x;
  const temp = state.board[xy2i(move.to_x, move.to_y)];
  state.board[xy2i(move.to_x, move.to_y)] = state.board[xy2i(move.from_x, move.from_y)];
  state.board[xy2i(move.from_x, move.from_y)] = null;
  return temp;
};

const aiTempUndoMove = (state: ChessState, move: AiMove, temp: GamePiece | null): void => {
  const xy2i = (x: number, y: number) => y * state.columns + x;
  state.board[xy2i(move.from_x, move.from_y)] = state.board[xy2i(move.to_x, move.to_y)];
  state.board[xy2i(move.to_x, move.to_y)] = temp;
};

const aiGenMoves = (state: ChessState, team: Team): AiMove[] => {
  const pieces = state.board.map((p, i) =>
    p === null ? null : [i % state.columns, Math.floor(i / state.columns), p.team]
  ).filter(p => p !== null && p[2] == team) as [number, number, Team][];

  const genMove = (x: number, y: number): AiMove[] => {
    return ChessGetPossibleMoves(state, x, y).map(([to_x, to_y]) => {
      return {
        from_x: x,
        from_y: y,
        to_x, to_y,
      } as AiMove;
    });
  };

  return pieces
    .map(([x, y,]) => genMove(x, y))
    .flat();
};

const aiMinimax = (state: ChessState, team: Team, depth: number, alpha: number, beta: number, our_move = false): number => {
  if (depth === 0) return aiScoreTeam(state, team);

  if (our_move) {
    let max = Number.NEGATIVE_INFINITY;
    for (const move of aiGenMoves(state, team)) {
      const temp = aiTempMove(state, move);
      const score = aiMinimax(state, team, depth - 1, alpha, beta, false);
      aiTempUndoMove(state, move, temp);
      if (score > max) max = score;
      if (score > alpha) alpha = score;

      if (beta <= alpha) break;
    }
    return max;
  } else {
    let min = Number.POSITIVE_INFINITY;
    const enemy = team == Team.BLACK ? Team.WHITE : Team.BLACK;
    for (const move of aiGenMoves(state, enemy)) {
      const temp = aiTempMove(state, move);
      const score = aiMinimax(state, team, depth - 1, alpha, beta, true);
      aiTempUndoMove(state, move, temp);
      if (score < min) min = score;
      if (score < beta) beta = score;

      if (beta <= alpha) break;
    }
    return min;
  }
};

export const aiDoMinimax = (state: ChessState, team: Team): AiMove | undefined => {
  const moves = aiGenMoves(state, team);
  let bestMove = undefined;
  let bestScore = Number.NEGATIVE_INFINITY;
  for (const move of moves) {
    const temp = aiTempMove(state, move);
    const score = aiMinimax(state, team, 3, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    aiTempUndoMove(state, move, temp);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }
  return bestMove;
};

export const aiMakeMove = (state: ChessState, team: Team): AiMove | undefined => {
  const t0 = performance.now();
  const move = aiDoMinimax(state, team);
  const t1 = performance.now();
  console.log(`AI move generation took ${t1 - t0} ms`);
  return move;
};