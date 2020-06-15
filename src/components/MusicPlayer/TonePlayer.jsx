import { useEffect, useState } from "react";
import * as Tone from "tone";

const TONE_VOLUME = -15;

/**
 * useTonePlayer is a hook to manage music playback with Tone.js
 */
export default function useTonePlayer(speed) {
  const [player, setPlayer] = useState(
    new Tone.Player({
      url: "sounds/loops/Organ.wav",
      playbackRate: 1,
      autostart: true,
      loop: true,
      volume: TONE_VOLUME,
    }).toMaster()
  );

  if (player) {
    player.playbackRate = 1 + speed / 10 - 0.5;
  }

  // const playTone = () => {
  //   if (tonePlayer) {
  //     tonePlayer.start();
  //   }
  // };

  // const stopTone = () => {
  //   if (tonePlayer) {
  //     tonePlayer.stop();
  //   }
  // };

  return [player]; //, playTone, stopTone];
}
