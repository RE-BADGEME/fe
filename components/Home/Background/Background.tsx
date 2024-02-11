'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { Grid, Sky } from '@react-three/drei';

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useThree(() => {
    if (meshRef.current) {
      meshRef.current.position.x = -2;
      meshRef.current.rotation.x = Math.PI / 30;
      meshRef.current.rotation.y = Math.PI / 1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshLambertMaterial color="pink" />
    </mesh>
  );
};

const GridBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useThree(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 30;
      meshRef.current.rotation.y = Math.PI / 6;
    }
  });

  return (
    <group>
      <Grid
        ref={meshRef}
        sectionSize={1}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={'grey'}
        sectionColor={'purple'}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
    </group>
  );
};

const Background = () => {
  return (
    <Canvas shadows>
      <fogExp2 attach="fog" args={['#FFFFFF', 0.005]} />
      <perspectiveCamera filmGauge={3} fov={10} position={[0, 0, 0]}>
        <Box />
        <GridBackground />
        <spotLight position={[-5, 5, 12]} intensity={100} />
        <Sky
          distance={450000}
          sunPosition={[0, 0, 0]}
          inclination={0}
          azimuth={0.25}
        />
      </perspectiveCamera>
    </Canvas>
  );
};

export default Background;
