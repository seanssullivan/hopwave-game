import React from "react";
import { Canvas } from "react-three-fiber";
import "./Game.scss";

import Road from "./Road";
import Car from "./Car";

export default function Game() {
  return (
    <Canvas camera={{ position: [0, 25, -100] }} perspective="true">
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Road />
      <Car position={[0, 1, -70]} color={"white"} />
    </Canvas>
  );
}
