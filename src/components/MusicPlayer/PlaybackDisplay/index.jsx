import React from "react";

import SpotifyDisplay from "./SpotifyDisplay";
import ToneDisplay from "./ToneDisplay";

import "./display.scss";

export default function PlaybackDisplay(props) {
  const { playMusic, toneLoaded, spotifyOn, spotifyPlayer, trackInfo } = props;

  return (
    <div className="playback-display">
      {!playMusic && <div className={"default-display"}>MUSIC PAUSED</div>}
      {playMusic && !spotifyOn && <ToneDisplay toneLoaded={toneLoaded} />}
      {playMusic && spotifyOn && (
        <SpotifyDisplay spotifyPlayer={spotifyPlayer} trackInfo={trackInfo} />
      )}
    </div>
  );
}
