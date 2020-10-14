import React, { Suspense } from "react";

// Import components
import Road from "./Road";
import PalmTrees from "./PalmTrees";

export default function Environment(props) {
  const { speed } = props;
  return (
    <>
      <Road speed={speed} />
      <Suspense fallback={null}>
        <PalmTrees speed={speed} />
      </Suspense>
    </>
  );
}
