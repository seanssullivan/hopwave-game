import React, {useState, Suspense} from "react";
import { Canvas } from "react-three-fiber";

import Player from "../components/Player"

import Environment from "../components/Environment";

import settings from "../settings";

const { SPEED } = settings.GAME;

export default function Game(props) {
  const [gameMode, setGameMode] = useState(false);
  const [points, setPoints] = useState(0);
  const [speed, setSpeed] = useState(SPEED);
  const [avgSpeed, setAvgSpeed] = useState(SPEED);
  const [difficulty, setDifficulty] = useState("EASY");

  return (
    <Canvas camera={{ position: [0, 25, -100] }}>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Player
        avgSpeed={avgSpeed}
        setSpeed={setSpeed}
      />
      <Environment speed={speed} />
    </Canvas>
  )
}