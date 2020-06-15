import React from "react";

export default function ToneDisplay(props) {
  const { toneLoaded } = props;
  return (
    <div className="tone-display">
      {toneLoaded ? "Playing Tone.js!" : "Buffering..."}
    </div>
  );
}
