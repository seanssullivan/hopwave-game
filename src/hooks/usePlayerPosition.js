// src/hooks/usePlayerPosition.js

import { useState } from "react";

/**
 * Return player position and a function to update the player position in state.
 * @param {Object} mesh - Three.js object mesh
 */
export default function usePlayerPosition(initialPosition = [0, 0, 0]) {
  const [position, setPosition] = useState(initialPosition);

  const setPlayerPosition = function (mesh) {
    const { x, y, z } = mesh.current.position;
    setPosition([x, y, z]);
  };

  return [position, setPlayerPosition];
}
