import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";

// Import components
import Game from "./Game";
import Ground from "./Ground";
import Grid from "./Grid";
import Hud from "./Hud";
import HopwaveLogo from "./Logo/HopwaveLogo";
import Effects from "./Effects";

export default function App() {
  const [gameMode, setGameMode] = useState(false);
  const [points, setPoints] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  return (
    <>
      <Canvas
        id={"canvas"}
        colorManagement
        camera={{ position: [0, 25, -100] }}
      >
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        <Grid position={[0, -0.8, 200]} />
        <Ground position={[0, -1, 200]} />
        {gameMode && (
          <Game
            points={points}
            setPoints={(prev) => setPoints(prev + 1)}
            difficulty={difficulty}
          />
        )}
        {!gameMode && (
          <>
            <Suspense>
              <HopwaveLogo />
            </Suspense>
            <Effects />
          </>
        )}
      </Canvas>
      {gameMode}
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
