import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";

// Import hooks
import useMovement from "../../hooks/useMovement";

import settings from "../../settings";
const { CUTOFF } = settings.PALM;

export default function PalmTree(props) {
  const { speed, destroyObstacle } = props;

  const mesh = useRef();
  const move = useMovement(mesh, "z");

  useFrame(() => {
    move(0 - speed);

    if (mesh.current.position.z <= CUTOFF) {
      destroyObstacle();
    }
  });

  return (
    <mesh ref={mesh} {...props} dispose={null}>
      <boxBufferGeometry attach="geometry" args={[5, 60, 5]} />
      <meshStandardMaterial
        attach="material"
        color={"green"}
        />
    </mesh>
  );
}
