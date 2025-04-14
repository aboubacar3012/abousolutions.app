"use client";

import { useEffect, useRef, useState } from "react";

type Bubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
  rotation: number; // new property for rotation effect
};

export default function ParticlesBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  // Génère des bulles avec des propriétés aléatoires
  const generateBubbles = () => {
    const width = dimensions.width;
    const height = dimensions.height;
    const count = Math.min(
      20,
      Math.max(10, Math.floor((width * height) / 50000))
    );

    // Palette de couleurs professionnelle adaptée à un site dark et moderne
    const colors = [
      "rgba(56, 189, 248, 0.3)",
      "rgba(59, 130, 246, 0.3)",
      "rgba(99, 102, 241, 0.3)",
      "rgba(139, 92, 246, 0.3)",
      "rgba(236, 72, 153, 0.3)",
      "rgba(6, 182, 212, 0.3)",
    ];

    const newBubbles: Bubble[] = [];

    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: 50 + Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360, // initial random rotation
      });
    }

    setBubbles(newBubbles);
  };

  // Gère le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Génération des bulles lors du chargement ou redimensionnement
  useEffect(() => {
    generateBubbles();
  }, []);

  // Animation des bulles flottantes avec rotation
  useEffect(() => {
    const animateBubbles = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let y = bubble.y - bubble.speed;
          let x = bubble.x + Math.sin(Date.now() / 3000 + bubble.id) * 0.5;

          if (y < -bubble.size) {
            y = dimensions.height + bubble.size;
            x = Math.random() * dimensions.width;
          }
          if (x < -bubble.size) x = dimensions.width + bubble.size;
          if (x > dimensions.width + bubble.size) x = -bubble.size;

          return { ...bubble, x, y };
        })
      );
      animationRef.current = requestAnimationFrame(animateBubbles);
    };

    if (bubbles.length > 0) {
      animationRef.current = requestAnimationFrame(animateBubbles);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [bubbles.length, dimensions.height, dimensions.width]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-gradient-to-br from-black to-gray-900 overflow-hidden" // modified gradient for dark look
    >
      {/* Overlay pour ajouter une teinte dark */}
      <div className="absolute inset-0 opacity-40 bg-black"></div>

      {/* Les bulles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            willChange: "transform",
            transform: `translateZ(0) rotate(${bubble.rotation}deg)`, // include rotation
          }}
        />
      ))}

      {/* Overlay de teinte pour assurer la visibilité du contenu */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
