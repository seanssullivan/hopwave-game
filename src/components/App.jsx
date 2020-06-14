import React, { useState } from "react";
import { Canvas } from "react-three-fiber";

// Import components
import Game from "./Game";
import Hud from "./Hud";
import MainMenu from "./MainMenu/index";

// import OrbitControl from "./OrbitControls";

// Import hooks
// import useMusic from "../hooks/useMusic";

// Import settings
import settings from "../settings";
const { SPEED } = settings.GAME;

export default function App() {
  const [gameMode, setGameMode] = useState(false);
  const [points, setPoints] = useState(0);
  const [speed, setSpeed] = useState(SPEED);
  const [difficulty, setDifficulty] = useState("easy");
  // const [musicPlayer] = useMusic(speed);

  return (
    <>
      <Canvas
        id={"canvas"}
        colorManagement
        camera={{ position: [0, 25, -100] }}
      >
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        {/* <OrbitControl /> */}
        {gameMode && (
          <Game
            points={points}
            speed={speed}
            setSpeed={setSpeed}
            setPoints={(prev) => setPoints(prev + 1)}
            difficulty={difficulty}
          />
        )}
        {!gameMode && <MainMenu />}
      </Canvas>
      <Hud
        points={points}
        gameMode={gameMode}
        setGameMode={() => setGameMode(!gameMode)}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </>
  );
}
