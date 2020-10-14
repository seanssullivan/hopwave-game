import React, { useEffect, useState } from "react";

// Import components
import PlaybackDisplay from "./PlaybackDisplay";
import PlaybackControls from "./PlaybackControls";
import { SpotifyPlayer } from "./Spotify";

// Import hooks
import useTonePlayer from "../../hooks/useTonePlayer";

import "./MusicPlayer.scss";

export default function MusicPlayer(props) {
  const { speed } = props;
  const [playMusic, setPlayMusic] = useState(true);
  const [spotifyOn, setSpotifyOn] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [deviceId, setDeviceId] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const [spotifyPlayer, setSpotifyPlayer] = useState();
  const [trackInfo, setTrackInfo] = useState();
  const [
    tonePlayer,
    isLoaded,
    trackNum,
    setPlaybackRate,
    playNextTrack,
  ] = useTonePlayer();

  useEffect(() => {
    if (!spotifyOn) {
      setPlaybackRate(speed);
    }
  }, [spotifyOn, setPlaybackRate, speed]);

  return (
    <div className={"music-player"}>
      <PlaybackDisplay
        playMusic={playMusic}
        toneLoaded={isLoaded}
        trackNum={trackNum}
        spotifyOn={spotifyOn}
        spotifyPlayer={spotifyPlayer}
        trackInfo={trackInfo}
      />
      <PlaybackControls
        playMusic={playMusic}
        setPlayMusic={setPlayMusic}
        tonePlayer={tonePlayer}
        playNextTrack={playNextTrack}
        spotifyOn={spotifyOn}
        setSpotifyOn={setSpotifyOn}
        accessToken={accessToken}
        deviceId={deviceId}
        spotifyPlayer={spotifyPlayer}
      />
      {spotifyOn && (
        <SpotifyPlayer
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setDeviceId={setDeviceId}
          setSpotifyPlayer={setSpotifyPlayer}
          setTrackInfo={setTrackInfo}
          setStatusMessage={setStatusMessage}
        />
      )}
    </div>
  );
}
