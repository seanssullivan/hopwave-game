// src/hooks/useSoundEffect.js
import { useState } from "react";
import * as Tone from "tone";

export default function useSoundEffects() {
  const [playSound] = useState(() => {
    // const soundEffect = new Tone.Synth().toMaster();
    const soundEffect = new Tone.PolySynth(4, Tone.Synth).toMaster();
    soundEffect.volume.value = -16;
    // soundEffect.triggerAttackRelease("C4", "8n");
    return () =>
      soundEffect.triggerAttackRelease(["C4", "E4", "G4", "B4"], "8t");
  });
  return [playSound];
}
