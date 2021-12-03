import React from 'react';
import styled from 'styled-components';
import { faUndo, faRedo, faPause, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameAction } from '../game/reducer';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #bbb;
`;

const ControlsButton = styled(FontAwesomeIcon)`
  margin: auto;
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
      />
      <ControlsButton
        onClick={() => gameDispatch({ 'type': 'redo' })}
        icon={faRedo}
      />
      <ControlsButton
        icon={faPause}
      />
      <ControlsButton
        onClick={() => toggleFullscreen()}
        icon={faExpandAlt}
      />
    </ControlsContainer>
  );
};
