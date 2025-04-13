'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant(isHovering ? 'hover' : 'default');

    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll('a, button, [role="button"]');
      
      allLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          setCursorVariant('hover');
          setIsHovering(true);
        });
        link.addEventListener('mouseleave', () => {
          setCursorVariant('default');
          setIsHovering(false);
        });
      });
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Initial setup with short delay to ensure DOM is loaded
    setTimeout(handleLinkHoverEvents, 500);
    
    // Re-register event listeners when the DOM changes
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      observer.disconnect();
    };
  }, [isHovering]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.85,
    },
    hover: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      opacity: 0.5,
      borderWidth: '2px',
      backgroundColor: 'rgba(77, 192, 255, 0.05)',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 24,
      width: 24,
      opacity: 0.8,
      backgroundColor: 'rgba(77, 192, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Hide default cursor with CSS
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      a, button, [role="button"], input[type="submit"], input[type="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-accent"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5
        }}
        style={{
          height: 32,
          width: 32
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-accent"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 18,
          mass: 0.2
        }}
        style={{
          height: 8,
          width: 8
        }}
      />
    </>
  );
}