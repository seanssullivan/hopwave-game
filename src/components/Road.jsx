import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const SPEED = 1;

export default function Road(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.position.x += SPEED;
    if (mesh.current.position.x >= 200) {
      mesh.current.position.x = -500;
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry attach="geometry" args={[100, 1, 100]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  );
}
