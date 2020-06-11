import React, { Suspense, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import lerp from "lerp";
import Text from "./HopwaveLogo";

export default function Number({ mouse, hover }) {
  const ref = useRef();

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useFrame(() => {
    if (ref.current === true) {
      ref.current.position.x = lerp(
        ref.current.position.x,
        mouse.current[0] / aspect / 10,
        0.1
      );
      ref.current.rotation.x = lerp(
        ref.current.rotation.x,
        0 + mouse.current[1] / aspect / 50,
        0.1
      );
      ref.current.rotation.y = 0.8;
    }
  });
  // useFrame((state) => {
  //   if (ref.current) {
  //     ref.current.position.x = lerp(
  //       ref.current.position.x,
  //       mouse.current[0] / aspect / 10,
  //       0.1
  //     );
  //     ref.current.rotation.x = lerp(
  //       ref.current.rotation.x,
  //       0 + mouse.current[1] / aspect / 50,
  //       0.1
  //     );
  //     ref.current.rotation.y = 0.8;
  //   }
  // });
  return (
    <Suspense fallback={null}>
      <mesh ref={ref}>
        <Text
          size={40}

          // onPointerOver={() => hover(true)}
          // onPointerOut={() => hover(false)}
        >
          hopwave
        </Text>
      </mesh>
    </Suspense>
  );
}
