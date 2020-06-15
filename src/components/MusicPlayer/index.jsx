import React, { useEffect, useState } from "react";

// Import components
import { SpotifyPlayer, SpotifyIframe } from "./Spotify";

// Import hooks
import useTonePlayer from "../../hooks/useTonePlayer";

export default function MusicPlayer(props) {
  const { gameMode, speed } = props;
  const [playMusic, setPlayMusic] = useState(true);
  const [spotifyMusicOn, setSpotifyMusicOn] = useState(false);
  const [tonePlayer, isLoaded, setPlaybackRate] = useTonePlayer();

  useEffect(() => {
    if (!spotifyMusicOn) {
      setPlaybackRate(speed);
    }
  }, [spotifyMusicOn, setPlaybackRate, speed]);

  return (
    <>
      {playMusic && spotifyMusicOn && <SpotifyPlayer />}
      {playMusic && !spotifyMusicOn && (
        <h1>{isLoaded ? "Tone.js!" : "Buffering..."}</h1>
      )}
      {playMusic && !spotifyMusicOn && (
        <h4
          onClick={() => {
            setSpotifyMusicOn(true);
            tonePlayer.stop();
          }}
        >
          Spotify login
        </h4>
      )}
      {/* <h4>{playMusic || !gameMode ? "Spotify" : <SpotifyIframe />}</h4> */}
<<<<<<< HEAD
      <h4
        onClick={() => {
          setPlayMusic((prev) => {
            if (!spotifyMusicOn && prev === false) {
              tonePlayer.start();
            } else if (!spotifyMusicOn && prev === true) {
              tonePlayer.stop();
            }
            return !prev;
          });
        }}
      >
        sound:{playMusic ? "on" : "off"}
=======
      <h4 onClick={() => setPlayMusic((prev) => !prev)}>
        music:{playMusic ? "on" : "off"}
>>>>>>> origin/master
      </h4>
    </>
  );
}
