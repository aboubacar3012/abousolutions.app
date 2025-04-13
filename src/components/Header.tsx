'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Sidebar from './Sidebar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [4, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Update active section based on scroll position
      const sections = ['templates', 'mvp', 'contact','rendezvous','quisuisje'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      
      setActiveItem(currentSection || null);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Templates', href: '/#templates', id: 'templates' },
    { title: 'Services MVP', href: '/#mvp', id: 'mvp' },
    { title: 'Rendez-vous', href: '/#rendezvous', id: 'rendezvous' },
    { title: 'Qui suis-je ?', href: '/#quisuisje', id: 'quisuisje' },
    { title: 'Contact', href: '/#contact', id: 'contact' }
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          backgroundColor: scrolled ? 'rgba(3, 11, 25, 0.85)' : 'rgba(3, 11, 25, 0.6)',
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
                className="relative overflow-hidden rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 10px 2px rgba(77, 192, 255, 0.4)',
                    '0 0 20px 4px rgba(77, 192, 255, 0.6)',
                    '0 0 10px 2px rgba(77, 192, 255, 0.4)'
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-accent via-primary to-accent rounded-full flex items-center justify-center">
                  <motion.span 
                    className="text-white text-xl font-bold"
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
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #4dc0ff, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ 
                  textShadow: [
                    '0 0 5px rgba(77, 192, 255, 0.2)',
                    '0 0 12px rgba(77, 192, 255, 0.4)',
                    '0 0 5px rgba(77, 192, 255, 0.2)'
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AbouSolutions
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, index) => {
              const isActive = activeItem === item.id;
              
              return (
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
                  className="relative"
                >
                  <Link 
                    href={item.href} 
                    className="relative inline-block py-2 px-1 text-sm uppercase tracking-wider font-medium transition-all"
                  >
                    <motion.span
                      className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.title}
                    </motion.span>
                    
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      whileHover={{ 
                        scaleX: 1, 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }}
                      style={{
                        transformOrigin: 'center'
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            id="mobile-menu-button"
            className="md:hidden relative w-12 h-12 flex items-center justify-center bg-accent/20 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: mobileMenuOpen ? 
                  '0 0 0 3px rgba(77, 192, 255, 0.8)' : 
                  '0 0 0 2px rgba(77, 192, 255, 0.5)'
              }}
              whileHover={{
                boxShadow: '0 0 8px 2px rgba(77, 192, 255, 0.9)'
              }}
            />
            
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-7 h-7"
                >
                  <motion.span 
                    className="absolute block w-7 h-0.5 bg-white transform rotate-45 top-3"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  />
                  <motion.span 
                    className="absolute block w-7 h-0.5 bg-white transform -rotate-45 top-3"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  key="menu"
                  className="w-7 h-6 flex flex-col justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {[0, 1, 2].map(i => (
                    <motion.span 
                      key={i}
                      className="block h-0.5 bg-white rounded-full" 
                      initial={{ width: 14 - i * 4 }}
                      animate={{ width: 28 - i * 6 }}
                      whileHover={{ width: 28 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Sidebar Menu */}
      <Sidebar 
        isOpen={mobileMenuOpen} 
        setIsOpen={setMobileMenuOpen} 
        menuItems={menuItems} 
        activeItem={activeItem} 
      />
    </>
  );
}