import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import "./Game.scss";

// Import components
import Ground from "./Ground";
import Road from "./Road";
import Car from "./Car";

// Optional components
// import OrbitControl from "./OrbitControls";
// import Zuckerberg from "./Zuckerberg";

const SPEED = 5;

export default function Game() {
  const [speed, setSpeed] = useState(SPEED);

  return (
    <Canvas camera={{ position: [0, 25, -100] }} perspective="true">
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Ground position={[0, 0, 175]} />
      <Road speed={speed} />
      <Car
        position={[0, 1, -70]}
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
      />
      {/* <OrbitControl /> */}
      {/* <Suspense fallback={null}>
        <Zuckerberg/>
      </Suspense> */}
    </Canvas>
  );
}
