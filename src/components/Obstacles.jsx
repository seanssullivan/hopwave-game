import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import Shape from "./Shape";

// Import settings
import settings from "../settings";
let { DIFFICULTY_SPEED } = settings.GAME;

export default function Obstacles(props) {
  const [time, setTime] = useState(Date.now());
  const {
    shapes,
    addShape,
    setShapePosition,
    destroyShape,
    difficulty,
  } = props;

  if (difficulty === "hard") {
    DIFFICULTY_SPEED = 500;
  } else if (difficulty === "medium") {
    DIFFICULTY_SPEED = 2000;
  } else {
    DIFFICULTY_SPEED = 2500;
  }

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= DIFFICULTY_SPEED) {
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
