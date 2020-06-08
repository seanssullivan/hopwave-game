// src/helpers/detectCollision.js

import settings from "../settings";

const { WIDTH, LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default function detectCollision(mesh, playerPosition) {
  const [playerX, playerY, playerZ] = playerPosition;
  const { shapeX, shapeY, shapeZ } = mesh.current.position;

  const shapeLeft = shapeX - RADIUS / 2;
  const shapeRight = shapeX + RADIUS / 2;

  const carLeft = playerX - WIDTH / 2;
  const carRight = playerX + WIDTH / 2;

  if (
    (shapeLeft >= carLeft && shapeLeft <= carRight) ||
    (shapeRight >= carLeft && shapeRight <= carRight)
  ) {
    return true;
  } else {
    return false;
  }
}
