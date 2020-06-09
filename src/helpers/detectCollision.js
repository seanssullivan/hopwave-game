// src/hooks/useCollisionDetection.js

import settings from "../settings";

const { WIDTH, LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default function detectCollision(
  objectPosition,
  playerPosition,
  callback
) {
  const [playerX, playerY, playerZ] = playerPosition;
  const carFront = playerZ + LENGTH / 2;
  const carBack = playerZ - LENGTH / 2;

  const shapeZ = objectPosition.z;
  const shapeLeft = objectPosition.x - RADIUS;
  const shapeRight = objectPosition.x + RADIUS;

  if (
    playerX >= shapeLeft &&
    playerX <= shapeRight &&
    shapeZ >= carBack &&
    shapeZ <= carFront
  ) {
    console.log("Ding!");
    callback();
  }
}
