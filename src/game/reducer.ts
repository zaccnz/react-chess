import React, { useReducer } from 'react';
import { aiMakeMove } from './bot';
import { ChessState, ChessInitializeState, ChessMakeMove, ChessUndo, ChessRedo, Team, ChessCheckWin } from './chess';

export type GameAction =
  | { type: 'move', from_x: number, from_y: number, to_x: number, to_y: number }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'pause' };

const gameReducer = (state: ChessState, action: GameAction): ChessState => {
  const newState: ChessState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'move': {
      ChessMakeMove(newState, action.from_x, action.from_y, action.to_x, action.to_y);
      console.log('ai move start');
      if (newState.current_team == Team.BLACK) {
        const move = aiMakeMove(newState, Team.BLACK);
        if (move) {
          ChessMakeMove(newState, move.from_x, move.from_y, move.to_x, move.to_y);
        }
      }
      ChessCheckWin(newState);
      console.log('ai move complete');
      break;
    }
    case 'undo': {
      ChessUndo(newState);
      ChessCheckWin(newState);
      break;
    }
    case 'redo': {
      ChessRedo(newState);
      ChessCheckWin(newState);
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