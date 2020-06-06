import { useState, useReducer } from "react";

import * as Tone from "tone";

/**
 * useMusic is a hook to manage music playback with Tone.js
 */
export function useMusic() {
  const [bpm, setBpm] = useState(100);

  return { bpm, setBpm };
}
