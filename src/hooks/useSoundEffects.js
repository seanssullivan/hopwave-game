// src/hooks/useSoundEffect.js
import * as Tone from "tone";

const soundEffect = new Tone.PolySynth(3, Tone.Synth).toMaster();

soundEffect.volume.value = -47;


export default function useSoundEffects() {
  // Define chords for each shape
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

  // Play a chord based on the shape's type
  const playSound = function (shapeType) {
    if (shapeType === "Circle") {
      circleSound();
    } else if (shapeType === "Square") {
      squareSound();
    } else if (shapeType === "Triangle") {
      triangleSound();
    } else if (shapeType === "Hexagon") {
      hexagonSound();
    }
  };

  return [playSound];
}
