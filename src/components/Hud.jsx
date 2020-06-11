import React, { useRef, useEffect, useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import * as Tone from "tone";

export default function Hud(props) {
  const { points, gameMode, setGameMode } = props;

  const [player] = useState(() =>
    new Tone.Player({
      url: "Song.mp3",
      autostart: false,
      volume: -15,
    }).toMaster()
  );

  const [music, setMusic] = useState(false);

  useEffect(() => {
    if (music) {
      player.start();
    } else {
      player.stop();
    }
  }, [music, player]);
  const startMusic = function () {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  const seconds = useRef();
  useEffect(() => {
    const t = Date.now();
    const i = setInterval(
      () => (seconds.current.innerText = ((Date.now() - t) / 1000).toFixed(1)),
      100
    );
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <Global />
      <UpperLeft onClick={() => startMusic()}>
        <h4>sound</h4>
        <h4>{music ? "on" : "off"}</h4>
      </UpperLeft>
      <UpperRight>
        <h2>HOPWAVE </h2>
        <br />
        <a href="https://github.com/seanssullivan/hopwave-game">source</a>
        <br />
        <h2 onClick={setGameMode}>{gameMode ? "game On!" : "start"}</h2>
      </UpperRight>
      <LowerLeft>
        <h3 ref={seconds}>0.0</h3>
      </LowerLeft>
      <LowerRight>
        <h2>{points}</h2>
      </LowerRight>
    </>
  );
}

const base = css`
  font-family: "Press Start 2P", sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  color: #ff9f61;
`;

const UpperLeft = styled.div`
  ${base}

  top: 40px;
  left: 50px;
  font-size: 2em;
  transform: skew(5deg, 10deg);
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
    font-family: "Press Start 2P";
  }
`;

const UpperRight = styled.div`
  ${base}
  text-align: right;
  top: 40px;
  right: 50px;
  font-size: 2em;
  transform: skew(-5deg, -10deg);
  pointer-events: all;
  cursor: pointer;
  & > a {
    text-decoration: none;
    font-family: "Press Start 2P", cursive;
  }
  & > h2 {
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`;

const LowerLeft = styled.div`
  ${base}
  bottom: 5px;
  left: 50px;
  transform: skew(-5deg, -10deg);
  width: 200px;
  & > h1 {
    margin: 0;
    font-size: 14em;
    line-height: 1em;
  }
  & > h2 {
    margin: 0;
    font-size: 4em;
    line-height: 1em;
  }
  & > h3 {
    margin: 0;
    font-size: 3em;
    line-height: 1em;
  }
  @media only screen and (max-width: 900px) {
    bottom: 30px;
    & > h1 {
      font-size: 6em !important;
    }
    & > h2 {
      font-size: 3em !important;
    }
  }
`;

const LowerRight = styled.div`
  ${base}
  bottom: 70px;
  right: 50px;
  transform: skew(5deg, 10deg);
  height: 60px;
  width: 200px;

  & > h2 {
    font-size: 3em !important;
    height: 100%;
  }

  & > h3 {
    font-size: 3em !important;
    height: 100%;
  }

  @media only screen and (max-width: 900px) {
    bottom: 50px;
    height: 40px;
    width: 150px;
  }
`;

const Global = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap)
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
    padding: 0px;
  }

  h1 {
    font-family: "Press Start 2P"
    
  }
  h2 {
    font-family: "Press Start 2P"
    
  }
  h4 {
    font-family: "Press Start 2P"
    
  }
  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: "Press Start 2P"
    color: black;
    background: white;
  }
`;
