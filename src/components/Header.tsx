'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Templates', href: '/#templates' },
    { title: 'Services MVP', href: '/#mvp' },
    { title: 'Contact', href: '/#contact' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: 'rgba(3, 11, 25, 0.75)',
        backdropFilter: `blur(${headerBlur}px)`,
        WebkitBackdropFilter: `blur(${headerBlur}px)`,
        opacity: headerOpacity,
        boxShadow: scrolled ? '0 10px 30px -10px rgba(3, 11, 25, 0.5)' : 'none',
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="relative overflow-hidden rounded-full neon-glow-blue"
              animate={{
                boxShadow: [
                  '0 0 5px 2px rgba(77, 192, 255, 0.3)',
                  '0 0 15px 2px rgba(77, 192, 255, 0.7)',
                  '0 0 5px 2px rgba(77, 192, 255, 0.3)'
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <motion.span 
                  className="text-white text-lg font-bold"
                  animate={{ 
                    textShadow: [
                      '0 0 8px rgba(255, 255, 255, 0.5)',
                      '0 0 16px rgba(255, 255, 255, 0.8)',
                      '0 0 8px rgba(255, 255, 255, 0.5)'
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  A
                </motion.span>
              </div>
            </motion.div>
            <motion.span 
              className="text-2xl font-bold blue-gradient-text"
              animate={{ 
                textShadow: [
                  '0 0 4px rgba(77, 192, 255, 0)',
                  '0 0 10px rgba(77, 192, 255, 0.5)',
                  '0 0 4px rgba(77, 192, 255, 0)'
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              AbouSolutions
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2 + index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Link 
                href={item.href} 
                className="text-foreground-dark hover:text-accent transition-colors flex items-center group"
              >
                <div className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0px rgba(77, 192, 255, 0.2)',
                        '0 0 10px rgba(77, 192, 255, 0.8)',
                        '0 0 0px rgba(77, 192, 255, 0.2)'
                      ]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                {item.title}
                <motion.div
                  className="h-0.5 bg-accent absolute -bottom-1 left-0"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <motion.button 
          className="md:hidden text-foreground-dark hover:text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-6 h-6"
              >
                <motion.span 
                  className="absolute block w-6 h-0.5 bg-accent transform rotate-45 top-3"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                />
                <motion.span 
                  className="absolute block w-6 h-0.5 bg-accent transform -rotate-45 top-3"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="menu"
                className="w-6 h-5 flex flex-col justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="block w-full h-0.5 bg-accent" 
                  whileHover={{ width: '70%' }}
                />
                <motion.span 
                  className="block w-3/4 h-0.5 bg-accent" 
                  whileHover={{ width: '100%' }}
                />
                <motion.span 
                  className="block w-1/2 h-0.5 bg-accent" 
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed top-16 inset-x-0 glass-effect mx-4 my-2 rounded-xl overflow-hidden z-50"
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ 
                opacity: 1,
                clipPath: 'inset(0 0 0 0)',
                transition: {
                  type: 'spring',
                  damping: 20,
                  stiffness: 300
                }
              }}
              exit={{ 
                opacity: 0, 
                clipPath: 'inset(0 0 100% 0)',
                transition: {
                  delay: 0.2,
                  type: 'spring',
                  damping: 30,
                  stiffness: 400
                }
              }}
            >
              <motion.nav 
                className="flex flex-col overflow-hidden"
                initial="collapsed"
                animate="open"
                exit="collapsed"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ 
                      backgroundColor: 'rgba(77, 192, 255, 0.1)',
                    }}
                    className="border-b border-accent/10 last:border-none"
                  >
                    <Link 
                      href={item.href} 
                      className="text-foreground-dark hover:text-accent transition-colors block py-4 px-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <motion.div
                          className="w-1 h-6 mr-3 overflow-hidden"
                          whileHover={{ width: 3 }}
                        >
                          <div className="h-full w-full bg-accent"></div>
                        </motion.div>
                        {item.title}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}