import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import useMovement from "../hooks/useMovement";
import useReposition from "../hooks/useReposition";

const ROAD_WIDTH = 100;
const ROAD_HEIGHT = 1;
const ROAD_LENGTH = 100;
const ROAD_COLOR = "cyan";

export default function RoadSegment(props) {
  const { speed, cutoff, spawn, color } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const move = useMovement(mesh, "z");
  const reposition = useReposition(mesh);

  useFrame(() => {
    move(0 - speed);

    if (mesh.current.position.z <= cutoff) {
      const z = spawn - Math.abs(cutoff - mesh.current.position.z);
      reposition({ z });
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry
        attach="geometry"
        args={[ROAD_WIDTH, ROAD_HEIGHT, ROAD_LENGTH]}
      />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
