import React, { useState, useEffect, useCallback } from "react";

// Import hooks
import useCurrentlyPlaying from "../../hooks/useCurrentlyPlaying";

export default function PlaybackDisplay(props) {
  const { spotifyPlayer, statusMessage } = props;
  const [refreshIn, setRefreshIn] = useState(500);
  const [displayInfo, setDisplayInfo] = useState({});
  const getCurrentTrack = useCurrentlyPlaying();

  const updateDisplayInfo = useCallback(() => {
    if (spotifyPlayer) {
      const response = getCurrentTrack(spotifyPlayer);
      if (response) {
        const { progress, ...rest } = response;
        setRefreshIn(progress + 500);
        setDisplayInfo(...rest);
      } else {
        setRefreshIn(1000);
      }
    }
  }, [getCurrentTrack, spotifyPlayer]);

  useEffect(() => {
    setTimeout(updateDisplayInfo, refreshIn);
  }, [refreshIn, updateDisplayInfo]);

  return (
    <>
      {displayInfo && (
        <div className={"playback-display"}>
          <div className={"display-artwork"}>
            <img
              className={"album-artwork"}
              src={displayInfo.artwork}
              onError={"this.onError = null"}
              alt=""
            ></img>
          </div>
          <div className={"display-info"}>
            <span className={"display-track"}>{displayInfo.track}</span>
            <span className={"display-album"}>{displayInfo.album}</span>
            <span className={"display-artist"}>{displayInfo.artist}</span>
          </div>
        </div>
      )}
    </>
  );
}
