import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { useLoader, useUpdate } from "react-three-fiber";

const Text = forwardRef(
  (
    {
      children,
      vAlign = "center",
      hAlign = "center",
      size = 1,
      color = "#000000",
      ...props
    },
    ref
  ) => {
    const font = useLoader(THREE.FontLoader, "fonts/PressStart.json");
    const config = useMemo(() => ({ font, size: 6, height: 50 }), [font]);
    const mesh = useUpdate(
      (self) => {
        const size = new THREE.Vector3();
        self.geometry.computeBoundingBox();
        self.geometry.boundingBox.getSize(size);
        self.position.x = 29;
        self.position.y = 0;
        self.position.z = 350;
        self.rotation.y = 3.14;
      },
      [children]
    );
    return (
      <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
        <mesh ref={mesh}>
          <textGeometry attach="geometry" args={[children, config]} />
          <meshNormalMaterial attach="material" />
        </mesh>
      </group>
    );
  }
);

export default Text;
