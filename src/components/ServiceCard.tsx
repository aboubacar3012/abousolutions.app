import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

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
  highlighted = false
}: ServiceCardProps) {
  const [, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Crée un effet de lumière qui suit le curseur
  const spotlightSize = highlighted ? 300 : 200;
  const spotlightOpacity = highlighted ? 0.15 : 0.05;
  const spotlightBackground = useMotionTemplate`radial-gradient(
    ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
    rgba(77, 192, 255, ${spotlightOpacity}),
    transparent 80%
  )`;

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden transition-all duration-300 p-6 relative ${
        highlighted 
          ? 'glass-effect border-2 border-accent neon-glow-blue' 
          : 'glass-effect'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -15, 
        transition: { duration: 0.3 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de lumière qui suit le curseur */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300"
        style={{ background: spotlightBackground }}
      />

      {/* Arrière-plan avec animation */}
      {highlighted && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Effet de fluide animé */}
          <motion.div
            className="absolute -inset-[100%] z-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(45deg, rgba(77, 192, 255, 0.05) 0%, rgba(15, 86, 179, 0.1) 25%, rgba(77, 192, 255, 0) 50%, rgba(15, 86, 179, 0.1) 75%, rgba(77, 192, 255, 0.05) 100%)',
              backgroundSize: '400% 400%',
            }}
          />
          
          {/* Particules animées */}
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-20 h-20 rounded-full bg-accent/5 blur-xl"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                scale: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                x: [
                  Math.random() * 80 - 40 + '%',
                  Math.random() * 80 - 40 + '%',
                  Math.random() * 80 - 40 + '%',
                ],
                y: [
                  Math.random() * 80 - 40 + '%', 
                  Math.random() * 80 - 40 + '%',
                  Math.random() * 80 - 40 + '%',
                ],
              }}
              transition={{
                duration: 12 + index * 5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <motion.div 
        className="mb-4 relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
          style={{
            background: highlighted ? 'linear-gradient(135deg, rgba(77, 192, 255, 0.2), rgba(15, 86, 179, 0.2))' : 'rgba(15, 86, 179, 0.1)',
            boxShadow: highlighted ? '0 0 20px rgba(77, 192, 255, 0.3)' : 'none'
          }}
          animate={highlighted ? {
            boxShadow: ['0 0 10px rgba(77, 192, 255, 0.2)', '0 0 20px rgba(77, 192, 255, 0.4)', '0 0 10px rgba(77, 192, 255, 0.2)'],
          } : {}}
          transition={highlighted ? { 
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
          } : {}}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-accent"
            animate={highlighted ? { 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            } : {}}
            transition={highlighted ? { 
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror',
            } : {}}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </motion.svg>
        </motion.div>
        
        <motion.h3 
          className={`text-2xl font-bold mb-2 ${highlighted ? 'blue-gradient-text' : 'text-foreground-dark'}`}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-foreground-dark/80 text-sm"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>

      <motion.div 
        className="mb-6 relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-baseline mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.6 
          }}
          viewport={{ once: true }}
        >
          <motion.span 
            className={`text-3xl font-bold mr-2 ${highlighted ? 'bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-primary-light' : 'text-accent'}`}
            style={{
              textShadow: highlighted ? '0 0 20px rgba(77, 192, 255, 0.5)' : 'none',
            }}
            whileHover={{ 
              scale: 1.05, 
              textShadow: '0 0 20px rgba(77, 192, 255, 0.8)',
              transition: { duration: 0.2 } 
            }}
          >
            {price}
          </motion.span>
          <span className="text-foreground-dark/60 text-sm">/ {timeframe}</span>
        </motion.div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className={`h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0 relative ${highlighted ? 'neon-glow-blue' : ''}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  delay: 0.8 + index * 0.1 
                }}
                viewport={{ once: true }}
              >
                {/* Cercle pulsant derrière l'icône */}
                {highlighted && (
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-accent/10"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                )}
                <svg 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  className="relative z-10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="text-foreground-dark/90 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="relative z-20"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        viewport={{ once: true }}
      >
        {highlighted ? (
          <div className="gradient-border overflow-hidden rounded-lg">
            <Link 
              href={buttonLink}
              className="block w-full py-3 px-4 rounded-lg text-center font-medium text-sm bg-gradient-to-r from-accent to-primary-light text-white relative overflow-hidden group"
            >
              {/* Effet de brillance au survol */}
              <motion.div 
                className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
              />
              
              {/* Contenu du bouton */}
              <span className="relative z-10 flex items-center justify-center">
                {buttonText}
                <motion.svg 
                  className="ml-2" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    x: [0, 5, 0],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }}
                >
                  <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967ZM11 7H4V9H11V7Z" 
                        fill="white"/>
                </motion.svg>
              </span>
            </Link>
          </div>
        ) : (
          <Link 
            href={buttonLink}
            className="block w-full py-3 px-4 rounded-lg text-center font-medium text-sm bg-primary hover:bg-primary-dark text-white transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              {buttonText}
              <motion.svg 
                className="ml-2 opacity-0 group-hover:opacity-100" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967ZM11 7H4V9H11V7Z" 
                      fill="white"/>
              </motion.svg>
            </span>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}