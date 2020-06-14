// src/hooks/useCollisionDetection.js

import settings from "../settings";

const { LENGTH } = settings.CAR;
const { RADIUS } = settings.SHAPE;

export default async function detectCollisions(player, objects, callback) {
  return Promise.resolve(
    Object.entries(objects)
      .filter((obj) => !obj[1].triggered)
      .map(async ([key, object]) => {
        return await detectCollision(player, object.position).then((all) => {
          // Determine if collision happened on all axis
          if (all.every((axis) => !!axis)) {
            callback(key);
          }
        });
      })
  );
}

const detectCollision = async function (playerPosition, objectPosition) {
  const [playerX, playerY, playerZ] = playerPosition;
  const [objectX, objectY, objectZ] = objectPosition;
  return await Promise.all([
    detectCollisionOnXAxis(playerX, objectX),
    detectCollisionOnYAxis(playerY, objectY),
    detectCollisionOnZAxis(playerZ, objectZ),
  ]);
};

const detectCollisionOnXAxis = function (playerX, objectX) {
  const shapeLeft = objectX - RADIUS;
  const shapeRight = objectX + RADIUS;
  return Promise.resolve(playerX >= shapeLeft && playerX <= shapeRight);
};

const detectCollisionOnYAxis = function (playerY, objectY) {
  const shapeBottom = objectY - RADIUS;
  const shapeTop = objectY + RADIUS;
  return Promise.resolve(playerY >= shapeBottom && playerY <= shapeTop);
};

const detectCollisionOnZAxis = function (playerZ, objectZ) {
  const carFront = playerZ + LENGTH / 2;
  const carBack = playerZ - LENGTH / 2;
  return Promise.resolve(objectZ >= carBack && objectZ <= carFront);
};
