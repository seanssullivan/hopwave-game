import React, { useState, useEffect } from "react";

// Import components
import SpotifySDK from "./SpotifySDK";
import SpotifyAuthWindow from "./SpotifyAuthWindow";
import Casette from "./Casette";

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
  const [spotifyPlayer, setSpotifyPlayer] = useState({});
  const [songData, setSongData] = useState([]);
  const [data, setData] = useState(false);
  const [
    startPlayback,
    resumePlayback,
    pauseTrack,
    nextSong,
    currentlyPlaying,
  ] = useSpotifyControls(accessToken, deviceId);

  const [playbackPaused, setPlaybackPaused] = useState(false);

  useEffect(() => {
    if (!songData.length) {
      currentlyPlaying(spotifyPlayer, setSongData, setData);
    }
  }, [songData, currentlyPlaying, spotifyPlayer]);

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
        />
      )}
      {/* <p>{statusMessage}</p> */}
      <div>
        <div>
          <Casette
            artist={songData[0]}
            album={songData[1]}
            artwork={songData[2]}
            play={() => {
              if (playbackPaused) {
                resumePlayback(spotifyPlayer);
                setPlaybackPaused(false);
              }
            }}
            pause={() => {
              if (!playbackPaused) {
                pauseTrack(spotifyPlayer);
                setPlaybackPaused(true);
              }
            }}
            next={() => {
              nextSong(spotifyPlayer, setSongData);
            }}
            currentlyPlaying={() => {
              currentlyPlaying(spotifyPlayer, setSongData, setData);
            }}
          />
        </div>
      </div>
    </div>
  );
}
