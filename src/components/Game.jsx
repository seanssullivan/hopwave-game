import * as THREE from "three";
import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import "./Game.scss";

// Import components
import Road from "./Road";
import Car from "./Car";
import Obstacles from "./Obstacles";
// import Sun from "./Sun";

import PalmTrees from "./PalmTrees";

// Import hooks
import useMusic from "../hooks/useMusic";
import useSoundEffects from "../hooks/useSoundEffects";
import usePlayerPosition from "../hooks/usePlayerPosition";

// Optional components
//import OrbitControl from "./OrbitControls";
// import Zuckerberg from "./Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED, START_POSITION } = settings.GAME;

export default function Game() {
  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);
  const [speed, setSpeed] = useState(SPEED);
  const [musicPlayer] = useMusic(speed);
  const [playSound] = useSoundEffects();

  return (
    <>
      <Road speed={speed} />

      <Obstacles soundEffect={playSound} playerPosition={playerPosition} />
      {/* <Sun /> */}
      <Car
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
        position={playerPosition}
        setPosition={setPlayerPosition}
      />

      {/* <OrbitControl /> */}
      <Suspense fallback={null}>
        <PalmTrees />
        {/* <Zuckerberg/> */}
      </Suspense>
    </>
  );
}
