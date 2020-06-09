// src/hooks/useCollisionDetection.js

import settings from "../settings";

const { WIDTH, LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default function detectCollision(playerPosition, objectPositions) {
  // const { x: playerX, y: playerY, z: playerZ } = playerPosition;
  // const carLeft = playerX - WIDTH / 2;
  // const carRight = playerX + WIDTH / 2;
  // const carFront = playerZ - LENGTH / 2;
  // const carBack = playerZ + LENGTH / 2;

  // return Object.values(objectPositions).some((objectPosition) => {
  //   const { x: objectX, y: objectY, z: objectZ } = objectPosition;
  //   const objectLeft = objectX - RADIUS / 2;
  //   const objectRight = objectX + RADIUS / 2;

  //   if (
  //     carFront >= objectZ &&
  //     carBack <= objectZ &&
  //     carLeft >= objectLeft &&
  //     carRight <= objectRight
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  return false;
}
