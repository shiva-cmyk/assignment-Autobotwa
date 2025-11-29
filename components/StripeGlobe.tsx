

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

export default function StripeGlobe() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] md:h-[1000px] md:w-[1000px] opacity-100">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <group>
            <GlobeWireframe />
            <WorldMapParticles />
            <AnimatedArcs count={8} />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}

// Wireframe globe structure
function GlobeWireframe() {
  const globeRef = useRef(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
      globeRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial
        wireframe
        color="#38bdf8"
        transparent
        opacity={0.18}
      />
      <mesh>
        <sphereGeometry args={[1.55, 64, 64]} />
        <meshBasicMaterial color="#0c4a6e" transparent opacity={0.12} />
      </mesh>
    </mesh>
  );
}

// World map made of particles
function WorldMapParticles() {
  const pointsRef = useRef(null);
  const radius = 1.5;
  
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    
    // North America
    addContinent(positions, colors, -100, 15, 50, 60, 1200);
    // South America
    addContinent(positions, colors, -70, -30, 35, 50, 700);
    // Europe
    addContinent(positions, colors, 0, 40, 40, 30, 600);
    // Africa
    addContinent(positions, colors, 15, -15, 50, 60, 1000);
    // Asia
    addContinent(positions, colors, 70, 30, 100, 50, 1800);
    // Australia
    addContinent(positions, colors, 130, -25, 30, 20, 400);
    
    // Sparse ocean dots
    for (let i = 0; i < 600; i++) {
      const lat = (Math.random() - 0.5) * 160;
      const lon = (Math.random() - 0.5) * 360;
      const pos = latLonToVector3(lat, lon, radius);
      positions.push(pos.x, pos.y, pos.z);
      colors.push(0.15, 0.35, 0.55);
    }
    
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors)
    };
  }, []);

  function addContinent(positions, colors, lonStart, latStart, lonSpan, latSpan, count) {
    for (let i = 0; i < count; i++) {
      const clusterLon = lonStart + Math.pow(Math.random(), 1.3) * lonSpan;
      const clusterLat = latStart + Math.pow(Math.random(), 1.3) * latSpan;
      
      const pos = latLonToVector3(clusterLat, clusterLon, radius);
      positions.push(pos.x, pos.y, pos.z);
      colors.push(0.22, 0.75, 0.95);
    }
  }

  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Animated arcs with traveling points
function AnimatedArcs({ count = 8 }) {
  const group = useRef(null);
  const radius = 1.52;
  
  const arcs = useMemo(() => {
    const temp = [];
    
    // Define meaningful city-to-city connections
    const connections = [
      { from: [40.7, -74], to: [51.5, -0.1] },      // NYC to London
      { from: [51.5, -0.1], to: [1.3, 103.8] },     // London to Singapore
      { from: [1.3, 103.8], to: [35.6, 139.6] },    // Singapore to Tokyo
      { from: [35.6, 139.6], to: [-33.8, 151.2] },  // Tokyo to Sydney
      { from: [-33.8, 151.2], to: [37.7, -122.4] }, // Sydney to SF
      { from: [37.7, -122.4], to: [40.7, -74] },    // SF to NYC
      { from: [28.6, 77.2], to: [25.2, 55.2] },     // Delhi to Dubai
      { from: [-23.5, -46.6], to: [-34.6, -58.4] }, // Sao Paulo to Buenos Aires
    ];
    
    const colors = ['#ec4899', '#06b6d4', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#f97316'];
    
    connections.forEach((conn, i) => {
      const start = latLonToVector3(conn.from[0], conn.from[1], radius);
      const end = latLonToVector3(conn.to[0], conn.to[1], radius);
      
      const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
      mid.normalize().multiplyScalar(radius * 1.25);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      
      temp.push({
        points,
        curve,
        speed: 0.3 + Math.random() * 0.3,
        delay: i * 0.5,
        color: colors[i]
      });
    });
    
    return temp;
  }, [count]);

  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0015;
      group.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={group}>
      {arcs.map((arc, i) => (
        <group key={i}>
          {/* Static arc line */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={arc.points.length}
                array={new Float32Array(arc.points.flatMap(p => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={arc.color}
              transparent
              opacity={0.3}
            />
          </line>
          
          {/* Animated traveling point */}
          <TravelingPoint curve={arc.curve} speed={arc.speed} delay={arc.delay} color={arc.color} />
        </group>
      ))}
    </group>
  );
}

// Single traveling point along a curve
function TravelingPoint({ curve, speed, delay, color }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = (state.clock.elapsedTime * speed - delay) % 4;
    const normalizedProgress = Math.max(0, Math.min(1, t / 4));
    
    if (normalizedProgress > 0 && normalizedProgress < 1) {
      const point = curve.getPoint(normalizedProgress);
      meshRef.current.position.copy(point);
      
      const opacity = Math.sin(normalizedProgress * Math.PI) * 0.9;
      meshRef.current.material.opacity = opacity;
      
      const scale = 1 + Math.sin(normalizedProgress * Math.PI) * 0.3;
      meshRef.current.scale.setScalar(scale);
    } else {
      meshRef.current.material.opacity = 0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshBasicMaterial color={color} transparent />
      <mesh scale={2}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </mesh>
  );
}

