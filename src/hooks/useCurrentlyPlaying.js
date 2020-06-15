export default function useCurrentlyPlaying() {
  const currentlyPlayingTrackController = function (spotifyPlayer) {
    const { _options } = spotifyPlayer;
    console.log("player instance outside", spotifyPlayer);
    if (_options) {
      console.log("player instance inside", _options);

      const { getOAuthToken } = _options;
      getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
          .then((response) => {
            if (response.status === 204) {
              return null;
            }
            return response.json();
          })
          .then((response) => {
            return response
              ? {
                  track: response.item.name,
                  artist: response.item.artists[0].name,
                  album: response.item.album.name,
                  artwork: response.item.album.images[0].url,
                  progress: response.progress_ms,
                }
              : null;
          })
          .catch(() => {});
      });
    }
  };

  const getCurrentTrack = (spotifyPlayer) => {
    currentlyPlayingTrackController(spotifyPlayer);
  };

  return getCurrentTrack;
}
