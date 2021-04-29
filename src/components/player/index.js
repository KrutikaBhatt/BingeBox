import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close,EpisodeButton } from './styles/player';
import axios from 'axios';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Inner = function PlayerInner({children,...restProps}){
  return (
    <Inner {...restProps}>{children}</Inner>
  );
};

Player.Overlay = function PlayerOverlay({children,...restProps}){
  return (
    <Overlay {...restProps}>{children}</Overlay>
  );
};


Player.Close = function PlayerClose({...restProps}){
  return (
    <Close {...restProps} />
  );
};


Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button onClick={() => {
      setShowPlayer((showPlayer) => !showPlayer);
    }} {...restProps}>
      Play
    </Button>
  );
};

Player.Episode = function PlayerEpisode({ children,...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <EpisodeButton onClick={() => {
      setShowPlayer((showPlayer) => !showPlayer);
    }} {...restProps}>
      {children}
    </EpisodeButton>
  );
};
