'use client';

import { motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeframe: string;
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

export default function ServiceCard({
  title,
  description,
  features,
  price,
  timeframe,
  buttonText,
  buttonLink,
  highlighted = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`relative ${
        highlighted ? 'transform scale-105 z-10' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background glow effect for highlighted card */}
      {highlighted && (
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/30 blur-xl opacity-70 -z-10"></div>
      )}
      
      <motion.div
        className={`glass-effect rounded-2xl overflow-hidden relative ${
          highlighted ? 'border-2 border-accent/40' : 'border border-foreground-dark/10'
        } shadow-xl transition-all duration-300`}
        whileHover={{ 
          y: -8, 
          boxShadow: highlighted 
            ? '0 25px 50px -12px rgba(77, 192, 255, 0.35)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className={`absolute ${highlighted ? 'bg-accent/10' : 'bg-primary/5'} rounded-full blur-3xl w-2/3 h-2/3 -z-10`}
            style={{
              top: '10%',
              right: '10%',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
        
        {highlighted && (
          <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-accent via-accent/90 to-primary/90 text-white text-center py-1.5 text-sm font-medium tracking-wider shadow-sm">
            Recommandé
          </div>
        )}
        
        <div className={`p-7 ${highlighted ? 'pt-9' : ''}`}>
          <div className="mb-6">
            <h3 className={`text-2xl font-bold mb-3 ${highlighted ? 'blue-gradient-text' : 'text-white'}`}>{title}</h3>
            <p className="text-foreground-dark/70 text-sm mb-5 leading-relaxed">{description}</p>
            <div className="flex items-end gap-2 mb-2">
              <span className={`text-3xl font-bold ${highlighted ? 'text-accent' : 'text-white'}`}>{price}</span>
              {price !== 'Sur devis' && <span className="text-foreground-dark/70 text-sm pb-1">/ projet</span>}
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${highlighted ? 'bg-accent/30' : 'bg-primary/30'} flex-shrink-0`}></div>
              <p className="text-foreground-dark/70 text-sm">Délai: {timeframe}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 blue-gradient-text">
              Fonctionnalités
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <motion.div 
                    className={`mr-2 h-5 w-5 ${highlighted ? 'text-accent' : 'text-primary'} mt-0.5 flex-shrink-0`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-foreground-dark/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            className={`overflow-hidden rounded-lg ${
              highlighted ? 'bg-accent/10' : 'bg-primary/10'
            } relative`}
            whileHover={{ 
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Link 
              href={buttonLink}
              className={`block text-center py-3 px-5 font-medium relative overflow-hidden group ${
                highlighted 
                  ? 'text-white bg-gradient-to-r from-accent to-primary-light' 
                  : 'text-white hover:bg-gradient-to-r hover:from-accent hover:to-primary-light'
              } transition-all duration-300`}
            >
              <span className="flex items-center justify-center gap-1">
                {buttonText}
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -translate-x-full group-hover:translate-x-full group-hover:opacity-20 duration-1000 ease-in-out"
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}