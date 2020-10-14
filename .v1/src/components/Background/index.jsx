import React from "react";

// Import components
import Grid from "../Background/Grid";
import Ground from "./Ground";

export default function Background(props) {
  return (
    <>
      <Ground position={[0, -1, 200]} />
      <Grid position={[0, -0.8, 200]} />
    </>
  );
}
