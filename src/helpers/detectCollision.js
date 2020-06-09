// src/hooks/useCollisionDetection.js

import settings from "../settings";

const { WIDTH, LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default function detectCollision(
  objectPosition,
  playerPosition,
  callback
) {
  const [x, y, z] = playerPosition;
  const carLeft = x - WIDTH / 2;
  const carRight = x + WIDTH / 2;

  if (objectPosition.x > carLeft && objectPosition.x < carRight) {
    callback();
  }
}
