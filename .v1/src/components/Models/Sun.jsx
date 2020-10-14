import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Sun() {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 150, 600]}>
      <dodecahedronBufferGeometry attach="geometry" args={[80]} />
      <meshToonMaterial attach="material" color={"yellow"} />
    </mesh>
  );
}
