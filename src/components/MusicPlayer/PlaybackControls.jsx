import React from "react";

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
      nextSong(spotifyPlayer);
    }
  };

  const toggleSpotify = () => {
    if (playMusic && !spotifyOn) {
      tonePlayer.stop();
      setSpotifyOn(true);
    } else if (!playMusic && !spotifyOn) {
      setSpotifyOn(true);
      setPlayMusic(true);
    } else if (spotifyOn) {
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
