// src/hooks/useMovement.js

/**
 * Return a function to move an object a provided distance.
 * @param {Object} mesh - Three.js object mesh
 * @param {String} axis - The axis on which to move the object (x, y, or z)
 */
export default function useMovement(mesh, axis) {
  const setMovement = (distance) => {
    mesh.current.position[axis] += distance;
  };
  return setMovement;
}
