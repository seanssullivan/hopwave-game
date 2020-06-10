import React, { useState } from "react";
import { Canvas } from "react-three-fiber";

// Import components
import Game from "./Game";
import Ground from "./Ground";
import Grid from "./Grid";
import Hud from "./Hud";
import Background from "./Background";
import { PointContext } from "../context/PointContext";

export default function App() {
  const [gameMode, setGameMode] = useState(true);
  const [points, setPoints] = useState(0);
  const value = { points, setPoints };
  return (
    <>
      <PointContext.Provider value={value}>
        <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
          <Background className={"background"} />
          <ambientLight />
          <pointLight position={[100, 100, 100]} />
          <Grid position={[0, -0.8, 200]} />
          <Ground position={[0, -1, 200]} />
          <Game points={points} setPoints={() => setPoints(points + 1)} />
        </Canvas>
        <Hud points={points} setPoints={() => setPoints(points + 1)} />
      </PointContext.Provider>
    </>
  );
}
