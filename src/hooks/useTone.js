import { useEffect, useState } from "react";
import * as Tone from "tone";

const TONE_VOLUME = -15;

export default async function useTone() {
  const [tonePlayer] = useState(
    new Tone.Player({
      url: "Synth2.wav",
      autostart: false,
      loop: true,
      volume: TONE_VOLUME,
    }).toMaster()
  );

  // const waitForBuffer = () => {
  //   if (tonePlayer.buffer.loaded) {
  //     return resolve(tonePlayer);
  //   } else {
  //     setTimeout(waitForBuffer, 30);
  //   }
  // };

  return [tonePlayer];
}
