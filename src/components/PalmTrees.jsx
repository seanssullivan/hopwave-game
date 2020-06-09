import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import PalmTree from "./PalmTree";

//Import settings
import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;

export default function PalmTrees(props) {
  const [objects, setObjects] = useState([]);
  const [key, setKey] = useState(1);
  const [time, setTime] = useState(Date.now());

  const destroyObject = function (key) {
    setObjects((all) => all.slice(1));
  };

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= 1000) {
      setObjects((all) => {
        const leftSide = ROAD_WIDTH - 40;
        const rightSide = ROAD_WIDTH - 160;
        return [
          ...all,
          <PalmTree
            key={key}
            position={[leftSide, 5, 600]}
            destroyObstacle={destroyObject}
          />,
          <PalmTree
            key={key}
            position={[rightSide, 5, 600]}
            destroyObstacle={destroyObject}
          />,
        ];
      });

      setTime(() => now);
      setKey((prev) => (prev += 1));
    }
  });

  return <>{objects}</>;
}
