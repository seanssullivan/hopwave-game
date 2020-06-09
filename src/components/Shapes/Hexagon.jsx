import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

// Import hooks
import useMovement from "../../hooks/useMovement";

// Import helpers
import detectCollision from "../../helpers/detectCollision";

// Import settings
import settings from "../../settings";

const { SPEED } = settings.GAME;
const { RADIUS } = settings.SHAPE;

export default function Hexagon(props) {
  const { destroyShape, soundEffect, playerPosition } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const move = useMovement(mesh, "z");

  useFrame(() => {
    move(0 - SPEED);

    detectCollision(mesh.current.position, playerPosition, () => soundEffect());

    if (mesh.current.position.z <= -200) {
      destroyShape(props.shapeId);
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <torusBufferGeometry attach="geometry" args={[RADIUS, 1, 6, 6]} />
      <meshToonMaterial attach="material" color={"blue"} />
    </mesh>
  );
}
