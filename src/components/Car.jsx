import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

// Import hooks
import useKeyPress from "../hooks/useKeyPress";
import useMovement from "../hooks/useMovement";

// Import settings
import settings from "../settings";
const { ACCELERATION, TURN_SPEED, ROTATION, BOUNDARY } = settings.CAR;

export default function Car(props) {
  const { avgSpeed, setSpeed, setPosition } = props;
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const move = useMovement(mesh, "x", setPosition);

  const { keyPressed: aKeyPressed } = useKeyPress("a");
  const { keyPressed: dKeyPressed } = useKeyPress("d");
  const { keyPressed: wKeyPressed } = useKeyPress("w");
  const { keyPressed: sKeyPressed } = useKeyPress("s");

  useFrame(() => {
    // Move the car side-to-side using the A and D keys
    if (aKeyPressed && mesh.current.position.x <= BOUNDARY) {
      if (mesh.current.rotation.y < 0.15) {
        // Add a slight rotation when car is moving to the right
        mesh.current.rotation.y += ROTATION;
      }
      move(TURN_SPEED);
    }
    if (dKeyPressed && mesh.current.position.x >= 0 - BOUNDARY) {
      if (mesh.current.rotation.y > -0.15) {
        // Add a slight rotation when car is moving to the left
        mesh.current.rotation.y -= ROTATION;
      }
      move(0 - TURN_SPEED);
    }

    // Straight car when not moving to either side
    if (
      (!aKeyPressed && !dKeyPressed) ||
      mesh.current.position.x >= BOUNDARY ||
      mesh.current.position.x <= 0 - BOUNDARY
    ) {
      if (mesh.current.rotation.y < 0) {
        mesh.current.rotation.y += ROTATION;
      }
      if (mesh.current.rotation.y > 0) {
        mesh.current.rotation.y -= ROTATION;
      }
    }

    // Control speed with W and S keys
    if (wKeyPressed) {
      setSpeed((prev) =>
        prev >= avgSpeed + 2 ? avgSpeed + 2 : (prev += ACCELERATION)
      );
    }
    if (sKeyPressed) {
      setSpeed((prev) =>
        prev <= avgSpeed - 2 ? avgSpeed - 2 : (prev -= ACCELERATION)
      );
    }
    if (!wKeyPressed && !sKeyPressed) {
      setSpeed((prev) => {
        return prev > avgSpeed
          ? (prev -= ACCELERATION)
          : prev < avgSpeed
          ? (prev += ACCELERATION)
          : prev;
      });
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={[12, 4, 20]} />
      <meshStandardMaterial
        attach="material"
        color={"white"}
      />
    </mesh>
  );
}