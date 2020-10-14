import React, { Suspense } from "react";

import Effects from "./Effects";
import Grid from "../Background/Grid";
import HopwaveLogo from "./Logo";

export default function MainMenu() {
  return (
    <>
      <Grid position={[0, -0.8, 200]} />
      <Suspense>
        <HopwaveLogo />
      </Suspense>
      <Effects />
    </>
  );
}
