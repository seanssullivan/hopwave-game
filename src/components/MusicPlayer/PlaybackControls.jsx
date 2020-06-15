import React, { useState, useCallback } from "react";

// Import hooks
import useSpotifyControls from "../../hooks/useSpotifyControls";

export default function PlaybackControls(props) {
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
      nextSong();
    }
  };

  const toggleSpotify = () => {
    if (playMusic && !spotifyOn) {
      tonePlayer.stop();
      setSpotifyOn(true);
    } else if (!playMusic && !spotifyOn) {
      setPlayMusic(true);
      setSpotifyOn(true);
    } else {
      setSpotifyOn(false);
    }
  };

  return (
    <div className={"playback-controls"}>
      <div className={"button play-button"} onClick={togglePlay}>
        <span>Play</span>
      </div>
      <div className={"button pause-button"} onClick={togglePause}>
        <span>Pause</span>
      </div>
      <div className={"button next-button"} onClick={playNext}>
        <span>Next</span>
      </div>
      <div className={"button spotify-button"} onClick={toggleSpotify}>
        <span>Spotify</span>
      </div>
    </div>
  );
}
