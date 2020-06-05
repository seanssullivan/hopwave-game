import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const CAR_WIDTH = 20;
const CAR_HEIGHT = 5;
const CAR_LENGTH = 20;

export default function Car(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    // mesh.current.position.z;
    // Check where the car is on the road
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry
        attach="geometry"
        args={[CAR_WIDTH, CAR_HEIGHT, CAR_LENGTH]}
      />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  );
}
