import React, { useState, useRef, Suspense } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import "./Game.scss";
import Ground from "./Ground";
import Road from "./Road";
import Car from "./Car";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Zuckerberg from "./Zuckerberg";

// extend({ OrbitControls });

// const OrbitControl = () => {
//   const orbitRef = useRef();
//   const { camera, gl } = useThree();

//   useFrame(() => {
//     orbitRef.current.update();
//   });

//   return (
//     <orbitControls
//       args={[camera, gl.domElement]}
//       ref={orbitRef}
//       autoRotate
//       maxPolarAngle={Math.PI / 3}
//       minPolarAngle={Math.PI / 3}
//     />
//   );
// };

const SPEED = 5;

export default function Game() {
  const [speed, setSpeed] = useState(SPEED);

  return (
    <Canvas camera={{ position: [0, 25, -100] }} perspective="true">
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Ground position={[0, 0, 175]} />
      <Road speed={speed} />
      <Car
        position={[0, 1, -70]}
        color={"white"}
        avgSpeed={SPEED}
        setSpeed={setSpeed}
      />
      {/* <OrbitControl /> */}
      {/* <Suspense fallback={null}>
        <Zuckerberg/>
      </Suspense> */}
    </Canvas>
  );
}
