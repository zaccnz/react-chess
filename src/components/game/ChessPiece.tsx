import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PieceType, pieceToFilename } from '../../game/piece';

export type PixelsToGridFunc = (x: number, y: number) => [number, number];
export type OnPlaceFunc = (grid_x: number, grid_y: number) => void;
export type OnSelectChangedFunc = (selected: boolean) => void;

export interface PieceData {
  type: PieceType,
  grid_x: number,
  grid_y: number,
  is_white: boolean,
}

interface PieceProps extends PieceData {
  on_place: OnPlaceFunc;
  pixels_to_grid: PixelsToGridFunc;
  on_select_change: OnSelectChangedFunc;
  can_click: boolean;
}

const PieceDiv = styled.div`
  grid-column: ${(props: PieceProps) => props.grid_x + 1} / span 1;
  grid-row: ${(props: PieceProps) => props.grid_y + 1} / span 1;
  position: relative;
  transition: grid-row 2s, grid-column 2s;
`;

interface PieceImageProps {
  drag_state: DragState | null,
}

const PieceIamge = styled.img.attrs((props: PieceImageProps) => {
  if (props.drag_state !== null) return ({
    style: {
      position: 'absoltue',
      top: `${props.drag_state.y - props.drag_state.rely}px`,
      left: `${props.drag_state.x - props.drag_state.relx}px`,
    },
  });
})`
  top: 10%;
  left: 10%;
  position: absolute;
  width: 80%;
  height: 80%;
`;

interface DragState {
  x: number,
  y: number,
  relx: number,
  rely: number,
}

export const ChessPiece: React.FC<PieceProps> = (props) => {
  const [drag, setDrag] = useState<DragState | null>(null);

  const onMouseDown: React.MouseEventHandler<HTMLImageElement> = (e) => {
    if (e.button != 0 || !props.can_click) return;
    const relx = e.pageX - (e.target as HTMLImageElement).offsetLeft;
    const rely = e.pageY - (e.target as HTMLImageElement).offsetTop;

    props.on_select_change(true);

    setDrag({
      x: e.pageX,
      y: e.pageY,
      relx: relx,
      rely: rely,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onTouchDown: React.TouchEventHandler<HTMLImageElement> = (e) => {
    if (!props.can_click || e.touches.length === 0) return;
    const relx = e.touches[0].pageX - (e.target as HTMLImageElement).offsetLeft;
    const rely = e.touches[0].pageY - (e.target as HTMLImageElement).offsetTop;

    props.on_select_change(true);

    setDrag({
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
      relx: relx,
      rely: rely,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (drag === null) return;
    setDrag(drag => ({
      x: e.pageX,
      y: e.pageY,
      relx: drag !== null ? drag.relx : 0,
      rely: drag !== null ? drag.rely : 0,
    }));

    e.stopPropagation();
    e.preventDefault();
  };

  const onTouchMove = (e: TouchEvent) => {
    if (drag === null && e.touches.length > 0) return;
    setDrag(drag => ({
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
      relx: drag !== null ? drag.relx : 0,
      rely: drag !== null ? drag.rely : 0,
    }));

    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e: MouseEvent) => {
    if (drag !== null) {
      props.on_select_change(false);
      setDrag(null);
      const grid_pos = props.pixels_to_grid(e.pageX, e.pageY);
      props.on_place(grid_pos[0], grid_pos[1]);
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    console.log(`${drag} -> ${e.touches.length}`);
    if (drag !== null) {
      const [pos_x, pos_y] = [drag.x, drag.y];
      props.on_select_change(false);
      setDrag(null);
      const grid_pos = props.pixels_to_grid(pos_x, pos_y);
      props.on_place(grid_pos[0], grid_pos[1]);
    }
  };

  useEffect(() => {
    // start dragging
    if (drag !== null) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      // stop dragging
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [drag]);

  return (
    <PieceDiv {...props}>
      <PieceIamge
        onMouseDown={onMouseDown}
        onTouchStart={onTouchDown}
        drag_state={drag}
        draggable={props.can_click}
        src={pieceToFilename(props.type, props.is_white)}
      />
    </PieceDiv>
  );
};