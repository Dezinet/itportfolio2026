"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

const heroParticlesCount = 4000;
const heroParticlesPositions = new Float32Array(heroParticlesCount * 3);
for (let i = 0; i < heroParticlesCount; i++) {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  const r = 4 + Math.random() * 4;
  heroParticlesPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  heroParticlesPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  heroParticlesPositions[i * 3 + 2] = r * Math.cos(phi);
}

function ParticleBackground() {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => heroParticlesPositions, []);

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
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() / 3) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0.5, 0]}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        emissive="#00d4ff"
        emissiveIntensity={0.8}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <ParticleBackground />
        <FloatingCore />
      </Canvas>
    </div>
  );
}

// Fixed missing PointLight from standard JSX
interface PointLightProps {
  position: [number, number, number];
  intensity: number;
  color: string;
}

function PointLight(props: PointLightProps) {
  return <pointLight {...props} />;
}
