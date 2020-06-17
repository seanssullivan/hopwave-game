import { useEffect, useState } from "react";
import * as Tone from "tone";


const TONE_VOLUME = -38;


const TRACKS = {
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

  // Load all tracks into the buffers
  const loadToneBuffers = async function () {
    return new Promise((resolve, reject) => {
      console.log("Loading Tone.js player!");
      const players = new Tone.Players(TRACKS).toMaster();

      // Establish listener for when buffers are loaded
      Tone.Buffer.on("load", () => {
        console.log("Buffers have loaded!");
        players.volume.value = TONE_VOLUME;
        setTonePlayer(players.get(trackNum));
        setLoaded(true);
      });

      resolve(players);
    });
  };

  // Function to switch to the next track
  const playNextTrack = () => {
    allPlayers.stopAll();
    setTrackNum((prev) => (prev === 4 ? 1 : prev + 1));
  };

  // Load all tracks into buffers on first render
  useEffect(() => {
    loadToneBuffers()
      // Save all buffers to state when loaded
      .then((players) => {
        setAllPlayers(players);
      });
  }, []);

  // Replace player in state when track changes
  useEffect(() => {
    if (allPlayers) {
      setTonePlayer(allPlayers.get(trackNum));
    }
  }, [allPlayers, trackNum]);

  // Auto play when a player is replaced in state
  useEffect(() => {
    if (tonePlayer && isLoaded) {
      tonePlayer.loop = true;
      tonePlayer.start();
    }
  }, [tonePlayer, isLoaded]);

  // Function to change the playback rate in state
  const setPlaybackRate = function (speed) {
    setRate(1 + speed / 10 - 0.5);
  };

  // Update the playback rate of the current player
  useEffect(() => {
    if (tonePlayer) {
      tonePlayer.playbackRate = playbackRate;
    }
  }, [tonePlayer, playbackRate]);

  return [tonePlayer, isLoaded, trackNum, setPlaybackRate, playNextTrack];
}

// Saved example of loading just a single track into the player:
//
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
//
//     Tone.Buffer.on("load", () => {
//       setLoaded(true);
//       console.log("Buffer has loaded!");
//     });
//
//     resolve(player);
//   });
// };
//
// loadToneBuffer("sounds/loops/Organ.wav")
