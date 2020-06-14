import { useEffect, useState } from "react";
import * as Tone from "tone";

const TONE_VOLUME = -15;

const tonePlayer = new Tone.Player({
  url: "sounds/loops/Organ.wav",
  playbackRate: 1,
  autostart: true,
  loop: true,
  volume: TONE_VOLUME,
}).toMaster();

/**
 * useTonePlayer is a hook to manage music playback with Tone.js
 */
export default function useTonePlayer(speed) {
  const [timeout, setTimeout] = useState();

  const playTone = function () {
    if (tonePlayer.loaded) {
      tonePlayer.start();
    } else {
      setTimeout(setTimeout(playTone, 30));
    }
  };

  const stopTone = function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    tonePlayer.stop();
  };

  if (tonePlayer.loaded) {
    tonePlayer.playbackRate = 1 + speed / 10 - 0.5;
  }
  return [tonePlayer, playTone, stopTone];
}
