import { useState } from "react";

export default function useCurrentlyPlaying() {
  const getCurrentTrackFromPlayerState = async (spotifyPlayer) => {
    const playerState = spotifyPlayer.getCurrentState();
    const trackState = playerState.track_window
      ? playerState.track_window.current_track
      : null;
    return trackState
      ? {
          track: trackState.name,
          artist: trackState.artists[0].name,
          album: trackState.album.name,
          artwork: trackState.album.images[0].url,
        }
      : null;
  };

  const currentlyPlayingTrackFromAPIController = async function (
    spotifyPlayer
  ) {
    const { _options } = spotifyPlayer;

    if (_options) {
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
            // if (response.status === 204) {
            //   return null;
            // }
            return response.json();
          })
          .then((response) => {
            console.log(response);
            return {
              track: response.item.name,
              artist: response.item.artists[0].name,
              album: response.item.album.name,
              artwork: response.item.album.images[0].url,
              progress: response.progress_ms,
            };
          })
          .catch(() => {});
      });
    }
  };

  const getCurrentTrack = async (spotifyPlayer) => {
    const stateTrackInfo = getCurrentTrackFromPlayerState(spotifyPlayer);
    console.log(stateTrackInfo);
    return stateTrackInfo
      ? stateTrackInfo
      : currentlyPlayingTrackFromAPIController(spotifyPlayer);
  };

  return getCurrentTrack;
}
