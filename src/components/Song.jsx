import React, { useRef, useState } from "react";
import { useMusic } from "../hooks/useMusic";
import { useFrame } from "react-three-fiber";

export default function Song() {
  const { player } = useMusic();
  console.log(player);
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      ref={mesh}
      position={[0, 150, 600]}
      onClick={() => (player ? player.start() : null)}
    >
      <dodecahedronBufferGeometry attach="geometry" args={[80]} />
      <meshToonMaterial attach="material" color={"yellow"} />
    </mesh>
  );
}
