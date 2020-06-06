import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const ROAD_WIDTH = 100;
const ROAD_HEIGHT = 1;
const ROAD_LENGTH = 100;
const ROAD_COLOR = "cyan";

export default function RoadSegment(props) {
  const { speed, cutoff, spawn, color } = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef();

  useFrame(() => {
    mesh.current.position.z -= speed;
    if (mesh.current.position.z <= cutoff) {
      //? do we need to dispose of these meshes?
      // mesh.current.geometry.dispose()
      // mesh.current.material.dispose()

      mesh.current.position.z =
        spawn - Math.abs(cutoff - mesh.current.position.z);
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
