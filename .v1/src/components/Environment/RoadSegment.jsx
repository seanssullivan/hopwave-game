import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
// import RoadEffects from "./RoadEffects";

// Import hooks
import useMovement from "../../hooks/useMovement";
import useReposition from "../../hooks/useReposition";

// Import settings
import settings from "../../settings";
const { WIDTH, HEIGHT, LENGTH } = settings.ROAD_SEGMENT;

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
      {/* <RoadEffects /> */}
      <boxBufferGeometry attach="geometry" args={[WIDTH, HEIGHT, LENGTH]} />
      <pointsMaterial
        transparent={true}
        opacity={0.95}
        roughness={1}
        attach="material"
        // wireframe={true}
        color={color}
      />
    </mesh>
  );
}
