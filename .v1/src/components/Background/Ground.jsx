import React, { useRef } from "react";

const WIDTH = 3200;
const LENGTH = 900;
const COLOR = "black";

export default function Ground(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1, 1, 1]}
    >
      <planeGeometry attach="geometry" args={[WIDTH, LENGTH, 100, 30]} />
      <meshBasicMaterial attach="material" color={COLOR} />
    </mesh>
  );
}
