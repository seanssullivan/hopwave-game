import React, { Component } from "react";
import axios from "axios";
import { render } from "react-three-fiber";

const clientId = process.env.REACT_APP_CLIENT_ID;

export default function SpotifyPlayer(props) {
  return (
    <>
      <script>
        {
          (window.onSpotifyWebPlaybackSDKReady = () => {
            const token =
              "BQAYIhnJE13fILI0564rmptq9ssH7zhiZgGgSBZXu0g5EsIstLOdGKIqFRw3NfV4k8mz7PRxeE8OfI0NHvrAdOf7CT3bZXrRSz-hvCR0Hmy6pKEqf6KT88IjdseGU46P_PHjeksZT1Cuw7jqfaqiq1Dlk2vGtI_A8I5gZ_MwBsbnzF56WwApfnU";
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
              console.log(state);
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

// return axios.get("https://accounts.spotify.com/authorize").then((res) => {});
// axios
//     .get(
//       "https://open.spotify.com/playlist/1APbMkLxJGgWT88wpKyCIA?si=5NMAGjFgQemtXc3E22BfDA"
//     )
//     .then((res) => {
//       console.log(res);
//     });
