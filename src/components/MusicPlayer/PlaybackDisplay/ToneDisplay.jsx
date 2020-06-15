import React from "react";

export default function ToneDisplay(props) {
  const { toneLoaded } = props;
  return <div>{toneLoaded ? "Playing Tone.js!" : "Buffering..."}</div>;
}
