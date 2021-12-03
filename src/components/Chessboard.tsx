import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChessGetLost, ChessGetPieces, ChessGetPossibleMoves, ChessLogDebug, ChessTimeSinceStarted, Team } from '../game/chess';
import { createGame } from '../game/reducer';
import { ChessPiece } from './ChessPiece';

const BOARD_ROWS = 8;
const BOARD_COLUMNS = 8;

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
  background: #3d3d3d;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 1;

  display: grid;
  grid-template-columns: ${() => 'auto '.repeat(BOARD_COLUMNS) + ';'};
  grid-template-rows: ${() => 'auto '.repeat(BOARD_ROWS) + ';'};
  user-select: none;
-moz-user-select: none;
`;

interface BoardGridProps {
  gridColor: string,
  grid_x: number,
  grid_y: number,
}

const BoardGridDiv = styled.div`
  background-color: ${(props: BoardGridProps) => props.gridColor};
  grid-column: ${(props: BoardGridProps) => props.grid_x + 1} / span 1;
  grid-row: ${(props: BoardGridProps) => props.grid_y + 1} / span 1;
`;

interface Props {
  lightColor: string,
  darkColor: string,
}

interface GridPosition {
  grid_x: number,
  grid_y: number,
}

export const Chessboard: React.FC<Props> = ({ lightColor, darkColor }) => {
  const [board, dispatch] = createGame(BOARD_ROWS, BOARD_COLUMNS);
  const [selected, setSelected] = useState<GridPosition | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(ChessTimeSinceStarted(board));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(ChessTimeSinceStarted(board));
    }, 1000);
    return () => clearInterval(interval);
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

  const debug = () => {
    ChessLogDebug(board);
  };

  return (
    <>
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
                gridColor={((i - y) % 2 == 0) ? lightColor : darkColor}
              />);
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
                on_place={(x, y) => dispatch({ type: 'move', from_x: v.x, from_y: v.y, to_x: x, to_y: y })}
                pixels_to_grid={pixelsToGrid}
                on_select_change={(selected) => selected ? setSelected({ grid_x: v.x, grid_y: v.y }) : setSelected(null)}
                can_click={v.team == board.current_team}
              />
          )
        }
      </BoardDiv>
      <div>
        <button onClick={() => dispatch({ type: 'undo' })}>undo</button>
        <button onClick={() => debug()}>debug</button>
        <h1>game time - {time}</h1>
        <h1>white lost</h1>
        <ul style={{ listStyle: 'none' }}>
          {
            ChessGetLost(board, Team.WHITE).map((v, i) => <li key={`white_lost_${i}`}>{v}</li>)
          }
        </ul>
        <h1>black lost</h1>
        <ul style={{ listStyle: 'none' }}>
          {
            ChessGetLost(board, Team.BLACK).map((v, i) => <li key={`black_lost_${i}`}>{v}</li>)
          }
        </ul>
        <h1>actions</h1>
        <ul style={{ listStyle: 'none' }}>
          {
            board.actions.map((v, i) => <li key={`action_${i}`}>{JSON.stringify(v)}</li>)
          }
        </ul>
        <ul>
          {board.check.map((b, i) => b && <li key={`check_${i}`}>{Team[i]} is in check</li>)}
          {board.checkmate.map((b, i) => b && <li key={`checkmate_${i}`}>{Team[i]} is in checkmate</li>)}
        </ul>
      </div>
    </>
  );
};