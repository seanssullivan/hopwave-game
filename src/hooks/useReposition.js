// src/hooks/useReposition.js

export default function useReposition(mesh) {
  const reposition = ({ x = 0, y = 0, z = 0 }) => {
    mesh.current.position.x = x;
    mesh.current.position.y = y;
    mesh.current.position.z = z;
  };
  return reposition;
}
