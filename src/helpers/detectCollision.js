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
  const carLeft = playerX - WIDTH / 2;
  const carRight = playerX + WIDTH / 2;
  const carFront = playerZ + LENGTH / 2;
  const carBack = playerZ - LENGTH / 2;

  const shapeCentre = objectPosition.z;
  const shapeLeft = objectPosition.x - RADIUS;
  const shapeRight = objectPosition.x + RADIUS;

  if (
    shapeCentre <= playerZ + 10 &&
    shapeCentre >= playerZ - 10 &&
    shapeLeft <= carLeft &&
    shapeRight >= carRight
  ) {
    callback();
  }
}
