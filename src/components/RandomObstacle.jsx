import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import useMovement from "../hooks/useMovement";
import useReposition from "../hooks/useReposition";


export default function RoadSegment(props) {
  const { speed, cutoff, spawn} = props;

  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const move = useMovement(mesh, "z");
  const reposition = useReposition(mesh);
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  useFrame(() => {
    move(speed);

    if (mesh.current.position.z <= cutoff) {
      const z = 100 * (7 - 1) - Math.abs(cutoff - mesh.current.position.z);
      reposition({ z });
    }
  });

  return (
    <mesh
    {...props}
    ref={mesh}
    scale={[1.5, 1.5, 1.5]}
    >
    <boxBufferGeometry attach="geometry" args={[100, 100, 100]} />
    <meshStandardMaterial attach="material" color={  'black' } />
  </mesh>
  );
}