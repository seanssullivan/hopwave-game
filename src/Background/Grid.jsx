import React, { useRef } from "react";

const WIDTH = 3200;
const LENGTH = 900;
const COLOR = "darkorchid";

export default function Grid(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} rotation={[2, 0, 30]} scale={[2, 0.4, 1]}>
      <planeBufferGeometry attach="geometry" args={[40, 100, 40, 10]} />
      <meshBasicMaterial
        attach="material"
        color={COLOR}
        wireframe={true}
        wireframeLinewidth={5}
        wireframeLinejoin={"round"}
        wireframeLinecap={"round"}
      />
    </mesh>
  );
}
