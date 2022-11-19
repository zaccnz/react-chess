import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chess } from './components/Chess';
import { Settings } from './components/Settings';
import { Home } from './components/Home';
import { Lobby } from './components/Lobby';
import { SettingsProvider } from './providers/SettingsProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { GlobalStyles } from './theme/global';
import { ChessProvider } from './providers/ChessProvider';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background: ${props => props.theme.colors.background};
`;

function App(): JSX.Element {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const onClickSettings = () => setSettingsOpen(v => !v);

  return (
    <SettingsProvider>
      <ChessProvider>
        <ThemeProvider>
          <HashRouter>
            <GlobalStyles />

            <Container className='App'>
              <Header onClickSettings={onClickSettings} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<Chess />} />
                <Route path="/game" element={<Chess />} />
                <Route path="/lobby" element={<Lobby />} />
              </Routes>
              <Footer />
              {
                settingsOpen && <Settings onClickSettings={onClickSettings} />
              }
            </Container>
          </HashRouter>
        </ThemeProvider>
      </ChessProvider>
    </SettingsProvider>
  );
}

export default App;