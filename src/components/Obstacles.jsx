import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import Shape from "./Shape";

export default function Obstacles(props) {
  const [time, setTime] = useState(Date.now());
  const { shapes, addShape, setShapePosition, destroyShape } = props;

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= 2500) {
      addShape();
      setTime(() => now);
    }
  });

  return (
    <>
      {shapes
        ? Object.keys(shapes).map((key) => {
            const shape = shapes[key];
            return (
              <Shape
                key={key}
                shapeId={key}
                shapeName={shape.type}
                position={shape.position}
                destroyShape={destroyShape}
                setPosition={setShapePosition}
              />
            );
          })
        : []}
    </>
  );
}
