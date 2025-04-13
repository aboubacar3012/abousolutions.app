'use client';

import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let currentPosition = window.pageYOffset;
    let targetPosition = window.pageYOffset;
    let raf: number;
    
    const scroll = () => {
      currentPosition = currentPosition + (targetPosition - currentPosition) * 0.1;
      
      // Si on est assez proche de la position cible, on arrête l'animation
      if (Math.abs(targetPosition - currentPosition) < 0.1) {
        currentPosition = targetPosition;
        setScrolling(false);
        return;
      }
      
      window.scrollTo(0, currentPosition);
      raf = requestAnimationFrame(scroll);
    };

    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true);
        cancelAnimationFrame(raf);
      }
      targetPosition = window.pageYOffset;
    };

    // Ajouter des styles pour le défilement fluide aux éléments cliquables
    const addSmoothScrollToLinks = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
              const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
              targetPosition = topOffset;
              setScrolling(true);
              scroll();
            }
          }
        });
      });
    };

    // Initialisation du défilement fluide
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Appliquer le défilement fluide aux liens internes après un court délai
    setTimeout(addSmoothScrollToLinks, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrolling]);

  return <>{children}</>;
}