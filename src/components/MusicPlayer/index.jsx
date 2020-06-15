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
  const [tonePlayer, isLoaded, setPlaybackRate] = useTonePlayer();

  useEffect(() => {
    if (!spotifyOn) {
      setPlaybackRate(speed);
    }
  }, [spotifyOn, setPlaybackRate, speed]);

  return (
    <div className={"music-player"}>
      <PlaybackDisplay spotifyPlayer={spotifyPlayer} />
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
          setStatusMessage={setStatusMessage}
        />
      )}
      {playMusic && !spotifyOn && (
        <h1>{isLoaded ? "Tone.js!" : "Buffering..."}</h1>
      )}
      {playMusic && !spotifyOn && (
        <h4
          onClick={() => {
            setSpotifyOn(true);
            tonePlayer.stop();
          }}
        >
          Spotify login
        </h4>
      )}
      {/* <h4>{playMusic || !gameMode ? "Spotify" : <SpotifyIframe />}</h4> */}
      <h4
        onClick={() => {
          setPlayMusic((prev) => {
            if (!spotifyOn && prev === false) {
              tonePlayer.start();
            } else if (!spotifyOn && prev === true) {
              tonePlayer.stop();
            }
            return !prev;
          });
        }}
      >
        sound:{playMusic ? "on" : "off"}
      </h4>
    </div>
  );
}
