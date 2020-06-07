import React, { useState } from 'react'
import RandomObstacle from "./RandomObstacle"
import { useFrame } from 'react-three-fiber'

import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;

const SHAPE_WIDTH = 30;

export default function Obstacles(props) {
  const [objects, setObjects] = useState([]);
  const [key, setKey] = useState(1);
  const [time, setTime] = useState(Date.now());

  const destroyObject = function(key) {
    setObjects(all => all.slice(1));
  }

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= 2500) {
      const randomX = Math.abs(Math.random() * ROAD_WIDTH - SHAPE_WIDTH) - ((ROAD_WIDTH - SHAPE_WIDTH) / 2);
      setObjects(all => {
        return [...all, 
        <RandomObstacle
          key={key}
          test={key}
          position={[
            randomX, 15, 600]}
          destroyObstacle={destroyObject}
        />]
      });
      setTime(() => now);
      setKey(prev => prev += 1);
    }
  });

  return (
    <>
    {objects}
    </>
  )
}


