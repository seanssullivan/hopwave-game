import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const ROAD_WIDTH = 100;
const ROAD_HEIGHT = 1;
const ROAD_LENGTH = 100;
const ROAD_COLOR = "cyan";

export default function RoadSegment(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.position.z -= props.speed;
    if (mesh.current.position.z <= props.cutoff) {
      mesh.current.position.z = props.spawn;
    }
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry
        attach="geometry"
        args={[ROAD_WIDTH, ROAD_HEIGHT, ROAD_LENGTH]}
      />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  );
}
