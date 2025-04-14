'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useRef, useState } from 'react';
import TechAnimation from './TechAnimation'; // Importer le nouveau composant

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen pt-20 pb-16 md:py-0 md:flex md:items-center overflow-hidden relative"
      style={{ y, opacity }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-dark-blue z-0" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <motion.div className="relative">
            <motion.div
              className="absolute -left-10 -top-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            />

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="block mb-2 text-foreground-dark relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.span
                  className="absolute -left-2 -top-2 w-16 h-16 border border-accent/30 rounded-full opacity-0"
                  animate={{
                    scale: [0, 1, 1.5, 0],
                    opacity: [0, 0.5, 0, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                Innovation <span className="italic">immédiate</span>
              </motion.span>
              <motion.span
                className="block text-4xl md:text-5xl lg:text-5xl xl:text-7xl blue-gradient-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  textShadow: '0 0 40px rgba(77, 192, 255, 0.4)',
                }}
              >
                pour vos projets ambitieux
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-foreground-dark/90 text-lg md:text-xl mb-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Des templates personnalisés
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="text-accent font-medium"
              >
                sophistiqués
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                et des services de création de MVP pour donner vie à vos idées
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-accent font-medium"
              >
                rapidement
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                et efficacement.
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div
                className="relative gradient-border"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <Link
                  href="/#templates"
                  className="relative z-10 bg-gradient-to-r from-accent to-primary text-white font-medium px-7 py-4 rounded-lg block overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-accent opacity-0"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Voir les Templates
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </motion.svg>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <Link
                  href="/#mvp"
                  className="glass-effect text-accent hover:text-white hover:bg-accent/20 font-medium px-7 py-4 rounded-lg transition-colors border border-accent/30 block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Services MVP
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2 opacity-0"
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    >
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </motion.svg>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center items-center p-8 h-80 md:h-96">
            <TechAnimation />
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.p
          className="text-foreground-dark/60 text-sm mb-2"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          Découvrir
        </motion.p>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.section>
  );
}