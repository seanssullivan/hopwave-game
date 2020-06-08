// src/hooks/useMovement.js

/**
 * Return a function to move an object a provided distance.
 * @param {Object} mesh - Three.js object mesh
 * @param {String} axis - The axis on which to move the object (x, y, or z)
 * @param {Function} callback - Optional callback function
 */
export default function useMovement(mesh, axis, callback) {
  const setMovement = (distance) => {
    mesh.current.position[axis] += distance;
    if (callback) {
      callback(mesh);
    }
  };
  return setMovement;
}
