import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import Shape from "./Shape";

import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;
const { RADIUS } = settings.SHAPE;

export default function Obstacles(props) {
  const [objects, setObjects] = useState([]);
  const [key, setKey] = useState(1);
  const [time, setTime] = useState(Date.now());
  const { soundEffect, playerPosition } = props;

  const randomX =
    Math.abs(Math.random() * ROAD_WIDTH - RADIUS) - (ROAD_WIDTH - RADIUS) / 2;

  useFrame(() => {
    const destroyShape = function (key) {
      setObjects((all) => all.slice(1));
    };
    const now = Date.now();
    if (Date.now() - time >= 2500) {
      setObjects((all) => {
        return [
          ...all,
          <Shape
            key={key}
            shapeId={key}
            position={[randomX, 15, 600]}
            destroyShape={destroyShape}
            soundEffect={soundEffect}
            playerPosition={playerPosition}
          />,
        ];
      });

      setTime(() => now);
      setKey((prev) => (prev += 1));
    }
  });

  return <>{objects}</>;
}
