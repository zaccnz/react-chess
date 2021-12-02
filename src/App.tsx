import React from 'react';
import './App.css';
import { Chessboard } from './components/Chessboard';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Chessboard lightColor='#e3c06f' darkColor='#b88a4a'></Chessboard>
    </div>
  );
}

export default App;
