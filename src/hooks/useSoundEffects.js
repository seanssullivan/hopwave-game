// src/hooks/useSoundEffect.js
import * as Tone from "tone";

// const soundEffect = new Tone.Synth().toMaster();
const soundEffect = new Tone.PolySynth(4, Tone.Synth).toMaster();
soundEffect.volume.value = -16;
// soundEffect.triggerAttackRelease("C4", "8n");

export default function useSoundEffects() {
  const circleSound = function () {
    soundEffect.triggerAttackRelease(["E3", "G3", "C4"], "8t");
  };
  const squareSound = function () {
    soundEffect.triggerAttackRelease(["C4", "E4", "G4"], "8t");
  };
  const triangleSound = function () {
    soundEffect.triggerAttackRelease(["G4", "B4", "D4"], "8t");
  };
  const hexagonSound = function () {
    soundEffect.triggerAttackRelease(["A4", "E4", "C4"], "8t");
  };

  const playSound = function (shapetype) {
    if (shapetype === "Circle") {
      circleSound();
    } else if (shapetype === "Square") {
      squareSound();
    } else if (shapetype === "Triangle") {
      triangleSound();
    } else {
      hexagonSound();
    }
  };

  return [playSound];
}
