import React from 'react';
import styled from 'styled-components';
import { faUndo, faRedo, faPause, faExpandAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameAction } from '../../game/reducer';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${props => props.theme.menus.controls.background};
  user-select: none;
`;

const ControlsButton = styled(FontAwesomeIcon)`
  background: #fff;
  padding: 9px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${props => props.theme.menus.controls.background};
  border: 1px solid #ffffffff;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`;

interface Props {
  gameDispatch: React.Dispatch<GameAction>,
  toggleFullscreen: () => void;
  quitGame: () => void;
}

export const Controls: React.FC<Props> = ({ gameDispatch, toggleFullscreen, quitGame }) => {
  return (
    <ControlsContainer>
      <ControlsButton
        onClick={() => gameDispatch({ 'type': 'undo' })}
        icon={faUndo}
        title="Undo move"
      />
      <ControlsButton
        onClick={() => gameDispatch({ 'type': 'redo' })}
        icon={faRedo}
        title="Redo move"
      />
      <ControlsButton
        onClick={() => gameDispatch({ 'type': 'pause' })}
        icon={faPause}
        title="Pause"
      />
      <ControlsButton
        onClick={() => toggleFullscreen()}
        icon={faExpandAlt}
        title="Fullscreen"
      />

      <ControlsButton
        onClick={() => quitGame()}
        icon={faSignOutAlt}
        title="Leave game"
      />
    </ControlsContainer>
  );
};
