import { useState, useReducer } from "react";

/**
 * useMusic is a hook to manage music playback with Tone.js
 */
export function useMusic() {
  const [ bpm, setBpm ] = useState(100);

  return { bpm, setBpm };
}