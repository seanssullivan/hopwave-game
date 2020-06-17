import React from "react";

export default function ToneDisplay(props) {
  const { toneLoaded, trackNum } = props;
  return (
    <div className="tone-display">
      {toneLoaded ? `Tone.js: Track ${trackNum}` : "Buffering..."}
    </div>
  );
}
