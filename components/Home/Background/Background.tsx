'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0, 0, 0]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const WaveGeometry = () => {
  const waveRef = useRef<THREE.Mesh>(null);
  const clock = new THREE.Clock();
  const waveHeight = 0.1;
  const textureWater = new THREE.TextureLoader().load('/image/t3.png');

  // Default render
  useThree(() => {
    if (!waveRef.current) return;
    waveRef.current.rotation.x = -Math.PI / 2;

    const positions = waveRef.current.geometry.attributes.position;

    for (let i = 0; i < positions.count; i += 1) {
      const z = positions.getZ(i) + (Math.random() - 0.5) * waveHeight;
      positions.setZ(i, z);
    }
  });

  // Update render
  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    if (!waveRef.current) return;

    const positions = waveRef.current.geometry.attributes.position;

    for (let i = 0; i < positions.array.length; i += 3) {
      positions.array[i + 2] +=
        Math.sin(elapsedTime * 3 + i ** 3) * Math.random() * -0.09;
    }

    positions.needsUpdate = true;
  });

  return (
    <mesh ref={waveRef} position={[0, 0, 0]}>
      <planeGeometry args={[900, 500, 30, 30]} />
      <meshStandardMaterial map={textureWater} />
    </mesh>
  );
};

const Background = () => {
  return (
    <Canvas shadows>
      <fogExp2 attach="fog" args={['#FFFFFF', 0.005]} />
      <perspectiveCamera
        filmGauge={3}
        fov={50}
        position={[0, -15, 20]}
        rotation={[0, 0, 0]}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[15, 30, 85]} intensity={3} />
        <pointLight position={[0, 15, -85]} intensity={500} />
        <ambientLight intensity={0.1} />
        <Box />
        <WaveGeometry />
      </perspectiveCamera>
    </Canvas>
  );
};

export default Background;
