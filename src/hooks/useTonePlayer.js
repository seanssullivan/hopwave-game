import { useEffect, useState } from "react";
import * as Tone from "tone";

const TONE_VOLUME = -15;

// let tonePlayer = null;
const tracks = {
  1: "sounds/loops/Organ.wav",
  2: "sounds/loops/Synth.wav",
  3: "sounds/loops/Synth2.wav",
  4: "sounds/loops/Piano.wav",
};

/**
 * useTonePlayer is a hook to manage music playback with Tone.js
 */
export default function useTonePlayer() {
  const [allPlayers, setAllPlayers] = useState();
  const [tonePlayer, setTonePlayer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [trackNum, setTrackNum] = useState(1);
  const [playbackRate, setRate] = useState(1);
  // const tonePlayer = useRef(null);

  // const loadToneBuffer = function (filepath) {
  //   return new Promise((resolve, reject) => {
  //     console.log("Loading Tone.js player!");
  //     const player = new Tone.Player({
  //       url: filepath,
  //       playbackRate: 1,
  //       autostart: true,
  //       loop: true,
  //       volume: TONE_VOLUME,
  //     }).toMaster();

  //     Tone.Buffer.on("load", () => {
  //       setLoaded(true);
  //       console.log("Buffer has loaded!");
  //     });

  //     resolve(player);
  //   });
  // };

  const loadToneBuffers = async function () {
    return new Promise((resolve, reject) => {
      console.log("Loading Tone.js player!");
      const players = new Tone.Players(tracks).toMaster();

      Tone.Buffer.on("load", () => {
        console.log("Buffers have loaded!");
        players.volume.value = TONE_VOLUME;
        setTonePlayer(players.get(trackNum));
        setLoaded(true);
      });

      resolve(players);
    });
  };

  const playNextTrack = () => {
    allPlayers.stopAll();
    setTrackNum((prev) => (prev === 4 ? 1 : prev + 1));
  };

  useEffect(() => {
    // loadToneBuffer("sounds/loops/Organ.wav")
    loadToneBuffers().then((players) => {
      setAllPlayers(players);
    });
  }, []);

  useEffect(() => {
    if (allPlayers) {
      setTonePlayer(allPlayers.get(trackNum));
    }
  }, [allPlayers, trackNum]);

  useEffect(() => {
    if (tonePlayer && isLoaded) {
      tonePlayer.loop = true;
      tonePlayer.start();
    }
  }, [tonePlayer, isLoaded]);

  const setPlaybackRate = function (speed) {
    setRate(1 + speed / 10 - 0.5);
  };

  useEffect(() => {
    if (tonePlayer) {
      tonePlayer.playbackRate = playbackRate;
    }
  }, [tonePlayer, playbackRate]);

  return [tonePlayer, isLoaded, trackNum, setPlaybackRate, playNextTrack];
}
