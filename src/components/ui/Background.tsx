"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

const particlesCount = 4000;
const particlesPositions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount; i++) {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  const r = 4 + Math.random() * 4;
  particlesPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  particlesPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  particlesPositions[i * 3 + 2] = r * Math.cos(phi);
}

function ParticleBackground() {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => particlesPositions, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8a2be2"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

interface PointLightProps {
  position: [number, number, number];
  intensity: number;
  color: string;
}

function PointLight(props: PointLightProps) {
  return <pointLight {...props} />;
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <ParticleBackground />
      </Canvas>
    </div>
  );
}
