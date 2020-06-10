import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Import hooks
import useKeyPress from "../hooks/useKeyPress";
import useMovement from "../hooks/useMovement";

// Import settings
import settings from "../settings";
const {
  WIDTH,
  HEIGHT,
  LENGTH,
  COLOR,
  ACCELERATION,
  TURN_SPEED,
  ROTATION,
  BOUNDARY,
} = settings.CAR;

export default function Car(props) {
  const { avgSpeed, setPosition, position, setSpeed } = props;
  // This reference will give us direct access to the mesh
  const group = useRef();
  const move = useMovement(group, "x", setPosition);
  const { nodes, materials } = useLoader(GLTFLoader, "/Delorean/scene.gltf");

  const { keyPressed: aKeyPressed } = useKeyPress("a");
  const { keyPressed: dKeyPressed } = useKeyPress("d");
  const { keyPressed: wKeyPressed } = useKeyPress("w");
  const { keyPressed: sKeyPressed } = useKeyPress("s");

  useFrame(() => {
    // Move the car side-to-side using the A and D keys
    if (aKeyPressed && group.current.position.x <= BOUNDARY) {
      if (group.current.rotation.y < 0.1) {
        // Add a slight rotation when car is moving to the right
        group.current.rotation.y += ROTATION;
      }
      move(TURN_SPEED);
    }
    if (dKeyPressed && group.current.position.x >= 0 - BOUNDARY) {
      if (group.current.rotation.y > -0.1) {
        // Add a slight rotation when car is moving to the left
        group.current.rotation.y -= ROTATION;
      }
      move(0 - TURN_SPEED);
    }

    // Straight car when not moving to either side
    if (
      (!aKeyPressed && !dKeyPressed) ||
      group.current.position.x >= BOUNDARY ||
      group.current.position.x <= 0 - BOUNDARY
    ) {
      if (group.current.rotation.y < 0) {
        group.current.rotation.y += ROTATION;
      }
      if (group.current.rotation.y > 0) {
        group.current.rotation.y -= ROTATION;
      }
    }

    // Control speed with W and S keys
    if (wKeyPressed) {
      setSpeed((prev) => (prev >= 7 ? prev : (prev += ACCELERATION)));
    }
    if (sKeyPressed) {
      setSpeed((prev) => (prev <= 3 ? prev : (prev -= ACCELERATION)));
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
    // <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
    // {/* <boxBufferGeometry attach="geometry" args={[WIDTH, HEIGHT, LENGTH]} />
    <group ref={group} {...props} dispose={null} scale={[4, 4, 4]}>
      <group rotation={[-Math.PI / 2, 0, 1.55]}>
        <group position={[0, -12, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.delorean}
              geometry={nodes.mesh_0.geometry}
            />
            <mesh
              material={materials.window}
              geometry={nodes.mesh_1.geometry}
            />
            <mesh
              material={materials.windshield}
              geometry={nodes.mesh_2.geometry}
            />
            <mesh material={materials.sides} geometry={nodes.mesh_3.geometry} />
            <mesh
              material={materials.wheels}
              geometry={nodes.mesh_4.geometry}
            />
            <mesh
              material={materials.wheels_2}
              geometry={nodes.mesh_5.geometry}
            />
            <mesh
              material={materials.cooler}
              geometry={nodes.mesh_6.geometry}
            />
            <mesh
              material={materials.metal_parts}
              geometry={nodes.mesh_7.geometry}
            />
            <mesh
              material={materials.buttons}
              geometry={nodes.mesh_8.geometry}
            />
            <mesh
              material={materials.buttons_2}
              geometry={nodes.mesh_9.geometry}
            />
            <mesh
              material={materials.board}
              geometry={nodes.mesh_10.geometry}
            />
            <mesh
              material={materials.circuits}
              geometry={nodes.mesh_11.geometry}
            />
            <mesh
              material={materials.circuits_2}
              geometry={nodes.mesh_12.geometry}
            />
            <mesh
              material={materials.time_circuits}
              geometry={nodes.mesh_13.geometry}
            />
            <mesh
              material={materials.back_part}
              geometry={nodes.mesh_14.geometry}
            />
            <group position={[1.54, 2.99, -12.24]} scale={[0.82, 0.82, 0.82]}>
              <mesh
                material={materials.mr_fusion}
                geometry={nodes.mesh_15.geometry}
              />
              <mesh
                material={materials.mr_fusion_2}
                geometry={nodes.mesh_16.geometry}
              />
              <mesh
                material={materials.mr_fusion_3}
                geometry={nodes.mesh_17.geometry}
              />
            </group>
            <group
              position={[-5.12, 2.37, -12.23]}
              rotation={[2.67, -0.14, 0.27]}
              scale={[1, 1, 1]}
            >
              <mesh
                material={materials.front_part}
                geometry={nodes.mesh_18.geometry}
              />
              <mesh
                material={materials.front_part_2}
                geometry={nodes.mesh_19.geometry}
              />
            </group>
            <group position={[1.63, 2.91, -11.12]}>
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_20.geometry}
              />
            </group>
            <group
              position={[-2.01, 2.15, -10.44]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[2.17, 2.17, 2.17]}
            >
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_21.geometry}
              />
            </group>
            <group
              position={[1.12, 2.93, -11.95]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_22.geometry}
              />
            </group>
            <group
              position={[-2.01, 2.15, -13.87]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[2.17, 2.17, 2.17]}
            >
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_23.geometry}
              />
            </group>
            <group
              position={[1.13, 2.91, -13.2]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_24.geometry}
              />
            </group>
            <group position={[1.64, 2.91, -13.2]}>
              <mesh
                material={materials.cables}
                geometry={nodes.mesh_25.geometry}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
