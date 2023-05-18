import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
`;

const HomeHeader = styled.h1`
  text-align: center;
`;

const HomeParagraph = styled.p`
  text-align: center;
`;

const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
`;

const HomeButton = styled(Link)`
  background: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  font-size: 2em;
  margin: 0.5em;
  text-align: center;
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeHeader>create a game</HomeHeader>
      <HomeButtonContainer>
        <HomeButton to="/game">local</HomeButton>
        <HomeButton to="/game/bot">bot</HomeButton>
        <HomeButton to="/lobby">online</HomeButton>
      </HomeButtonContainer>
      <HomeParagraph>
        play chess against a local player, a bot, or an online player.
      </HomeParagraph>
    </HomeContainer >
  );
};
