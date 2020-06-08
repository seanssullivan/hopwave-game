import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import Hexagon from "./Shapes/Hexagon";
import Circle from "./Shapes/Circle";
import Square from "./Shapes/Square";
import Triangle from "./Shapes/Triangle";

import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;
const { RADIUS } = settings.SHAPE;

export default function Obstacles(props) {
  const [objects, setObjects] = useState([]);
  const [key, setKey] = useState(1);
  const [time, setTime] = useState(Date.now());
  const [shape, setShape] = useState();

  const destroyObject = function (key) {
    setObjects((all) => all.slice(1));
  };

  useFrame(() => {
    const now = Date.now();
    if (Date.now() - time >= 2500) {
      const shapes = ["Hexagon", "Circle", "Square", "Triangle"];

      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      setShape(() => randomShape);
      const randomX =
        Math.abs(Math.random() * ROAD_WIDTH - RADIUS) -
        (ROAD_WIDTH - RADIUS) / 2;

      if (shape === "Hexagon") {
        setObjects((all) => {
          return [
            ...all,
            <Hexagon
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      } else if (shape === "Circle") {
        setObjects((all) => {
          return [
            ...all,
            <Circle
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      } else if (shape === "Square") {
        setObjects((all) => {
          return [
            ...all,
            <Square
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      } else {
        setObjects((all) => {
          return [
            ...all,
            <Triangle
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      }

      setTime(() => now);
      setKey((prev) => (prev += 1));
    }
  });

  return <>{objects}</>;
}
