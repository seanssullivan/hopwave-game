import React, { useState } from "react";

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
  const [spotifyPlayer, setSpotifyPlayer] = useState();
  const [songData, setSongData] = useState();
  const [data, setData] = useState(false);
  const [
    startPlayback,
    resumePlayback,
    pauseTrack,
    nextSong,
    currentlyPlaying,
  ] = useSpotifyControls(accessToken, deviceId);

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
      {/* <p>{statusMessage}</p> */}
      <div>
        {/* Refactor these buttons into the parent MusicPlayer component */}
        {/* <div
          onClick={() => {
            if (playbackPaused) {
              resumePlayback(spotifyPlayer);
              setPlaybackPaused(false);
            }
          }}
        >
          <h4>Play</h4>
        </div>
        <div
          onClick={() => {
            if (!playbackPaused) {
              pauseTrack(spotifyPlayer);
              setPlaybackPaused(true);
            }
          }}
        >
          <h4>Pause</h4>
        </div>
        <div
          onClick={() => {
            nextSong(spotifyPlayer);
          }}
        >
          <h4>Next</h4>
        </div> */}
        <div
          onClick={() => {
            currentlyPlaying(spotifyPlayer, setSongData, setData);
          }}
        >
          <h4>now playing</h4>
        </div>
        <div>
          {songData && (
            <Casette
              artist={songData[0]}
              album={songData[1]}
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
                nextSong(spotifyPlayer);
              }}
              currentlyPlaying={() => {
                currentlyPlaying(spotifyPlayer, setSongData, setData);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
