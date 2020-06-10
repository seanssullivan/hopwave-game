// src/hooks/useCollisionDetection.js

import settings from "../settings";

const { WIDTH, LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default function detectCollision(playerPosition, objects, callback) {
  const [playerX, playerY, playerZ] = playerPosition;
  const carFront = playerZ + LENGTH / 2;
  const carBack = playerZ - LENGTH / 2;

  for (const key in objects) {
    const [objectX, objectY, objectZ] = objects[key].position;
    const shapeLeft = objectX - RADIUS;
    const shapeRight = objectX + RADIUS;
    if (
      !objects[key].triggered &&
      playerX >= shapeLeft &&
      playerX <= shapeRight &&
      objectZ >= carBack &&
      objectZ <= carFront
    ) {
      callback(key);
    }
  }
}
