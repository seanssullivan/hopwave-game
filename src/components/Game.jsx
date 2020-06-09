import * as THREE from "three";
import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import "./Game.scss";

// Import components
import Ground from "./Ground";
import Road from "./Road";
import Car from "./Car";
import Obstacles from "./Obstacles";
import Sun from "./Sun";
import Hud from "./Hud";

// Import hooks
import usePlayerPosition from "../hooks/usePlayerPosition";

// Optional components
// import OrbitControl from "./OrbitControls";
// import Zuckerberg from "./Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED, START_POSITION } = settings.GAME;

export default function Game() {
  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);
  const [objects, setObjects] = useState([]);
  const [speed, setSpeed] = useState(SPEED);

  return (
    <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Ground position={[0, 0, 175]} />
      <Road speed={speed} />

      <Obstacles objects={objects} setObjects={setObjects} />

      <Car
        position={playerPosition}
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
        setPosition={setPlayerPosition}
      />
      {/* <OrbitControl /> */}
      {/* <Suspense fallback={null}>
        <Zuckerberg/>
      </Suspense> */}
    </Canvas>
  );
}
