import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const HeaderText = styled.h1`
  font-weight: normal;
`;

const HeaderSpacer = styled.div`
  flex-grow: 1;
`;

const HeaderButton = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>♘ react-chess</HeaderText>
      <HeaderSpacer />
      <HeaderButton><FontAwesomeIcon icon={faCog} style={{ margin: 'auto' }} /></HeaderButton>
    </HeaderContainer>
  );
};