import * as Tone from "tone";

const musicPlayer = new Tone.Player({
  url: "sounds/loops/Organ.wav",
  playbackRate: 1,
  autostart: false,
  loop: true,
  volume: -80,
}).toMaster();

/**
 * useMusic is a hook to manage music playback with Tone.js
 */
export default function useMusic(speed) {
  musicPlayer.playbackRate = 1 + speed / 10 - 0.5;

  return [musicPlayer];
}
