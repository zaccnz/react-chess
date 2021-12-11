import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
  colors: {
    text: '#000',
    background: '#fff',
    grid: '#eee',
    primary: '#fee'
  },
  menus: {
    controls: {
      background: '#bbb'
    },
    players: {
      background: '#ddd'
    },
    moves: {
      white: '',
      black: '',
      hover: ''
    }
  },
  chess: {
    board_light: '#e3c06f',
    board_dark: '#b88a4a',
    board_text: '#fff',
    move: '',
    move_castle: '',
    move_takes: ''
  }
};

export const DarkTheme: DefaultTheme = {
  colors: {
    text: '#fff',
    background: '#000',
    grid: '#eee',
    primary: '#fee'
  },
  menus: {
    controls: {
      background: '#bbb'
    },
    players: {
      background: '#ddd'
    },
    moves: {
      white: '',
      black: '',
      hover: ''
    }
  },
  chess: {
    board_light: '#e3c06f',
    board_dark: '#b88a4a',
    board_text: '#fff',
    move: '',
    move_castle: '',
    move_takes: ''
  }
};