import React from "react";

import RoadSegment from "./RoadSegment";

const SPEED = 5;
const CUTOFF = -200;
const LENGTH = 7;

export default function Road(props) {
  const roadPositions = [];
  for (let seg = 0; seg <= LENGTH; seg++) {
    const zPosition = -100 + seg * 100;
    roadPositions.push([0, 0, zPosition]);
  }
  let prevColor = "cyan";
  return roadPositions.map((position, index) => {
    let color;
    if (prevColor === "purple") {
      color = "cyan";
      prevColor = "cyan";
    } else {
      color = "purple";
      prevColor = "purple";
    }
    return (
      <RoadSegment
        key={index}
        position={position}
        speed={SPEED}
        cutoff={CUTOFF}
        spawn={100 * (LENGTH - 1)}
        color={color}
      />
    );
  });
}
