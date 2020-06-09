import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

// Import hooks
import useMovement from "../../hooks/useMovement";
import useSoundEffect from "../../hooks/useSoundEffect";

// Import helpers
import detectCollision from "../../helpers/detectCollision";

// Import settings
import settings from "../../settings";

const { SPEED } = settings.GAME;
const { RADIUS } = settings.SHAPE;

export default function Circle(props) {
  const playSound = useSoundEffect();
  const { destroyShape, setPositions, playerPosition } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const move = useMovement(mesh, "z");

  useFrame(() => {
    detectCollision(mesh.current.position, playerPosition, () => playSound());

    move(0 - SPEED);

    setPositions((positions) => {
      positions[props.shapeId] = mesh.current.position;
      return positions;
    });

    if (mesh.current.position.z <= -200) {
      destroyShape(props.shapeId);
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <torusBufferGeometry attach="geometry" args={[RADIUS, 1, 30, 30]} />
      <meshToonMaterial attach="material" color={"red"} />
    </mesh>
  );
}
