import React, { useReducer } from 'react';
import { Chess } from './chess';

type GameAction =
  | { type: 'move', from_x: number, from_y: number, to_x: number, to_y: number }
  | { type: 'undo' };

const gameReducer = (state: Chess, action: GameAction): Chess => {
  switch (action.type) {
    case 'move': {
      state.pushMove(action.from_x, action.from_y, action.to_x, action.to_y);
      break;
    }
    case 'undo': {
      state.popActionUntilMove();
      break;
    }
  }

  return state.shallowClone();
};

export const createGame = (rows: number, columns: number): [Chess, React.Dispatch<GameAction>] => {
  return useReducer(gameReducer, new Chess(rows, columns));
};