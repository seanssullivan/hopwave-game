import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import useKeyPress from "../hooks/useKeyPress";
import useSoundEffect from "../hooks/useSoundEffect";

const CAR_WIDTH = 20;
const CAR_HEIGHT = 5;
const CAR_LENGTH = 20;
const CAR_COLOR = "white";
const ACCELERATION = 0.25;

export default function Car(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const playSound = useSoundEffect(); // Temp

  const { keyPressed: aKeyPressed } = useKeyPress("a");
  const { keyPressed: dKeyPressed } = useKeyPress("d");
  const { keyPressed: wKeyPressed } = useKeyPress("w");
  const { keyPressed: sKeyPressed } = useKeyPress("s");

  const { keyPressed: fKeyPressed } = useKeyPress("f"); // Temp

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (aKeyPressed && mesh.current.position.x <= 50) {
      mesh.current.position.x += 0.5;
    }
    if (dKeyPressed && mesh.current.position.x >= -50) {
      mesh.current.position.x -= 0.5;
    }
    if (wKeyPressed) {
      props.setSpeed((prev) => (prev >= 7 ? prev : (prev += ACCELERATION)));
    }
    if (sKeyPressed) {
      props.setSpeed((prev) => (prev <= 3 ? prev : (prev -= ACCELERATION)));
    }
    if (!wKeyPressed && !sKeyPressed) {
      props.setSpeed((prev) => {
        return prev > props.avgSpeed
          ? (prev -= ACCELERATION)
          : prev < props.avgSpeed
          ? (prev += ACCELERATION)
          : prev;
      });
    }
    // Temp
    if (fKeyPressed) {
      playSound();
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
