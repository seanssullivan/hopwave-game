import React, { useState } from "react";

// Import components
import SpotifySDK from "./SpotifySDK";
import SpotifyAuthWindow from "./SpotifyAuthWindow";

// Import hooks
import useSpotifyControls from "../../hooks/useSpotifyControls";

import settings from "../../settings";
const { CLIENT_ID, SPOTIFY_URI } = settings.SPOTIFY;

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
          clientId={CLIENT_ID}
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

      <p>{statusMessage}</p>
    </div>
  );
}

//   return (
//     <iframe
//       title="Spotify Player"
//       src="https://open.spotify.com/embed/playlist/3PPbbsJhktmX5Cp6syx7gR"
//       width="300"
//       height="220"
//       frameborder="0"
//       allowtransparency="true"
//       allow="encrypted-media"
//     ></iframe>
//   );
// }
