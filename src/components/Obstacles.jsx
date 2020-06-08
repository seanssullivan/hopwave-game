import React, { useState } from "react";
// import RandomObstacle from "./RandomObstacle"
import { useFrame } from "react-three-fiber";
import Dodecahedron from "./Shapes/Dodecahedron";
import Donut from "./Shapes/Donut";
import Box from "./Shapes/Box";
import Triangle from "./Shapes/Triangle";

import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;

const SHAPE_WIDTH = 30;

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
      const shapes = ["Dodecahedron", "Donut", "Box", "Triangle"];

      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      setShape(() => randomShape);
      const randomX =
        Math.abs(Math.random() * ROAD_WIDTH - SHAPE_WIDTH) -
        (ROAD_WIDTH - SHAPE_WIDTH) / 2;

      if (shape === "Dodecahedron") {
        setObjects((all) => {
          return [
            ...all,
            <Dodecahedron
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      } else if (shape === "Donut") {
        setObjects((all) => {
          return [
            ...all,
            <Donut
              key={key}
              position={[randomX, 15, 600]}
              destroyObstacle={destroyObject}
            />,
          ];
        });
      } else if (shape === "Box") {
        setObjects((all) => {
          return [
            ...all,
            <Box
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
