'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TechAnimation from './TechAnimation';
import { ChevronDown } from 'lucide-react';

// TypeWriter effect component
const TypeWriter = ({ text, delay = 50, className = "", onComplete = () => {} }: {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);
  
  return <span className={className}>{displayText}</span>;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [, setShowCustomCursor] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Check device capabilities and preferences
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkReducedMotion = () => {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(query.matches);
      
      // Listen for changes
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      query.addEventListener('change', handler);
      return () => query.removeEventListener('change', handler);
    };
    
    checkMobile();
    const motionCleanup = checkReducedMotion();
    
    // Check scroll position
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 50); // Activer l'effet après 50px de scroll
    };
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', checkScroll);
    
    // Vérifier au chargement initial
    checkScroll();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', checkScroll);
      if (typeof motionCleanup === 'function') motionCleanup();
    };
  }, []);

  // Mouse parallax effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobile || prefersReducedMotion || !hasScrolled) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    };
    
    setMousePosition(newPosition);
    setShowCustomCursor(true);
  };
  
  const handleMouseLeave = () => {
    setShowCustomCursor(false);
  };

  // Animation variants with reduced motion support
  const getAnimationConfig = () => {
    return prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" };
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.2 * i,
        ...getAnimationConfig()
      }
    })
  };

  const floatingShapeVariants = {
    animate: prefersReducedMotion 
      ? { y: 0, rotate: 0 }
      : {
          y: [0, -15, 0],
          rotate: [0, 3, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
  };

  return (
      <motion.section
        // ref={containerRef}
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial="hidden"
        animate="visible"
        aria-labelledby="hero-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-dark-blue to-background-dark z-0" />

        {/* Main Content */}
        <div className="container relative z-10 px-4 sm:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content - Takes 7 columns on desktop */}
          <motion.div 
            className="md:col-span-7 md:order-1 order-2 mt-10 md:mt-0"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.2,
                  delayChildren: prefersReducedMotion ? 0 : 0.3,
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
          
              
              <motion.div 
                className="overflow-hidden mb-3"
                variants={titleVariants}
                custom={1}
              >
                <motion.span 
                  className="inline-block text-lg md:text-xl font-medium px-4 py-2 bg-accent/10 rounded-full text-accent mb-4"
                  initial={{ x: prefersReducedMotion ? 0 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.2, ...getAnimationConfig() }}
                >
                  Solutions Digitales • {new Date().getFullYear()}
                </motion.span>
              </motion.div>

              <motion.h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
                variants={titleVariants}
                custom={2}
              >
                <span className="block text-foreground-dark mb-2">
                  <span className="relative">
                    <span className="relative z-10">Transformez</span>
                    {!prefersReducedMotion && (
                      <motion.span 
                        className="absolute bottom-1 left-0 h-3 bg-accent/30 w-full -z-10"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 0.8 }}
                      />
                    )}
                  </span>
                  {" "}vos idées
                </span>
                
                <span 
                  className="block blue-gradient-text mt-2"
                  style={{ textShadow: '0 0 40px rgba(77, 192, 255, 0.4)' }}
                >
                  {typingDone ? (
                    "en réalités digitales"
                  ) : (
                    <TypeWriter 
                      text="en réalités digitales" 
                      delay={60} 
                      onComplete={() => setTypingDone(true)} 
                    />
                  )}
                </span>
              </motion.h1>

              <AnimatePresence>
                {typingDone && (
                  <motion.p
                    className="text-foreground-dark/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed"
                    variants={titleVariants}
                    custom={3}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Solutions numériques <span className="text-accent font-medium">innovantes</span> et 
                    templates <span className="text-accent font-medium">premium</span> pour donner vie 
                    à vos projets <span className="text-accent font-medium">rapidement</span> et efficacement.
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {typingDone && (
                  <motion.div
                    className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 md:gap-6 items-center"
                    variants={titleVariants}
                    custom={4}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="relative gradient-border w-full sm:w-auto"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                      <Link
                        href="/#contact"
                        className="relative z-10 bg-gradient-to-r from-accent to-primary text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg block overflow-hidden w-full text-center sm:text-left sm:w-auto"
                        aria-label="Prendre rendez-vous avec nous"
                      >
                        <motion.span
                          className="absolute inset-0 bg-white opacity-0"
                          whileHover={prefersReducedMotion ? {} : { opacity: 0.2 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          Prendre rendez-vous
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div
                      className="w-full sm:w-auto"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                      <Link
                        href="/#about"
                        className="glass-effect text-foreground-dark hover:text-accent border border-accent/20 px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors block w-full text-center sm:text-left sm:w-auto"
                        aria-label="En savoir plus sur moi"
                      >
                        <span className="flex items-center justify-center">
                          Qui suis-je ?
                        </span>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tech Animation - Takes 5 columns on desktop */}
          <motion.div 
            className="md:col-span-5 md:order-2 order-1 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5, ...getAnimationConfig() }}
          >
            <div className="w-full max-w-md relative">
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
              )}
              
              <motion.div 
                className="relative z-10"
                variants={floatingShapeVariants}
                animate="animate"
                style={{ 
                  transform: prefersReducedMotion ? 'none' : `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
                  transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                <TechAnimation />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: typingDone ? 1 : 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 2, ...getAnimationConfig() }}
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              aria-label="Scroll down"
            >
              <ChevronDown className="text-accent w-6 h-6" />
            </motion.div>
            
          </motion.div>
        )}
      </motion.section>
  );
}