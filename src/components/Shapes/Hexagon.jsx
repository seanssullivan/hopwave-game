import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

// Import settings
import settings from "../../settings";

const { SPEED } = settings.GAME;
const { RADIUS, RESIZE } = settings.SHAPE;

export default function Hexagon(props) {
  const { difficulty, destroyShape, setPosition } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();

  useFrame(() => {
    const position = mesh.current.position;
    position.z = position.z - SPEED;
    setPosition(props.shapeId, position);

    if (mesh.current.position.z <= -200) {
      destroyShape(props.shapeId);
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <torusBufferGeometry
        attach="geometry"
        args={[RADIUS - RESIZE[difficulty], 1, 6, 6]}
      />
      <meshToonMaterial attach="material" color={"blue"} />
    </mesh>
  );
}
