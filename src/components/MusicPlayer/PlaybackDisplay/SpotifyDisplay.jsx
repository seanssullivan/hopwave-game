import React, { useState, useEffect } from "react";

// Import hooks
// import useCurrentlyPlaying from "../../../hooks/useCurrentlyPlaying";

export default function SpotifyDisplay(props) {
  const { spotifyPlayer, trackInfo } = props;

  return (
    <>
      {!spotifyPlayer && <div>{"CONNECTING..."}</div>}
      {spotifyPlayer && !trackInfo && <div>{"LOADING..."}</div>}
      {spotifyPlayer && trackInfo && (
        <div className={"playback-display"}>
          <div className={"display-artwork"}>
            <img
              className={"album-artwork"}
              src={trackInfo.artwork}
              onError={"this.onError = null"}
              alt=""
            ></img>
          </div>
          <div className={"display-info"}>
            <span className={"display-track"}>{trackInfo.track}</span>
            <span className={"display-album"}>{trackInfo.album}</span>
            <span className={"display-artist"}>{trackInfo.artist}</span>
          </div>
        </div>
      )}
    </>
  );
}
