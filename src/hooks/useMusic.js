import { useState, useReducer } from "react";
import * as Tone from "tone";
// let audio = new Audio("/Song.mp3");

/**
 * useMusic is a hook to manage music playback with Tone.js
 */
export function useMusic() {
  const [song, setSong] = useState(false);
  const [bpm, setBpm] = useState(100);
  const [player] = useState(() =>
    new Tone.Player({
      url: "Song.mp3",
      autostart: true,
      volume: -15,
    }).toMaster()
  );

  return { bpm, setBpm, player };
}
