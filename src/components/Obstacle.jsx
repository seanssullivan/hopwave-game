import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import useMovement from "../hooks/useMovement"
import useReposition from "../hooks/useReposition"
import { useFrame, use } from "react-three-fiber";

import RandomObstacle from './RandomObstacle'




export default function Box(props) {
  const [active, setActive] = useState(false)
  const mesh = useRef()
  const move = useMovement(mesh, "z");
  const reposition = useReposition(mesh);
  

  const deleteThing = function() {
    // Scene.remove(mesh);
    mesh.current.geometry.dispose();
    mesh.current.material.dispose();
    mesh.current = undefined; //clear any reference for it to be able to garbage collected
}
 
  
    return (
    <mesh
    {...props}
    ref={mesh}
    scale={[1.5, 1.5, 1.5]}
    position={[10,20,100]}
    onClick={() => (console.log(mesh.current.parent))}
  
    >
    <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
    <meshStandardMaterial attach="material" color={  'grey' } />
  </mesh>
    )
  


}

