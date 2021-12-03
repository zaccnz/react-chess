import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FooterText = styled.p`
  font-weight: normal;
  justify-self: center;
  text-align: left;
`;

const FooterSpacer = styled.div`
flex-grow: 1;
overflow: hidden;
`;

const FooterLink = styled.a`
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        created with React + Typescript
      </FooterText>
      <FooterSpacer />
      <FooterText>
        <FooterLink href='https://github.com/zaccnz/react-chess/'>source code</FooterLink> - <FooterLink href='https://github.com/zaccnz/'>zac</FooterLink> (2021)
      </FooterText>
    </FooterContainer>
  );
};