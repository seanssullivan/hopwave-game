import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import PalmTree from "./PalmTree";

//Import settings
import settings from "../../settings";
const { SPAWN } = settings.PALM;
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;

export default function PalmTrees(props) {
  const { speed } = props;
  const [key, setKey] = useState(1);
  const [objects, setObjects] = useState([]);
  const [spawnTimer, setSpawnTimer] = useState(SPAWN);

  const destroyObject = function () {
    setObjects((all) => all.slice(1));
  };

  useFrame(() => {
    if (spawnTimer <= 0) {
      setObjects((all) => {
        const leftSide = ROAD_WIDTH - 40;
        const rightSide = ROAD_WIDTH - 160;
        return [
          ...all,
          {
            key: key,
            position: [leftSide, 25, 600],
          },
          {
            key: key + 1,
            position: [rightSide, 25, 600],
          },
        ];
      });
      setSpawnTimer((prev) => prev - speed + SPAWN);
      setKey((prev) => (prev += 2));
    } else {
      setSpawnTimer((prev) => prev - speed);
    }
  });

  return (
    <>
      {objects.map((obj) => {
        return (
          <PalmTree
            key={obj.key}
            position={obj.position}
            speed={speed}
            destroyObstacle={destroyObject}
          />
        );
      })}
    </>
  );
}
