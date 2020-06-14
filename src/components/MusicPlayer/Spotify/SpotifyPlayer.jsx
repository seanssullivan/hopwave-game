import React, { useState } from "react";

// Import components
import SpotifySDK from "./SpotifySDK";
import SpotifyAuthWindow from "./SpotifyAuthWindow";

// Import hooks
import useSpotifyControls from "../../../hooks/useSpotifyControls";

/*
 * Component to manage requests to the Spotify Web Player SDK and Web API.
 */
export default function SpotifyPlayer(props) {
  const [accessStatus, setAccessStatus] = useState();
  const [accessToken, setAccessToken] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const [deviceId, setDeviceId] = useState();
  const [spotifyPlayer, setSpotifyPlayer] = useState();
  const [startPlayback, resumePlayback, pauseTrack] = useSpotifyControls(
    accessToken,
    deviceId
  );

  const [playbackPaused, setPlaybackPaused] = useState(false);

  return (
    <div>
      <h3>Spotify</h3>
      {!accessToken && (
        <SpotifyAuthWindow
          setStatus={setAccessStatus}
          setToken={setAccessToken}
          setMessage={setStatusMessage}
        />
      )}
      {accessToken && (
        <SpotifySDK
          accessToken={accessToken}
          setStatus={setAccessStatus}
          setMessage={setStatusMessage}
          setDeviceId={setDeviceId}
          setSpotifyPlayer={setSpotifyPlayer}
        />
      )}
      <p>{statusMessage}</p>
      <div>
        {/* Refactor these buttons into the parent MusicPlayer component */}
        <div
          onClick={() => {
            if (playbackPaused) {
              resumePlayback(spotifyPlayer);
              setPlaybackPaused(false);
            }
          }}
        >
          <h1>Play</h1>
        </div>
        <div
          onClick={() => {
            if (!playbackPaused) {
              pauseTrack(spotifyPlayer);
              setPlaybackPaused(true);
            }
          }}
        >
          <h1>Pause</h1>
        </div>
      </div>
    </div>
  );
}
