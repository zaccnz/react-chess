import React, { useReducer } from 'react';
import { ChessConfig } from '../providers/ChessProvider';
import { ChessState, ChessInitializeState, ChessMakeMove, ChessUndo, ChessRedo, ChessCheckWin } from './chess';

export type GameAction =
  | { type: 'create', config: ChessConfig, username?: string, length: number }
  | { type: 'move', from_x: number, from_y: number, to_x: number, to_y: number }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'pause' };

const gameReducer = (state: ChessState, action: GameAction): ChessState => {
  const newState: ChessState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'create': {
      return ChessInitializeState(action.config, action.username, action.length);
    }
    case 'move': {
      ChessMakeMove(newState, action.from_x, action.from_y, action.to_x, action.to_y);
      ChessCheckWin(newState);
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

const ChessDefaultConfig: ChessConfig = {
  player_white: 'local',
  player_black: 'local',
  positions: 'default'
};

export const createGame = (username: string, length: number):
  [ChessState, React.Dispatch<GameAction>] => {

  return useReducer(gameReducer,
    ChessInitializeState(ChessDefaultConfig, username, length));
};