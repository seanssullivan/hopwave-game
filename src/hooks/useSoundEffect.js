// src/hooks/useSoundEffect.js

import * as Tone from "tone";

export default function useSoundEffect() {
  const synth = new Tone.Synth().toMaster();
  synth.volume.value = -6;
  // const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  const playSound = () => {
    synth.triggerAttackRelease("C4", "8n");
    // polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "8t");
  };
  return playSound;
}
