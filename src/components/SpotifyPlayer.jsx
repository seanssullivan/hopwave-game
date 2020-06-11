import React from "react";

// Import settings
import settings from "../settings";
const { TOKEN } = settings.SPOTIFY;
const clientId = process.env.REACT_APP_CLIENT_ID;

export default function SpotifyPlayer() {
  return (
    <>
      <script>
        {
          (window.onSpotifyWebPlaybackSDKReady = () => {
            const token = TOKEN;
            const player = new window.Spotify.Player({
              name: "Web Playback SDK Quick Start Player",
              getOAuthToken: (cb) => {
                cb(token);
              },
            });

            // Error handling
            player.addListener("initialization_error", ({ message }) => {
              console.error(message);
            });
            player.addListener("authentication_error", ({ message }) => {
              console.error(message);
            });
            player.addListener("account_error", ({ message }) => {
              console.error(message);
            });
            player.addListener("playback_error", ({ message }) => {
              console.error(message);
            });

            // Playback status updates
            player.addListener("player_state_changed", (state) => {
              console.log(state.item);
            });

            // Ready
            player.addListener("ready", ({ device_id }) => {
              console.log("Ready with Device ID", device_id);
            });

            // Not Ready
            player.addListener("not_ready", ({ device_id }) => {
              console.log("Device ID has gone offline", device_id);
            });

            // Connect to the player!
            player.connect().then((success) => {
              if (success) {
                console.log(
                  "The Web Playback SDK successfully connected to Spotify!"
                );
              }
            });
          })
        }
      </script>
    </>
  );
}
