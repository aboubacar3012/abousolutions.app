'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TemplateFilterProps {
  technologies: string[];
  onFilterChange: (selectedTechnologies: string[]) => void;
}

export default function TemplateFilter({ technologies, onFilterChange }: TemplateFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTechnology = (tech: string) => {
    const newSelected = selected.includes(tech)
      ? selected.filter(t => t !== tech)
      : [...selected, tech];
    
    setSelected(newSelected);
    onFilterChange(newSelected);
  };

  const clearFilters = () => {
    setSelected([]);
    onFilterChange([]);
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    }
  };

  const childButtonVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 150 
      }
    }
  };

  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2 
          className="text-xl font-semibold text-foreground-dark"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        >
          Filtrer par technologie
        </motion.h2>
        <AnimatePresence>
          {selected.length > 0 && (
            <motion.button 
              onClick={clearFilters}
              className="text-xs text-accent hover:text-primary-light transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Effacer les filtres
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((tech, index) => (
          <motion.button
            key={tech}
            onClick={() => toggleTechnology(tech)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selected.includes(tech)
                ? 'bg-primary text-white'
                : 'bg-card-bg text-foreground-dark/80 hover:bg-card-hover'
            }`}
            variants={childButtonVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: selected.includes(tech) ? '0 0 15px rgba(15, 86, 179, 0.5)' : '0 0 10px rgba(13, 36, 70, 0.3)'
            }}
            whileTap="tap"
            animate={selected.includes(tech) ? "selected" : "idle"}
            custom={index}
            layout
          >
            <motion.span 
              layout
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              {tech}
              {selected.includes(tech) && (
                <motion.svg
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              )}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      {/* Indicateur de filtres actifs */}
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div 
            className="mt-4 text-sm text-foreground-dark/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Filtres actifs: {selected.length}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}