import React from "react";

import Hexagon from "./Shapes/Hexagon";
import Circle from "./Shapes/Circle";
import Square from "./Shapes/Square";
import Triangle from "./Shapes/Triangle";

export default function Shape(props) {
  const { destroyShape, setPositions, playerPosition } = props;
  const shapes = ["Hexagon", "Circle", "Square", "Triangle"];

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  if (randomShape === "Hexagon") {
    return (
      <Hexagon
        key={props.shapeId}
        shapeId={props.shapeId}
        position={props.position}
        destroyShape={destroyShape}
        setPositions={setPositions}
        playerPosition={playerPosition}
      />
    );
  } else if (randomShape === "Circle") {
    return (
      <Circle
        key={props.shapeId}
        shapeId={props.shapeId}
        position={props.position}
        destroyShape={destroyShape}
        setPositions={setPositions}
        playerPosition={playerPosition}
      />
    );
  } else if (randomShape === "Square") {
    return (
      <Square
        key={props.shapeId}
        shapeId={props.shapeId}
        position={props.position}
        destroyShape={destroyShape}
        setPositions={setPositions}
        playerPosition={playerPosition}
      />
    );
  } else {
    return (
      <Triangle
        key={props.shapeId}
        shapeId={props.shapeId}
        position={props.position}
        destroyShape={destroyShape}
        setPositions={setPositions}
        playerPosition={playerPosition}
      />
    );
  }
}
