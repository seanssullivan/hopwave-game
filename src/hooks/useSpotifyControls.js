export default function useSpotifyControls() {
  const startPlaybackController = function ({
    spotifyUri,
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) {
    getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/play`, {
        method: "PUT",
        body: JSON.stringify({ context_uri: spotifyUri }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
    })
      .then((event) => {
        if (event.status === 403) {
          console.log("you need to upgrade to premium for playback");
          // setState((prev) => {
          //   return {
          //     ...prev,
          //     loadingState: "you need to upgrade to premium for playback",
          //     spotifyAccess: SpotifyAccess.NO_PREMIUM,
          //   };
          // });
        } else {
          console.log("playback started");
          // setState((prev) => {
          //   return {
          //     ...prev,
          //     loadingState: "playback started",
          //     playbackOn: true,
          //     playbackPaused: false,
          //   };
          // });
        }
      })
      .catch((error) => {
        console.log("playback error: " + error);
        // setState((prev) => {
        //   return { ...prev, loadingState: "playback error: " + error };
        // });
      });
  };

  const resumePlaybackController = function ({
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) {
    getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }).then((event) => {
        console.log("playback started");
        // setState((prev) => {
        //   return {
        //     ...prev,
        //     playbackPaused: false,
        //   };
        // });
      });
    });
  };

  const pauseTrackController = function ({
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) {
    getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }).then((event) => {
        console.log("playback paused");
        // setState((prev) => {
        //   return { ...prev, playbackPaused: true };
        // });
      });
    });
  };

  const startPlayback = (playerInstance, spotifyUri) =>
    startPlaybackController({ spotifyUri, playerInstance });
  const resumePlayback = (playerInstance) =>
    resumePlaybackController({ playerInstance });
  const pauseTrack = (playerInstance) =>
    pauseTrackController({ playerInstance });
  return [startPlayback, resumePlayback, pauseTrack];
}

// const connectToPlayer = function () {
//   if (state.spotifyPlayer) {
//     clearTimeout(state.connectToPlayerTimeout);
//     // Ready
//     state.spotifyPlayer.addListener("ready", ({ device_id }) => {
//       console.log("Ready with Device ID", device_id);
//       setState((prev) => {
//         return {
//           ...prev,
//           loadingState: "spotify player ready",
//           spotifyDeviceId: device_id,
//           spotifyPlayerReady: true,
//         };
//       });
//     });

//     // Not Ready
//     state.spotifyPlayer.addListener("not_ready", ({ device_id }) => {
//       console.log("Device ID has gone offline", device_id);
//     });

//     state.spotifyPlayer.connect().then((event) => {
//       setState((prev) => {
//         return { ...prev, loadingState: "connected to player" };
//       });
//     });
//   } else {
//     setState((prev) => {
//       return {
//         ...prev,
//         connectToPlayerTimeout: setTimeout(connectToPlayer, 1000),
//       };
//     });
//   }
// };
