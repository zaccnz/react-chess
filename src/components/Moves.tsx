import React from 'react';
import styled from 'styled-components';
import { Action, ChessState } from '../game/chess';

interface Props {
  board: ChessState;
}

const MoveContainer = styled.div`
  grid-area: moves;
  overflow-y: auto;
  max-height: min(calc(100vw - 450px), calc(1000px - 430px));
  @media (max-width: 800px) {
    max-height: none;
  }
`;

const MoveItem = styled.p`
`;

export const Moves: React.FC<Props> = ({ board }) => {

  const moveString = (move: Action): string => {
    let str = move.type;
    if (move.type === 'MovePiece') {
      str += ` ${move.from_x},${move.from_y} to ${move.to_x},${move.to_y}`;
    }

    return str;
  };

  return (
    <MoveContainer>
      {
        board.actions.filter(p => p.type !== 'ChangeTeam').map(
          (move, i) => <MoveItem key={`move_${i}`}> {moveString(move)} </MoveItem>
        )
      }
    </MoveContainer>
  );
};