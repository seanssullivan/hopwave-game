import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Obstacles from "./Obstacles";
import "./Game.scss";

// Import components
import Ground from "./Ground";
import Road from "./Road";
import Car from "./Car";

// Import hooks
import usePlayerPosition from "../hooks/usePlayerPosition";
import useCollisionDetection from "../hooks/useCollisionDetection";
import useSoundEffect from "../hooks/useSoundEffect";

// Optional components
// import OrbitControl from "./OrbitControls";
// import Zuckerberg from "./Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED, START_POSITION } = settings.GAME;

export default function Game() {
  const [speed, setSpeed] = useState(SPEED);
  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);
  const [objectPositions, setObjectPositions] = useState({});
  const detectCollision = useCollisionDetection(
    playerPosition,
    objectPositions
  );
  const playSound = useSoundEffect();

  useEffect(() => {
    if (detectCollision(playerPosition)) {
      playSound();
    }
  }, [playerPosition, detectCollision, playSound]);

  return (
    <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Ground position={[0, 0, 175]} />
      <Road speed={speed} />

      <Obstacles setObjectPositions={setObjectPositions} />

      <Car
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
        position={playerPosition}
        setPosition={setPlayerPosition}
      />
      {/* <OrbitControl /> */}
      {/* <Suspense fallback={null}>
        <Zuckerberg/>
      </Suspense> */}
    </Canvas>
  );
}
