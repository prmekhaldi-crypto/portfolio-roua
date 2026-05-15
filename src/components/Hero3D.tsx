import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Laptop() {
  return (
    <group position={[0, -0.22, 0]}> 
      <RoundedBox args={[2.4, 0.18, 1.7]} radius={0.12} smoothness={4} position={[0, -0.08, 0]}> 
        <meshStandardMaterial color="#0e3a96" metalness={0.7} roughness={0.18} />
      </RoundedBox>

      <RoundedBox args={[2.1, 1.35, 0.12]} radius={0.09} smoothness={4} position={[0, 0.6, -0.7]}> 
        <meshStandardMaterial color="#2d5fbe" metalness={0.85} roughness={0.15} />
      </RoundedBox>

      <mesh position={[0, 0.6, -0.62]}> 
        <planeGeometry args={[2.02, 1.2]} />
        <meshStandardMaterial color="#0f3472" emissive="#0b2b67" emissiveIntensity={0.5} roughness={0.22} />
      </mesh>

      <group position={[0, 0.62, -0.62]}> 
        <mesh position={[0, 0, 0.03]}> 
          <planeGeometry args={[1.4, 0.85]} />
          <meshStandardMaterial color="#123e8f" emissive="#0c3373" emissiveIntensity={0.3} roughness={0.18} />
        </mesh>

        <Text position={[0, 0, 0.055]} fontSize={0.18} color="#ffffff" anchorX="center" anchorY="middle" letterSpacing={0.05}>
          Portfolio
        </Text>
      </group>
    </group>
  );
}

function Scene() {
  const root = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;
    root.current.rotation.y = Math.sin(t * 0.05) * 0.07;
  });

  return (
    <group ref={root} position={[0, -0.15, 0]}> 
      <Laptop />
    </group>
  );
}

export function Hero3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.9, 5], fov: 45 }} className="!absolute inset-0">
      <color attach="background" args={["#0b2b5f"]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} color="#d8e6ff" />
      <pointLight position={[-3, -2, -1.5]} intensity={1.1} color="#6c8be8" />
      <pointLight position={[0, 2.5, 3]} intensity={1.0} color="#9bb5ff" />
      <pointLight position={[1.2, 1.8, 1.5]} intensity={0.35} color="#ffffff" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.52, 0]}> 
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial color="#082048" roughness={0.35} metalness={0.18} />
      </mesh>
      <Scene />
    </Canvas>
  );
}
