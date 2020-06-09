import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import "./Game.scss";

// Import components
import Ground from "./Ground";
import Grid from "./Grid";
import Road from "./Road";
import Car from "./Car";
import Obstacles from "./Obstacles";
import Sun from "./Sun";
import Hud from "./Hud";
import PalmTrees from "./PalmTrees";

// Import hooks
import usePlayerPosition from "../hooks/usePlayerPosition";

// Optional components
import OrbitControl from "./OrbitControls";
import Zuckerberg from "./Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED, START_POSITION } = settings.GAME;

export default function Game() {
  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);
  const [speed, setSpeed] = useState(SPEED);
  const [objectPositions, setObjectPositions] = useState({});

  useEffect(() => {});

  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        <Grid position={[0, -0.8, 200]} />
        <Ground position={[0, -1, 200]} />
        <Road speed={speed} />

        <Obstacles
          playerPosition={playerPosition}
          shapePositions={objectPositions}
          setShapePositions={setObjectPositions}
        />
        <Sun />
        <Car
          color={"white"}
          avgSpeed={SPEED}
          setSpeed={setSpeed}
          position={playerPosition}
          setPosition={setPlayerPosition}
        />

        <OrbitControl />
        <Suspense fallback={null}>
          <PalmTrees />
          {/* <Zuckerberg/> */}
        </Suspense>
      </Canvas>
      <Hud />
    </>
  );
}
