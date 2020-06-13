import React, { useState } from "react";

import SpotifyPlayer from "./SpotifyPlayer";

export default function MusicPlayer(props) {
  const [spotifyMusicOn, setSpotifyMusicOn] = useState(false);

  return (
    <>
      {spotifyMusicOn && <SpotifyPlayer />}
      {!spotifyMusicOn && <h1>Using Tone Music!</h1>}
      {!spotifyMusicOn && (
        <button onClick={() => setSpotifyMusicOn(true)}>Use Spotify</button>
      )}
    </>
  );
}
