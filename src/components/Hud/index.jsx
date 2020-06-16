import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import "./index.scss";

import Difficulty from "./Difficulty";
import MusicPlayer from "../MusicPlayer";

// helpers
// import pointsMessage from "../../helpers/pointsMessage";

export default function Hud(props) {
  const {
    points,
    gameMode,
    speed,
    setSpeed,
    setGameMode,
    setDifficulty,
  } = props;

  const pointsMessage = function () {
    if (points === 5 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">N</span>i<span class="flicker"> c</span>e!
        </div>
      );
    }

    if (points === 10 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">Am</span>a<span class="flicker">zi</span>
          ng!
        </div>
      );
    }

    if (points % 15 === 0 && points !== 0 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">In</span>sa<span class="flicker">n</span>e!
        </div>
      );
    }

    if (points === 20 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">Vi</span>b<span class="flicker">i</span>n!
        </div>
      );
    }

    if (points === 40 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">Mu</span>s<span class="flicker">ky</span>!
        </div>
      );
    }
  };

  return (
    <>
      <Global />
      <UpperLeft>
        <MusicPlayer mode={gameMode} speed={speed} />
      </UpperLeft>
      <UpperRight>
        <div className="rightHud">
          <h4 onClick={setGameMode}>{gameMode ? "game On!" : "start"}</h4>
          {/* <br /> */}
          <a href="https://github.com/seanssullivan/hopwave-game">source</a>
          <br />
        </div>
      </UpperRight>
      <LowerLeft>
        {gameMode && (
          <Difficulty setDifficulty={setDifficulty} setSpeed={setSpeed} />
        )}
      </LowerLeft>
      <LowerRight>{gameMode && <h2>{points}</h2>}</LowerRight>
      <Middle className={"middle"}>{pointsMessage(points, gameMode)}</Middle>
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

const Middle = styled.div`
  ${base}
  left: 50%;
  top: 42%;
  font-size: 0.6em;
  position: absolute;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
    font-family: "Press Start 2P";
  }
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
  top: 53px;
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
