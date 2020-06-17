import React, { useState } from "react";

// Import hooks
import useSpotifyControls from "../../hooks/useSpotifyControls";

export default function PlaybackControls(props) {
  const [useSpotify, setUseSpotify] = useState(false);

  const {
    playMusic,
    setPlayMusic,
    tonePlayer,
    spotifyOn,
    setSpotifyOn,
    accessToken,
    deviceId,
    spotifyPlayer,
  } = props;
  const [
    startPlayback,
    resumePlayback,
    pauseTrack,
    nextSong,
  ] = useSpotifyControls(accessToken, deviceId);

  const togglePlay = () => {
    if (!playMusic && accessToken && spotifyOn) {
      setPlayMusic(true);
      resumePlayback(spotifyPlayer);
    } else if (!playMusic && !spotifyOn) {
      setPlayMusic(true);
      tonePlayer.start();
    }
  };

  const togglePause = () => {
    if (playMusic && accessToken && spotifyOn) {
      pauseTrack(spotifyPlayer);
      setPlayMusic(false);
    } else if (playMusic) {
      tonePlayer.stop();
      setPlayMusic(false);
    }
  };

  const playNext = () => {
    if (playMusic && accessToken && spotifyOn) {
      nextSong(spotifyPlayer);
    }
  };

  const toggleSpotify = () => {
    if (!useSpotify) {
      // First time Spotify is being used
      tonePlayer.stop();
      setPlayMusic(true);
      setUseSpotify(true);
      setSpotifyOn(true);
    } else if (playMusic && !spotifyOn) {
      // Switch back to Spotify screen
      tonePlayer.stop();
      setSpotifyOn(true);
      resumePlayback(spotifyPlayer);
    } else if (!playMusic && spotifyOn) {
      // Switch back to Tone.js screen while paused
      setSpotifyOn(false);
    } else if (!playMusic && !spotifyOn) {
      // Switch to Spotify while Tone.js is paused
      setSpotifyOn(true);
    } else if (spotifyOn) {
      // Switch to Tone.js while Spotify is playing
      pauseTrack(spotifyPlayer);
      setSpotifyOn(false);
      tonePlayer.start();
    }
  };

  return (
    <div className={"playback-controls"}>
      <button className={"playback-button play-button"} onClick={togglePlay}>
        <span>Play</span>
      </button>
      <button className={"playback-button pause-button"} onClick={togglePause}>
        <span>Pause</span>
      </button>
      <button className={"playback-button next-button"} onClick={playNext}>
        <span>Next</span>
      </button>
      <button
        className={"playback-button spotify-button"}
        onClick={toggleSpotify}
      >
        <span>Spotify</span>
      </button>
    </div>
  );
}
