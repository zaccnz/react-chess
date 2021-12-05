import React from 'react';
import styled from 'styled-components';
import { faUndo, faRedo, faPause, faExpandAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameAction } from '../game/reducer';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #bbb;
`;

const ControlsButton = styled(FontAwesomeIcon)`
  background: #fff;
  padding: 9px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #aeaeaeaa;
  border: 1px solid #ffffff00;
  transition: border 3s, box-shadow 3s;

  &:hover {
    border: 1px solid #bbb;
    box-shadow: 1px 1px 5px #aeaeae;
  }
`;

interface Props {
  gameDispatch: React.Dispatch<GameAction>,
  toggleFullscreen: () => void;
}

export const Controls: React.FC<Props> = ({ gameDispatch, toggleFullscreen }) => {
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
        icon={faPause}
        title="Pause"
      />
      <ControlsButton
        onClick={() => toggleFullscreen()}
        icon={faExpandAlt}
        title="Fullscreen"
      />

      <ControlsButton
        onClick={() => console.log('leave game')}
        icon={faSignOutAlt}
        title="Leave game"
      />
    </ControlsContainer>
  );
};
