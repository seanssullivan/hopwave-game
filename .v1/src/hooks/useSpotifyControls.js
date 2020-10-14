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
        } else {
          console.log("playback started");
        }
      })
      .catch((error) => {
        console.log("playback error: " + error);
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
      });
    });
  };

  const nextSongTrackController = function ({
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) {
    getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/next`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }).then((event) => {
        console.log("next song");
      });
    });
  };

  const startPlayback = (playerInstance, spotifyUri) =>
    startPlaybackController({ spotifyUri, playerInstance });
  const resumePlayback = (playerInstance) =>
    resumePlaybackController({ playerInstance });
  const pauseTrack = (playerInstance) =>
    pauseTrackController({ playerInstance });
  const nextSong = (playerInstance, setSongData) =>
    nextSongTrackController({ playerInstance }, setSongData);

  return [startPlayback, resumePlayback, pauseTrack, nextSong];
}
