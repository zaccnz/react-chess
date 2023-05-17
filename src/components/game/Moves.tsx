import React from 'react';
import styled from 'styled-components';
import { Move } from 'chess.js';
import { pieceToString } from '../../game/piece';
import { useChessContext } from '../../providers/ChessProvider';

const MoveContainer = styled.div`
  grid-area: moves;
  overflow-y: auto;
  max-height: min(calc(100vw - 450px), calc(1000px - 430px));
  @media (max-width: 800px) {
    max-height: none;
  }
`;

const MoveItem = styled.p`
  padding: 5px 10px;
  margin: 0px;
`;

export const Moves: React.FC = () => {
  const { history, redoStack } = useChessContext();

  const moveString = (move: Move): string => {
    let str = (move.flags.indexOf('k') >= 0 || move.flags.indexOf('q') >= 0) ? 'Castled ' : 'Moved ';
    str += pieceToString(move.piece, move.color === 'w');
    str += ` from ${move.from} to ${move.to}`;

    if (move.captured) {
      str += ` (took ${pieceToString(move.captured, move.color === 'w')})`;
    }

    return str;
  };

  console.log(redoStack);

  return (
    <MoveContainer>
      {
        history.map(
          (move, i) => {
            return (
              <MoveItem key={`move_${i}`} style={history.length - 1 === i ? { fontWeight: 'bold' } : {}}>
                {moveString(move)}
              </MoveItem>
            );
          }
        )
      }
      {
        [...redoStack].reverse().map(
          (move, i) => {
            return (
              <MoveItem key={`move_redo_${i}`}>
                {moveString(move)}
              </MoveItem>
            );
          }
        )
      }
    </MoveContainer>
  );
};