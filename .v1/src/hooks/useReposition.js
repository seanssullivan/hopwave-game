// src/hooks/useReposition.js

/**
 * Return a function that repositions an object at new x, y and z coordinates.
 * @param {Object} mesh - Three.js object mesh
 */
export default function useReposition(mesh) {
  const reposition = ({ x = 0, y = 0, z = 0 }) => {
    mesh.current.position.x = x;
    mesh.current.position.y = y;
    mesh.current.position.z = z;
  };
  return reposition;
}
