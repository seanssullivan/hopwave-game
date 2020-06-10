import React from "react";

// Import components
import RoadSegment from "./RoadSegment";

// Import settings
import settings from "../settings";
const { LENGTH, CUTOFF } = settings.ROAD;

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
        speed={props.speed}
        cutoff={CUTOFF}
        spawn={100 * (LENGTH - 1)}
        color={color}
      ></RoadSegment>
    );
  });
}
