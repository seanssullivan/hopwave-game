import React, { useEffect, useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import * as Tone from "tone";
import Iframe from "./Iframe";

export default function Hud(props) {
  const { points, gameMode, setGameMode, setDifficulty } = props;

  let [active, setActive] = useState("easy");

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

  return (
    <>
      <Global />
      <UpperLeft>
        <h4>{music || !gameMode ? "Spotify" : <Iframe />}</h4>
        <h4 onClick={() => startMusic()}>sound</h4>
        <h4>{music ? "on" : "off"}</h4>
      </UpperLeft>
      <UpperRight>
        <div className="rightHud">
          <h4>HOPWAVE </h4>
          {/* <br /> */}
          <h4 onClick={setGameMode}>{gameMode ? "game On!" : "start"}</h4>
          {/* <br /> */}
          <a href="https://github.com/seanssullivan/hopwave-game">source</a>
        </div>
      </UpperRight>
      <LowerLeft>
        {gameMode && (
          <ul>
            <li
              className={`easy ${"easy" === active ? "bigText" : ""}`}
              onClick={() => {
                setDifficulty("easy");
                setActive("easy");
              }}
            >
              easy
            </li>
            <li
              id={"medium"}
              className={`"medium" ${"medium" === active ? "bigText" : ""}`}
              onClick={() => {
                setDifficulty("medium");
                setActive("medium");
              }}
            >
              medium
            </li>
            <li
              className={`"hard" ${"hard" === active ? "bigText" : ""}`}
              onClick={() => {
                setDifficulty("hard");
                setActive("hard");
              }}
            >
              hard
            </li>
          </ul>
        )}
      </LowerLeft>
      <LowerRight>{gameMode && <h2>{points}</h2>}</LowerRight>
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
    color: #ff9f61;
  }
  & > h2 {
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`;

const LowerLeft = styled.li`
  ${base}
  bottom: 50px;
  left: 50px;
  cursor: pointer;
  pointer-events: all;
  transform: skew(-5deg, -10deg);
  width: 200px;

  #medium {
    margin-left: 10px;
    margin-right: 10px;
  }

  .bigText {
    font-size: 2em;
  }

  & > ul {
    margin: 0;
    line-height: 1em;
    display: inline;
    // font-size: 1.4em;
    font-size: ${(props) => {
      const test = props;

      if (test === "easy") {
        return "2.0";
      } else if (test === "medium") {
        return "2.0";
      } else if (test === "hard") {
        return "2.0";
      } else {
        return "1.4";
      }
    }};
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

  li {
    display: inline
  }

  a {color: #ff9f61;}         /* Unvisited link  */
  a:visited {color: #ff9f61;} /* Visited link    */
  a:hover {color: #ff9f61;}   /* Mouse over link */
  a:active {color: #ff9f61;}  /* Selected link   */
 

  .medium {
    margin-left: 10px;
    margin-right: 10px;
}
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

//test
