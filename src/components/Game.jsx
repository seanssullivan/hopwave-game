import React, { Suspense } from "react";

// Import components
import Car from "./Car";
import Obstacles from "./Obstacles";
import Background from "./Background/index";
import Environment from "./Environment/index";

// Import hooks
import usePlayerPosition from "../hooks/usePlayerPosition";

// Optional components
// import Zuckerberg from "./3d_Models/Zuckerberg";

// Import settings
import settings from "../settings";
const { START_POSITION } = settings.GAME;

export default function Game(props) {
  const { points, speed, setSpeed, setPoints, difficulty } = props;
  const [playerPosition, setPlayerPosition] = usePlayerPosition(START_POSITION);

  return (
    <>
      <Background />
      <Environment speed={speed} />
      <Obstacles
        playerPosition={playerPosition}
        difficulty={difficulty}
        points={points}
        setPoints={setPoints}
      />
      <Suspense fallback={null}>
        <Car
          avgSpeed={speed}
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
