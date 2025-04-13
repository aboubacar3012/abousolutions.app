'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  title: string;
  href: string;
  id: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
  activeItem: string | null;
}

export default function Sidebar({ isOpen, setIsOpen, menuItems, activeItem }: SidebarProps) {
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (
        isOpen && 
        sidebar && 
        menuButton && 
        !sidebar.contains(event.target as Node) && 
        !menuButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Disable body scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            id="mobile-sidebar"
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-background/95 to-background/85 backdrop-blur-xl border-l border-accent/30 z-50 shadow-[0_0_25px_rgba(77,192,255,0.15)] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300 
            }}
          >
            {/* Header with close button */}
            <motion.div
              className="flex justify-between items-center p-6 border-b border-accent/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-accent/20 hover:bg-accent/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </motion.button>
            </motion.div>
            
            {/* Navigation links */}
            <motion.nav className="flex flex-col p-4 flex-grow">
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.id;
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.07 }}
                    className="mb-3"
                  >
                    <Link 
                      href={item.href} 
                      className={`block p-4 rounded-lg transition-all ${
                        isActive 
                          ? 'bg-accent/30 text-white font-medium shadow-[0_0_15px_rgba(77,192,255,0.2)]' 
                          : 'text-gray-200 hover:bg-accent/15 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-3 ${isActive ? 'bg-accent' : 'bg-gray-400'}`}></span>
                        <span className="font-medium text-base">{item.title}</span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
            
            {/* Call to action button */}
            <motion.div
              className="p-6 border-t border-accent/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/#start"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 px-6 rounded-lg bg-gradient-to-r from-accent to-primary text-white text-center font-medium shadow-lg hover:shadow-accent/20 hover:scale-[1.02] transition-all"
              >
                Commencer
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}