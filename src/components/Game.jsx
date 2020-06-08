import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import Obstacles from "./Obstacles";
import "./Game.scss";

// Import components
import Ground from "./Ground";
import Road from "./Road";
import Car from "./Car";
import PalmTrees from "./PalmTrees";

// Optional components
import OrbitControl from "./OrbitControls";
import Zuckerberg from "./Zuckerberg";

// Import settings
import settings from "../settings";
const { SPEED } = settings.GAME;

export default function Game() {
  const [speed, setSpeed] = useState(SPEED);

  // const [showObstacle, setShowObstacle] = useState(true)
  // const destroyObstacle = useCallback(() => {

  //   setShowObstacle(showObstacle => !showObstacle)
  //   return () => AbortController.abort()

  // }, [setShowObstacle])

  return (
    <Canvas camera={{ position: [0, 25, -100] }} perspective="true">
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Ground position={[0, 0, 175]} />

      <Road speed={speed} />

      {/* {showObstacle && <Obstacle destroyObstacle={destroyObstacle}/>}
       */}
      <Obstacles />

      <Car
        position={[0, 1, -70]}
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
      />
      <OrbitControl />
      <Suspense fallback={null}>
        <Zuckerberg />
        <PalmTrees />
      </Suspense>
    </Canvas>
  );
}
