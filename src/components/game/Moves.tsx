import React from 'react';
import styled from 'styled-components';
import { BOARD_ROWS, ChessMove, Team } from '../../game/chess';
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

const letters = 'abcdefgh';

export const Moves: React.FC = () => {
  const { board } = useChessContext();

  const XYtoPos = (x: number, y: number): string => {
    return `${letters[x]}${BOARD_ROWS - y}`;
  };

  const moveString = (move: ChessMove): string => {
    let str = move.castle !== undefined ? 'Castled ' : 'Moved ';
    str += pieceToString(move.piece, move.team === Team.WHITE);
    str += ` from ${XYtoPos(move.from_x, move.from_y)} to ${XYtoPos(move.to_x, move.to_y)}`;

    if (move.takes) {
      str += ` (took ${pieceToString(move.takes.piece, move.team === Team.BLACK)})`;
    }

    return str;
  };

  return (
    <MoveContainer>
      {
        board.moves.map(
          (move, i) => {
            return (
              <MoveItem key={`move_${i}`} style={board.move_index == i ? { fontWeight: 'bold' } : {}}>
                {moveString(move)}
              </MoveItem>
            );
          }
        )
      }
    </MoveContainer>
  );
};