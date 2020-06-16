import React, { useState, useEffect } from "react";

// Import hooks
// import useCurrentlyPlaying from "../../../hooks/useCurrentlyPlaying";

export default function SpotifyDisplay(props) {
  const { spotifyPlayer, trackInfo } = props;

  return (
    <div className={"spotify-display"}>
      {!spotifyPlayer && (
        <div className={"temp-display"}>{"CONNECTING..."}</div>
      )}
      {spotifyPlayer && !trackInfo && (
        <div className={"temp-display"}>{"LOADING..."}</div>
      )}
      {spotifyPlayer && trackInfo && (
        <div className={"display-track-info"}>
          <div className={"display-artwork"}>
            <img
              className={"album-artwork"}
              src={trackInfo.artwork}
              onError={"this.onError = null"}
              alt=""
            ></img>
          </div>
          <div className={"display-info"}>
            <span className={"display-track"}>Track: {trackInfo.track}</span>
            <span className={"display-album"}>Album: {trackInfo.album}</span>
            <span className={"display-artist"}>Artist: {trackInfo.artist}</span>
          </div>
        </div>
      )}
    </div>
  );
}
