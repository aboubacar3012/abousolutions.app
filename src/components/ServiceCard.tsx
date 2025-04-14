'use client';

import { motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

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
  const [, setIsHovered] = useState(false);
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
      className={`glass-effect rounded-2xl overflow-hidden relative ${
        highlighted ? 'border-2 border-accent' : 'border border-foreground-dark/10'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {highlighted && (
        <div className="absolute top-0 inset-x-0 bg-accent text-white text-center py-1 text-sm font-semibold">
          Recommandé
        </div>
      )}
      
      <div className={`p-6 ${highlighted ? 'pt-8' : ''}`}>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground-dark/70 text-sm mb-4">{description}</p>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-bold">{price}</span>
            {price !== 'Sur devis' && <span className="text-foreground-dark/70 text-sm pb-1">/ projet</span>}
          </div>
          <p className="text-foreground-dark/70 text-sm">Délai: {timeframe}</p>
        </div>
        
        <div className="mb-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 blue-gradient-text">
            Fonctionnalités
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <svg
                  className={`mr-2 h-5 w-5 ${highlighted ? 'text-accent' : 'text-primary'} mt-0.5 flex-shrink-0`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-foreground-dark/90">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <motion.div 
          className={`gradient-border rounded-lg overflow-hidden ${
            highlighted ? 'bg-gradient-to-r from-accent to-primary-light' : ''
          }`}
          whileHover={{ 
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
        >
          <Link 
            href={buttonLink}
            className={`block text-center py-2.5 px-4 font-medium ${
              highlighted 
                ? 'text-white' 
                : 'bg-background-dark hover:bg-gradient-to-r hover:from-accent hover:to-primary-light hover:text-white'
            } transition-all duration-300`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}