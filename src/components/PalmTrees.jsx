import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import PalmTree from "./PalmTree";

// Import hooks
import useMovement from "../hooks/useMovement";
import useReposition from "../hooks/useReposition";

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
        const leftRoad = ROAD_WIDTH - 40;
        return [
          ...all,
          <PalmTree
            key={key}
            position={[leftRoad, 5, 600]}
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
