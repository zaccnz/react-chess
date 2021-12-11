import React, { useState, useRef, useEffect } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ChessGetPieces, ChessGetPossibleMoves, ChessState, ChessTimeSinceStarted, Team } from '../../game/chess';
import { GameAction } from '../../game/reducer';
import { BOARD_COLUMNS, BOARD_ROWS } from '../Chess';
import { ChessPiece } from './ChessPiece';

interface MoveProps {
  grid_x: number,
  grid_y: number,
  will_take: boolean,
  is_castle: boolean,
}

const MoveContainerDiv = styled.div`
grid-column: ${(props: MoveProps) => props.grid_x + 1} / span 1;
grid-row: ${(props: MoveProps) => props.grid_y + 1} / span 1;
position: relative;
`;

const MoveInnerDiv = styled.div`
top: 25%;
left: 25%;
position: absolute;
width: 50%;
height: 50%;
border-radius: 50%;
background-color: ${(props: MoveProps) => props.will_take ? '#fc0339' : props.is_castle ? '#f5a742' : '#03a1fc'};
`;

const Move: React.FC<MoveProps> = (props) => {
  return (
    <MoveContainerDiv {...props}>
      <MoveInnerDiv  {...props} />
    </MoveContainerDiv>
  );
};

const BoardDiv = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: ${() => 'auto '.repeat(BOARD_COLUMNS) + ';'};
  grid-template-rows: ${() => 'auto '.repeat(BOARD_ROWS) + ';'};
  user-select: none;
  -moz-user-select: none;
`;

interface BoardGridProps {
  gridColor: boolean,
  grid_x: number,
  grid_y: number,
  theme: DefaultTheme,
}

const BoardGridDiv = styled.div`
  position: relative;
  background-color: ${(props: BoardGridProps) => props.gridColor ? props.theme.chess.board_light : props.theme.chess.board_dark};
  grid-column: ${(props: BoardGridProps) => props.grid_x + 1} / span 1;
  grid-row: ${(props: BoardGridProps) => props.grid_y + 1} / span 1;
`;

const BoardGridRowLabel = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${props => props.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
`;
const BoardGridColLabel = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
`;

interface Props {
  board: ChessState,
  gameDispatch: React.Dispatch<GameAction>,
}

interface GridPosition {
  grid_x: number,
  grid_y: number,
}

export const Chessboard: React.FC<Props> = ({ board, gameDispatch }) => {
  const [selected, setSelected] = useState<GridPosition | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [_, setTime] = useState(ChessTimeSinceStarted(board));

  const onTouchMove = (e: TouchEvent) => {
    if (!e.target || !boardRef.current) return;
    const div = e.target as HTMLDivElement;
    if (div === boardRef.current || boardRef.current.contains(div)) {
      e.preventDefault();
      e.stopPropagation();
      console.log('cancelled touch scroll');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(ChessTimeSinceStarted(board));
    }, 1000);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      clearInterval(interval);
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const pixelsToGrid = (x: number, y: number): [number, number] => {
    const parent = boardRef.current;
    if (parent === null) {
      console.log('failed to get reference to game board div!');
      return [0, 0];
    }

    const grid_x = Math.floor((x - parent.offsetLeft) / (parent.offsetWidth / BOARD_COLUMNS));
    const grid_y = Math.floor((y - parent.offsetTop) / (parent.offsetHeight / BOARD_ROWS));
    return [grid_x, grid_y];
  };

  return (
    <BoardDiv ref={boardRef}>
      {
        [...Array(BOARD_ROWS * BOARD_COLUMNS)].map(
          (_, i) => {
            const x = i % BOARD_COLUMNS;
            const y = Math.floor(i / BOARD_COLUMNS);
            return (<BoardGridDiv
              key={i}
              grid_x={x}
              grid_y={y}
              gridColor={(i - y) % 2 == 0}
            >
              {x == 0 && <BoardGridRowLabel>{8 - y}</BoardGridRowLabel>}
              {y == 0 && <BoardGridColLabel>{'abcdefgh'[x]}</BoardGridColLabel>}
            </BoardGridDiv>);
          }
        )
      }
      {
        selected &&
        ChessGetPossibleMoves(board, selected.grid_x, selected.grid_y).map((move, i) =>
          <Move key={`move_${i}`} grid_x={move[0]} grid_y={move[1]} will_take={move[2]} is_castle={move[3]} />
        )
      }
      {
        ChessGetPieces(board).map(
          (v, i) =>
            <ChessPiece
              key={`piece_${i}_${v.uid}`}
              type={v.type}
              grid_x={v.x}
              grid_y={v.y}
              is_white={v.team == Team.WHITE}
              on_place={(x, y) => gameDispatch({ type: 'move', from_x: v.x, from_y: v.y, to_x: x, to_y: y })}
              pixels_to_grid={pixelsToGrid}
              on_select_change={(selected) => selected ? setSelected({ grid_x: v.x, grid_y: v.y }) : setSelected(null)}
              can_click={v.team == board.current_team}
            />
        )
      }
    </BoardDiv>
  );
};