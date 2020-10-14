import React, { useRef } from "react";

const WIDTH = 3200;
const LENGTH = 900;
const COLOR = "black";

export default function Ground(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} rotation={[1, 1, 1]} scale={[2, 0.4, 1]}>
      <planeGeometry attach="geometry" args={[40, 100, 40, 10]} />
      <meshBasicMaterial attach="material" color={COLOR} />
    </mesh>
  );
}
