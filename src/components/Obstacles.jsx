import React, { useState } from "react";
import { useFrame } from "react-three-fiber";

// Import components
import Shape from "./Shapes";

// Import hooks
import useSoundEffects from "../hooks/useSoundEffects";
import useShapePositions from "../hooks/useShapePositions";

// Import helpers
import detectCollision from "../helpers/detectCollision";

// Import settings
import settings from "../settings";
let { DIFFICULTY } = settings.GAME;

export default function Obstacles(props) {
  const [time, setTime] = useState(Date.now());
  const { playerPosition, difficulty, points, setPoints } = props;

  const [
    shapes,
    addShape,
    setShapePosition,
    setTriggered,
    destroyShape,
  ] = useShapePositions();
  const [playSound] = useSoundEffects();

  detectCollision(playerPosition, shapes, (key) => {
    setTriggered(key);

    playSound(shapes[key].type);

    setPoints(points);
  });

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= DIFFICULTY[difficulty]) {
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
