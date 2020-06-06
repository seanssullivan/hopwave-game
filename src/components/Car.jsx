import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Import hooks
import useKeyPress from "../hooks/useKeyPress";
import useSoundEffect from "../hooks/useSoundEffect";

// Import settings
import settings from "../settings";
const { WIDTH, HEIGHT, LENGTH, COLOR, ACCELERATION } = settings.CAR;

export default function Car(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const playSound = useSoundEffect(); // Temp

  const { keyPressed: aKeyPressed } = useKeyPress("a");
  const { keyPressed: dKeyPressed } = useKeyPress("d");
  const { keyPressed: wKeyPressed } = useKeyPress("w");
  const { keyPressed: sKeyPressed } = useKeyPress("s");

  const { keyPressed: fKeyPressed } = useKeyPress("f"); // Temp

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
      <boxBufferGeometry attach="geometry" args={[WIDTH, HEIGHT, LENGTH]} />
      <meshStandardMaterial attach="material" color={COLOR} />
    </mesh>
  );
}
