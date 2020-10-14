import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";

// Import components
import Difficulty from "./Difficulty";
import MusicPlayer from "../MusicPlayer";

// helpers
// import pointsMessage from "../../helpers/pointsMessage";

// Import styles
import "./index.scss";

export default function Hud(props) {
  const {
    points,
    gameMode,
    speed,
    setAvgSpeed,
    setGameMode,
    setDifficulty,
  } = props;

  const pointsMessage = function () {
    if (points === 5 && gameMode) {
      return (
        <div className="sign">
          <span className="fast-flicker">N</span>i
          <span className="flicker"> c</span>e!
        </div>
      );
    }

    if (points === 10 && gameMode) {
      return (
        <div className="sign">
          <span className="fast-flicker">Am</span>a
          <span className="flicker">zi</span>
          ng!
        </div>
      );
    }

    if (points % 15 === 0 && points !== 0 && gameMode) {
      return (
        <div className="sign">
          <span className="fast-flicker">In</span>sa
          <span className="flicker">n</span>e!
        </div>
      );
    }

    if (points === 20 && gameMode) {
      return (
        <div className="sign">
          <span className="fast-flicker">Vi</span>b
          <span className="flicker">i</span>n!
        </div>
      );
    }

    if (points === 100 && gameMode) {
      return (
        <div className="sign">
          <span className="fast-flicker">Mu</span>s
          <span className="flicker">ky</span>!
        </div>
      );
    }
  };

  return (
    <>
      <Global />
      <UpperLeft>
        <MusicPlayer speed={speed} />
      </UpperLeft>
      <UpperRight>
        <div className="rightHud">
          <h4 className={"transparent"} onClick={setGameMode}>
            {gameMode ? "Game On!" : "start"}
          </h4>
          <a
            className={"transparent"}
            href="https://github.com/seanssullivan/hopwave-game"
          >
            source
          </a>
          <br />
        </div>
      </UpperRight>
      <LowerLeft>
        {gameMode && (
          <Difficulty setDifficulty={setDifficulty} setAvgSpeed={setAvgSpeed} />
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
