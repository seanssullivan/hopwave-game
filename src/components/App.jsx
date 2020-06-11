import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";

// Import components
import Game from "./Game";
import Ground from "./Ground";
import Grid from "./Grid";
import Hud from "./Hud";
import Background from "./Background";
import Number from "./Logo/Number";

export default function App() {

  const [gameMode, setGameMode] = useState(false);
  const [points, setPoints] = useState(0);
  if (!gameMode) {
    return (
      <>
        <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
          <Background className={"background"} />
          <ambientLight />
          <pointLight position={[100, 100, 100]} />
          <Grid position={[0, -0.8, 200]} />
          <Ground position={[0, -1, 200]} />
          <Suspense>
            <Number />
          </Suspense>
        </Canvas>
        <Hud
          points={points}
          gameMode={gameMode}
          setGameMode={() => setGameMode(!gameMode)}
        />
      </>
    );
  }

  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
        <Background className={"background"} />
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        <Grid position={[0, -0.8, 200]} />
        <Ground position={[0, -1, 200]} />
        <Game points={points} setPoints={(prev) => setPoints(prev + 1)} />
      </Canvas>

      <Hud
        points={points}
        gameMode={gameMode}
        setGameMode={() => setGameMode(!gameMode)}
      />

    </>
  );
}
