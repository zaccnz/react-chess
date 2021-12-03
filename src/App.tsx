import React from 'react';

import styled from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chess } from './components/Chess';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

function App(): JSX.Element {
  return (
    <Container className='App'>
      <Header />
      <Chess />
      <Footer />
    </Container>
  );
}

export default App;
