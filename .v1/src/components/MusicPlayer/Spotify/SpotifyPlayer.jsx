import React, { useState } from "react";

// Import components
import SpotifySDK from "./SpotifySDK";
import SpotifyAuthWindow from "./SpotifyAuthWindow";

/*
 * Component to manage requests to the Spotify Web Player SDK and Web API.
 */
export default function SpotifyPlayer(props) {
  const {
    accessToken,
    setAccessToken,
    setDeviceId,
    setSpotifyPlayer,
    setTrackInfo,
    setStatusMessage,
  } = props;
  const [accessStatus, setAccessStatus] = useState();

  return (
    <div>
      {/* <h3>Spotify</h3> */}
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
          setTrackInfo={setTrackInfo}
        />
      )}
    </div>
  );
}
