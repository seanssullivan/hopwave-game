import React from "react";
import { Canvas } from "react-three-fiber";

// Import components
import Game from "./Game";
import Ground from "./Ground";
import Grid from "./Grid";

export default function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 25, -100] }}>
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        <Grid position={[0, -0.8, 200]} />
        <Ground position={[0, -1, 200]} />
        <Game />
      </Canvas>
    </>
  );
}
