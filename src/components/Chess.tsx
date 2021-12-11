import React, { useState } from 'react';
import styled from 'styled-components';
import { Chessboard } from './game/Chessboard';
import { createGame } from '../game/reducer';
import { Controls } from './game/Controls';
import { Players } from './game/Players';
import { Moves } from './game/Moves';
import { Fullscreen } from '../wrappers/Fullscreen';

export const BOARD_ROWS = 8;
export const BOARD_COLUMNS = 8;

interface PassFullscreen {
  fullscreen: boolean;
}

const ChessContainer = styled.div<PassFullscreen>`
  ${props => props.fullscreen && `display: flex; align-items: center; justify-content: center; background: ${props.theme.colors.background}; width: 100%; height: 100%;`}
  width: 100%;
`;

const GameContainer = styled.div<PassFullscreen>`
  width: 100%;
  ${props => props.fullscreen && 'max-width: 1400px;'};
  display: grid;
  background: ${props => props.theme.colors.grid};
  grid-template-columns: auto auto 250px;
  grid-template-rows: 60px 120px auto;
  grid-template-areas:
    "chess chess controls"
    "chess chess players"
    "chess chess moves";

  @media (max-width: 800px) {
    grid-template-columns: 250px auto;
    grid-template-rows: auto 60px 120px;
    grid-template-areas:
      "chess chess"
      "controls moves"
      "players moves"
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto 60px 120px auto;
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
  const [fullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(b => !b);
  };

  return (
    <Fullscreen isFullscreen={fullscreen}>
      <ChessContainer fullscreen={fullscreen}>
        <GameContainer fullscreen={fullscreen}>
          <BoardContainer>
            <Chessboard board={board} gameDispatch={dispatch} />
          </BoardContainer>
          <Controls
            gameDispatch={dispatch}
            toggleFullscreen={() => toggleFullscreen()}
            quitGame={() => console.log('quit game not implemented')}
          />
          <Players
            board={board}
          />
          <Moves
            board={board}
          />
        </GameContainer>
      </ChessContainer>
    </Fullscreen>
  );
};