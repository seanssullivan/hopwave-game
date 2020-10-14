import React from "react";

import Hexagon from "./Hexagon";
import Circle from "./Circle";
import Square from "./Square";
import Triangle from "./Triangle";

export default function Shape(props) {
  if (props.shapeName === "Hexagon") {
    return <Hexagon key={props.shapeId} {...props} />;
  } else if (props.shapeName === "Circle") {
    return <Circle key={props.shapeId} {...props} />;
  } else if (props.shapeName === "Square") {
    return <Square key={props.shapeId} {...props} />;
  } else if (props.shapeName === "Triangle") {
    return <Triangle key={props.shapeId} {...props} />;
  }
}
