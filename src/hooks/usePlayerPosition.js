// src/hooks/usePlayerPosition.js

import { useState } from "react";

/**
 * Return player position and a function to update the player position in state.
 * @param {Object} initialPosition - Initial player coordinates
 */
export default function usePlayerPosition(initialPosition) {
  const [position, setPosition] = useState(initialPosition);

  const setPlayerPosition = function ({ x, y, z }) {
    setPosition([x, y, z]);
  };

  return [position, setPlayerPosition];
}
