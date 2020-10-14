import React, { useCallback } from "react";
import Script from "react-load-script";

import settings from "../../../settings";
const { SPOTIFY_URI } = settings.SPOTIFY;
const { SOUND } = settings;

/*
 * Spotify's Web Playback SDK creates a connection between the app and a user's Spotify account.
 */
export default function SpotifySDK(props) {
  const {
    accessToken,
    setStatus,
    setMessage,
    setDeviceId,
    setSpotifyPlayer,
    setTrackInfo,
  } = props;

  /*
   * Call back function to run after the script tag has been created
   */
  const onCreateScript = useCallback(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      // TODO: Refactor into loadSpotifyPlayer() function in useSpotifySDK.js
      const spotifyPlayer = new window.Spotify.Player({
        name: "Hopwave Spotify Player",
        getOAuthToken: (cb) => {
          cb(accessToken);
        },
        volume: SOUND.SPOTIFY_VOLUME,
      });

      // Error handling
      spotifyPlayer.addListener("initialization_error", ({ message }) => {
        setStatus("initialization_error");
        setMessage("initialization error");
        console.error(message);
      });
      spotifyPlayer.addListener("authentication_error", ({ message }) => {
        setStatus("initialization_error");
        setMessage("authentication error");
        console.error(message);
      });
      spotifyPlayer.addListener("account_error", ({ message }) => {
        setStatus("account_error");
        setMessage("account error");
        console.error(message);
      });
      spotifyPlayer.addListener("playback_error", ({ message }) => {
        setStatus("playback_error");
        setMessage("playback error");
        console.error(message);
      });

      // Playback status updates
      spotifyPlayer.addListener("player_state_changed", (state) => {
        setStatus("player_state_changed");
        const trackState = state.track_window.current_track;
        setTrackInfo({
          track: trackState.name,
          artist: trackState.artists[0].name,
          album: trackState.album.name,
          artwork: trackState.album.images[0].url,
        });
        // console.log(state);
      });

      // Ready
      spotifyPlayer.addListener("ready", ({ device_id }) => {
        setStatus("ready");
        setMessage("device ready");
        console.log("Ready with Device ID", device_id);

        /*
         * Connect to the Spotify API in order to manage playback.
         *
         * This requires to separate API calls:
         * 1. Connect Spotify with the current device
         * 2. Direct the user's Spotify account to play the provided playlist
         *
         * Without the second API call, the Web Player SDK would play the last song they had listened to.
         */
        const spotifyApiSetup = async ({
          playerInstance: {
            _options: { getOAuthToken },
          },
        }) => {
          await getOAuthToken((access_token) => {
            // Transfer Spotify to current device
            fetch(`https://api.spotify.com/v1/me/player`, {
              method: "PUT",
              body: JSON.stringify({
                device_ids: [device_id],
                play: false,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
              },
            });
          });

          // Begin playback on current device
          // FIX: Unable to use .then() to handle 403 PREMIUM REQUIRED responses without a getOAuthToken undefined error.
          // TODO: Move all API requests into a separate hook.
          await getOAuthToken((access_token) => {
            fetch(
              `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
              {
                method: "PUT",
                body: JSON.stringify({
                  context_uri: SPOTIFY_URI,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${access_token}`,
                },
              }
            );
          });
        };

        // Setup Spotify API connection
        spotifyApiSetup({
          playerInstance: spotifyPlayer,
        });
      });

      // Not Ready
      spotifyPlayer.addListener("not_ready", ({ device_id }) => {
        setDeviceId(null);
        setStatus("not_ready");
        setMessage("Error: Device ID has gone offline...");
        console.log("Device ID has gone offline", device_id);
      });

      spotifyPlayer.connect().then((success) => {
        if (success) {
          setMessage("Successfully connected to Spotify!");
          console.log("Web Playback SDK successfully connected to Spotify!");
        }
      });

      // Store Spotify player in local state
      setSpotifyPlayer(spotifyPlayer);
    };
  }, [
    accessToken,
    setDeviceId,
    setSpotifyPlayer,
    setTrackInfo,
    setStatus,
    setMessage,
  ]);

  return (
    <>
      {accessToken && (
        <Script
          url="https://sdk.scdn.co/spotify-player.js"
          onCreate={onCreateScript}
        />
      )}
    </>
  );
}
