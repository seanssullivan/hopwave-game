// src/hooks/useShapePosition.js

import { useState } from "react";

/**
 * Return the positions of all shapes and a function to set the position of a shape in state.
 */
export default function usePlayerPosition() {
  const [shapePositions, setShapePositions] = useState({});

  const setShapePosition = function (key, position) {
    const { x, y, z } = position;
    setShapePositions((all) => {
      const allPositions = { ...all };
      allPositions[key] = [x, y, z];
      return allPositions;
    });
  };

  return [shapePositions, setShapePosition];
}
