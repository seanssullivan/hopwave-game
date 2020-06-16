import React from "react";

// Import components
import RoadSegment from "./RoadSegment";

// Import settings
import settings from "../../settings";
const { LENGTH, CUTOFF, COLOR } = settings.ROAD;

export default function Road(props) {
  const roadPositions = [];
  for (let seg = 0; seg <= LENGTH; seg++) {
    const zPosition = -100 + seg * 100;
    roadPositions.push([0, 0, zPosition]);
  }

  let prevColor;
  return roadPositions.map((position, index) => {
    let color;
    if (prevColor === "#04005e") {
      color = "#440dd5";
      prevColor = "#440dd5";
    } else {
      color = "#04005e";
      prevColor = "#04005e";
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
