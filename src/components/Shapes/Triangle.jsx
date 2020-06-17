import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Square(props) {
  const { radius, speed, destroyShape, setPosition } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();

  useFrame(() => {
    const position = mesh.current.position;
    position.z = position.z - speed;
    setPosition(props.shapeId, position);

    if (mesh.current.position.z <= -200) {
      destroyShape(props.shapeId);
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      rotation={[0, 0, -Math.PI / 6]}
    >
      <torusBufferGeometry attach="geometry" args={[radius, 1, 3, 3]} />
      <meshToonMaterial attach="material" color={"green"} />
    </mesh>
  );
}
