import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

// Import hooks
import useMovement from "../../hooks/useMovement";

// Import settings
import settings from "../../settings";
const { SPEED } = settings.GAME;
const { RADIUS } = settings.SHAPE;

export default function Square(props) {
  const { destroyObstacle } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const move = useMovement(mesh, "z");

  useFrame(() => {
    move(0 - SPEED);
    if (mesh.current.position.z <= -200) {
      destroyObstacle();
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      rotation={[0, 0, -Math.PI / 4]}
    >
      <torusBufferGeometry attach="geometry" args={[RADIUS, 1, 4, 4]} />
      <meshStandardMaterial attach="material" color={"purple"} />
    </mesh>
  );
}
