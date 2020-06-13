import React, { useState, Suspense } from "react";

// Import components
import Road from "./Road";
import Car from "./Car";
import Obstacles from "./Obstacles";
//import Sun from "./Sun";
import PalmTrees from "./PalmTrees";

// Import hooks

// import useMusic from "../hooks/useMusic";
import useSoundEffects from "../hooks/useSoundEffects";
import usePlayerPosition from "../hooks/usePlayerPosition";
import useShapePositions from "../hooks/useShapePositions";

// Import helpers
import detectCollision from "../helpers/detectCollision";

// Optional components
// import OrbitControl from "./Controls/OrbitControls";
// import Zuckerberg from "./3d_Models/Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED, START_POSITION } = settings.GAME;

export default function Game(props) {
  const { points, setPoints, difficulty } = props;

  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);
  const [
    shapes,
    addShape,
    setShapePosition,
    setTriggered,
    destroyShape,
  ] = useShapePositions();
  const [speed, setSpeed] = useState(SPEED);
  // const [musicPlayer] = useMusic(speed);
  const [playSound] = useSoundEffects();

  detectCollision(playerPosition, shapes, (key) => {
    setTriggered(key);
    playSound();
    setPoints(points);
  });

  return (
    <>
      <Road speed={speed} />
      <Obstacles
        shapes={shapes}
        addShape={addShape}
        destroyShape={destroyShape}
        setShapePosition={setShapePosition}
        difficulty={difficulty}
      />

      {/* <OrbitControl /> */}

      <Suspense fallback={null}>
        <PalmTrees />

        <Car
          color={"white"}
          avgSpeed={SPEED}
          setSpeed={setSpeed}
          position={playerPosition}
          setPosition={setPlayerPosition}
        />

        {/* <Zuckerberg
          color={"white"}
          avgSpeed={SPEED}
          setSpeed={setSpeed}
          position={playerPosition}
          setPosition={setPlayerPosition}
        /> */}
      </Suspense>
    </>
  );
}
