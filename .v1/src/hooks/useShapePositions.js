// src/hooks/useShapePosition.js

import { useState } from "react";

import settings from "../settings";
const { WIDTH: ROAD_WIDTH } = settings.ROAD_SEGMENT;
const { RADIUS } = settings.SHAPE;
const SHAPES = ["Hexagon", "Circle", "Square", "Triangle"];

/**
 * Return the positions of all shapes and a function to set the position of a shape in state.
 */
export default function useShapePositions() {
  const [shapes, setShapes] = useState({});
  const [key, setKey] = useState(1);

  // Add a shape to state
  const addShape = async function (radius) {
    const randomX =
      Math.abs(Math.random() * ROAD_WIDTH - RADIUS) - (ROAD_WIDTH - RADIUS) / 2;
    setShapes((all) => {
      const allShapes = { ...all };
      // Add new shape to object by its key
      allShapes[key] = {
        position: [randomX, 15, 600],
        type: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        radius: radius,
        triggered: false,
      };
      return allShapes;
    });
    setKey((prev) => prev + 1);
  };

  // Change the position of a specific shape in state
  const setShapePosition = async function (key, position) {
    const { x, y, z } = position;
    setShapes((all) => {
      const allShapes = { ...all };
      allShapes[key].position = [x, y, z];
      return allShapes;
    });
  };

  // Prevent collisions from occurring multiple times
  const setTriggered = async function (key) {
    setShapes((all) => {
      const allShapes = { ...all };
      allShapes[key].triggered = true;
      return allShapes;
    });
  };

  // Remove a shape from state
  const destroyShape = async function (key) {
    setShapes((all) => {
      const allShapes = { ...all };
      delete allShapes[key];
      return allShapes;
    });
  };

  return [shapes, addShape, setShapePosition, setTriggered, destroyShape];
}
