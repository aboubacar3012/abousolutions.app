'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-3 transition-all"
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          height: scrolled ? "70px" : "80px",
        }}
        style={{
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.75)' 
            : 'rgba(15, 23, 42, 0.65)',
          boxShadow: scrolled 
            ? '0 10px 40px -10px rgba(0, 0, 0, 0.3), 0 0 20px 0 rgba(77, 192, 255, 0.1)' 
            : '0 8px 32px -8px rgba(0, 0, 0, 0.2)',
          borderBottom: scrolled 
            ? '1px solid rgba(255, 255, 255, 0.08)' 
            : '1px solid rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="container mx-auto px-5 flex justify-between items-center h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <motion.div 
              className={`${scrolled ? 'text-3xl' : 'text-4xl'} font-extrabold tracking-tight transition-all duration-300`}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent">
                  Abou
                </span>
                <span className="bg-gradient-to-r from-blue-100 to-accent bg-clip-text text-transparent">
                  Solutions
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ 
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    mixBlendMode: 'overlay'
                  }}
                  animate={{
                    clipPath: [
                      'polygon(0 0, 0 0, 0 100%, 0 100%)',
                      'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut",
                    repeatDelay: 1.5
                  }}
                />
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              className={`
                relative group overflow-hidden inline-flex items-center
                ${scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'}
                rounded-full bg-gradient-to-r from-accent/90 to-primary/90
                text-white font-medium shadow-lg transition-all duration-300
                border border-white/10 backdrop-blur-xl
                focus:outline-none focus:ring-2 focus:ring-accent/50
              `}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px 2px rgba(77, 192, 255, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="z-10 flex items-center gap-2">
                <span>Contact</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Animated background effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-500/80"
                animate={{ 
                  x: ['100%', '-100%'],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 7,
                  ease: "linear",
                }}
                style={{ filter: 'blur(8px)' }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}