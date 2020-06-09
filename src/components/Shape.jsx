import React from "react";

import Hexagon from "./Shapes/Hexagon";
import Circle from "./Shapes/Circle";
import Square from "./Shapes/Square";
import Triangle from "./Shapes/Triangle";

export default function Shape(props) {
  const shapes = ["Hexagon", "Circle", "Square", "Triangle"];

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  if (randomShape === "Hexagon") {
    return <Hexagon key={props.shapeId} {...props} />;
  } else if (randomShape === "Circle") {
    return <Circle key={props.shapeId} {...props} />;
  } else if (randomShape === "Square") {
    return <Square key={props.shapeId} {...props} />;
  } else if (randomShape === "Triangle") {
    return <Triangle key={props.shapeId} {...props} />;
  }
}
