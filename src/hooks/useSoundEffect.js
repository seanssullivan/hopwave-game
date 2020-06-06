// src/hooks/useSoundEffect.js

import * as Tone from "tone";

export function useSoundEffect() {
  const synth = new Tone.Synth().toMaster();
  // const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  const playSound = () => {
    synth.triggerAttackRelease("C4", "8n");
    // polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "8t");
  };
  return playSound;
}
