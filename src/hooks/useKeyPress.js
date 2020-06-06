// src/hooks/useKeyPress.js

// Adapted from a tutorial at usehooks.com
// https://usehooks.com/useKeyPress/

import { useState, useEffect } from "react";

/**
 * Sets event listeners for key-press events.
 * @param {String} targetKey
 */
export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  /**
   * Changes state of keyPressed when the target key is pressed.
   * @param {Object} event
   */
  const keyDown = (event) => {
    if (event.key === targetKey) {
      setKeyPressed(true);
    }
  };

  /**
   * Changes state of keyPressed when the target key is pressed.
   * @param {Object} event
   */
  const keyUp = (event) => {
    if (event.key === targetKey) {
      setKeyPressed(false);
    }
  };

  /**
   * Set event listeners to listen for key events.
   */
  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  });

  return { keyPressed, keyDown, keyUp };
}
