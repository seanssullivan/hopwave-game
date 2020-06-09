import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { PlainAnimator } from "three-plain-animator/lib/plain-animator";
import { a } from "react-spring/three";

export default function Sprite({ ...props }) {
  const group = useRef();
  const texturePath = "/photos/backgroundSprite.png";
  const spriteTexture = new THREE.TextureLoader().load(texturePath);
  const animator = new PlainAnimator(spriteTexture, 4, 4, 10, 15);
  console.log(spriteTexture);

  // const texture = useLoader(THREE.AnimationLoader, "/photos/sunvideo.mp4");
  // let videoT = useLoader(THREE.AnimationLoader, texture);

  // const [mixer] = useState(() => new THREE.AnimationMixer());
  // useFrame((state, delta) => mixer.update(delta));
  // useEffect(() => void mixer.clipAction(texture[0], group.current).play(), []);

  // let annie = new TextureAnimator( texture, 10, 1, 10, 75 );
  return (
    <a.sprite ref={group} position={[-100, 25, 0]}>
      <planeBufferGeometry
        attach={"geometry"}
        args={[512, 512]}
      ></planeBufferGeometry>
      <spriteMaterial attach="material" map={animator}></spriteMaterial>
    </a.sprite>
  );
}
