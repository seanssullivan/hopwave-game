import React, { useEffect, useState } from "react";

// Import components
import PlaybackDisplay from "./PlaybackDisplay";
import PlaybackControls from "./PlaybackControls";
import { SpotifyPlayer, SpotifyIframe } from "./Spotify";

// Import hooks
import useTonePlayer from "../../hooks/useTonePlayer";

export default function MusicPlayer(props) {
  const { gameMode, speed } = props;
  const [playMusic, setPlayMusic] = useState(true);
  const [spotifyOn, setSpotifyOn] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [deviceId, setDeviceId] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const [spotifyPlayer, setSpotifyPlayer] = useState();
  const [trackInfo, setTrackInfo] = useState();
  const [tonePlayer, isLoaded, setPlaybackRate] = useTonePlayer();

  useEffect(() => {
    if (!spotifyOn) {
      setPlaybackRate(speed);
    }
  }, [spotifyOn, setPlaybackRate, speed]);

  useEffect(() => {
    console.log(spotifyPlayer);
  }, [spotifyPlayer]);

  return (
    <div className={"music-player"}>
      <PlaybackDisplay
        playMusic={playMusic}
        toneLoaded={isLoaded}
        spotifyOn={spotifyOn}
        spotifyPlayer={spotifyPlayer}
        trackInfo={trackInfo}
      />
      <PlaybackControls
        playMusic={playMusic}
        setPlayMusic={setPlayMusic}
        tonePlayer={tonePlayer}
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
