import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import { useKeyPress } from "../hooks/useKeyPress";

const CAR_WIDTH = 20;
const CAR_HEIGHT = 5;
const CAR_LENGTH = 20;
const CAR_COLOR = "white";

export default function Car(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const { keyPressed: aKeyPressed } = useKeyPress("a");
  const { keyPressed: dKeyPressed } = useKeyPress("d");

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (aKeyPressed && mesh.current.position.x <= 50) {
      mesh.current.position.x += 0.5;
    }
    if (dKeyPressed && mesh.current.position.x >= -50) {
      mesh.current.position.x -= 0.5;
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry
        attach="geometry"
        args={[CAR_WIDTH, CAR_HEIGHT, CAR_LENGTH]}
      />
      <meshStandardMaterial attach="material" color={CAR_COLOR} />
    </mesh>
  );
}
