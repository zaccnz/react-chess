import React from 'react';
import styled from 'styled-components';
import { Chessboard } from './Chessboard';
import { createGame } from '../game/reducer';
import { Controls } from './Controls';
import { Players } from './Players';
import { Moves } from './Moves';

export const BOARD_ROWS = 8;
export const BOARD_COLUMNS = 8;

const ChessContainer = styled.div`
`;

const GameContainer = styled.div`
  width: 100%;
  display: grid;
  background: #eee;
  grid-template-columns: auto auto 250px;
  grid-template-rows: 60px 120px auto;
  grid-template-areas:
    "chess chess controls"
    "chess chess players"
    "chess chess moves";

  @media (max-width: 800px) {
    grid-template-rows: auto 60px 120px;
    grid-template-columns: 250px auto;
    grid-template-areas:
      "chess chess"
      "controls moves"
      "players moves"
  }
  @media (max-width: 600px) {
    grid-template-rows: auto 60px 120px auto;
    grid-template-columns: auto;
    grid-template-areas:
      "chess"
      "controls"
      "players"
      "moves"
  }
`;

const BoardContainer = styled.div`
  grid-area: chess;
  aspect-ratio: 1;
`;

export const Chess: React.FC = () => {
  const [board, dispatch] = createGame(BOARD_ROWS, BOARD_COLUMNS);
  return (
    <ChessContainer>
      <GameContainer>
        <BoardContainer>
          <Chessboard lightColor='#e3c06f' darkColor='#b88a4a' board={board} gameDispatch={dispatch} />
        </BoardContainer>
        <Controls
          gameDispatch={dispatch}
          toggleFullscreen={() => console.log('fullscreen not implemented')}
        />
        <Players
          board={board}
        />
        <Moves
          board={board}
        />
      </GameContainer>
    </ChessContainer>
  );
};