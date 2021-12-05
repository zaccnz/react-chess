import React, { useReducer } from 'react';
import { ChessState, ChessInitializeState, ChessMakeMove, ChessUndo, ChessRedo } from './chess';

export type GameAction =
  | { type: 'move', from_x: number, from_y: number, to_x: number, to_y: number }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'pause' };

const gameReducer = (state: ChessState, action: GameAction): ChessState => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'move': {
      ChessMakeMove(newState, action.from_x, action.from_y, action.to_x, action.to_y);
      break;
    }
    case 'undo': {
      ChessUndo(newState);
      break;
    }
    case 'redo': {
      ChessRedo(newState);
      break;
    }
    default: {
      console.log('unimplemented action: ' + action.type);
    }
  }

  return newState;
};

export const createGame = (rows: number, columns: number): [ChessState, React.Dispatch<GameAction>] => {
  return useReducer(gameReducer, ChessInitializeState(rows, columns));
};