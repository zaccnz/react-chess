import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { pieceToString } from '../../game/piece';
import { Color, PieceSymbol } from 'chess.js';
import { useChessContext } from '../../providers/ChessProvider';

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${props => props.theme.menus.players.background};
`;

const PlayerContainer = styled.div`
  display: grid;
  border-bottom: 1px solid ${props => props.theme.colors.grid};
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    "icon name turn"
    "icon details turn"
    "pieces pieces turn";
`;
const PlayerIcon = styled.span`
  font-size: 30px;
  width: 50px;
  text-align: center;
  align-self: center;
  grid-area: icon;
`;

const PlayersName = styled.p`
  padding: 0px;
  margin: 0px;
  grid-area: name;
  align-self: end;
  color: ${props => props.theme.colors.text};
`;

const PlayerStatus = styled.span`
  padding: 0px;
  margin: 0px;
  font-size: 10px;
  vertical-align: super;
  background: #ff0000;
  border-radius: 7px;
  padding: 2px 4px;
  color: ${props => props.theme.colors.text};
`;

const PlayerDetails = styled.p`
  padding: 0px;
  margin: 0px;
  align-self: center;
  grid-area: details;
  color: ${props => props.theme.colors.text};
`;

const PlayerPieces = styled.p`
  grid-area: pieces;
  padding: 0px;
  margin: 0px;
  margin-top: -3px;
  margin-left: 2px;
  color: #000;
`;

const PlayerTurn = styled.p`
  grid-area: turn;
  display: flex;
  align-item: center;
  justify-content: center;
`;

interface PlayerDataUI {
  icon: string;
  name: string;
  status: string;
  details: string;
  turn: boolean;
  lost_pieces: PieceSymbol[];
}

const EmptyPlayerDataUI: PlayerDataUI = {
  icon: '',
  name: 'loading...',
  status: '',
  details: '',
  turn: false,
  lost_pieces: []
};

export const Players: React.FC = () => {
  const { captured, turn, gameOver, names } = useChessContext();

  const [players, setPlayers] = useState<PlayerDataUI[]>([
    { ...EmptyPlayerDataUI, lost_pieces: [...EmptyPlayerDataUI.lost_pieces] },
    { ...EmptyPlayerDataUI, lost_pieces: [...EmptyPlayerDataUI.lost_pieces] },
  ]);

  const fillPlayerData = () => {
    setPlayers(players => {
      players.map((p, i) => {
        const colour: Color = i === 0 ? 'w' : 'b';
        p.icon = pieceToString('k', colour === 'w');

        if (colour === turn && gameOver) {
          if (gameOver.checkmate) {
            p.status = 'CHECKMATE';
          } else if (gameOver.check) {
            p.status = 'CHECK';
          } else if (gameOver.insufficientMaterial) {
            p.status = 'insufficient material';
          } else if (gameOver.threefoldRepitition) {
            p.status = 'threefold repitition';
          }
        }

        if (gameOver && gameOver.draw) {
          p.status = 'draw';
        }
        p.name = names[colour];
        p.turn = turn === colour;
        p.lost_pieces = [...captured[colour]];
      });

      return [...players];
    });
  };

  useEffect(() => {
    fillPlayerData();
  }, [captured, turn, gameOver, names]);

  return (
    <PlayersContainer style={{ gridArea: 'players' }}>
      {
        players.map((v: PlayerDataUI, i) =>
          <PlayerContainer key={i}>
            <PlayerIcon>{v.icon}</PlayerIcon>
            <PlayersName>
              {v.name} {v.status !== '' && <PlayerStatus>{v.status}</PlayerStatus>}
            </PlayersName>
            <PlayerDetails>
              {v.details}
            </PlayerDetails>
            <PlayerPieces>
              {v.lost_pieces.map(p => pieceToString(p, i == 1))}
            </PlayerPieces>
            <PlayerTurn>
              {v.turn && <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faStar} />}
            </PlayerTurn>
          </PlayerContainer>
        )
      }
    </PlayersContainer>
  );
};