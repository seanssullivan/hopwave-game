import React, { useState } from "react";

import SpotifyDisplay from "./SpotifyDisplay";
import ToneDisplay from "./ToneDisplay";

export default function PlaybackDisplay(props) {
  const {
    playMusic,
    toneLoaded,
    spotifyOn,
    spotifyPlayer,
    trackInfo,
    statusMessage,
  } = props;

  return (
    <>
      {!playMusic && <div>MUSIC PAUSED</div>}
      {playMusic && !spotifyOn && <ToneDisplay toneLoaded={toneLoaded} />}
      {playMusic && spotifyOn && (
        <SpotifyDisplay spotifyPlayer={spotifyPlayer} trackInfo={trackInfo} />
      )}
    </>
  );
}
