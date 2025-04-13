import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
}

export default function TemplateCard({ 
  id, 
  title, 
  description, 
  imageUrl, 
  technologies, 
  demoUrl 
}: TemplateCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className="glass-effect relative overflow-hidden group h-[450px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ 
        y: -15, 
        transition: { duration: 0.3 },
        boxShadow: '0 30px 60px -15px rgba(77, 192, 255, 0.4)'
      }}
    >
      {/* Effet de lumière d'ambiance qui suit le curseur */}
      <motion.div 
        className="absolute -inset-[50%] bg-accent/20 rounded-full blur-3xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={
          hovered 
            ? { 
                opacity: 0.2, 
                scale: 1.2,
              }
            : { 
                opacity: 0,
                scale: 0.8, 
              }
        }
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* En-tête avec image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay avec effet de dégradé amélioré */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/40 to-transparent opacity-90"></div>
          
          {/* Badges de technologie */}
          <motion.div 
            className="absolute bottom-0 left-0 p-4 right-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex gap-2 mb-2 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="glass-effect text-xs text-white px-3 py-1 rounded-full border border-accent/20"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 0 15px rgba(77, 192, 255, 0.5)' 
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Contenu avec titre et description */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <motion.h3 
            className="text-2xl font-bold blue-gradient-text mb-4 group-hover:text-white transition-colors duration-500"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-foreground-dark/80 text-base mb-6 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          {/* Actions */}
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden"
            >
              <Link 
                href={`/template/${id}`} 
                className="text-primary-light hover:text-white font-medium text-sm transition-colors flex items-center group"
              >
                <span>Voir les détails</span>
                <motion.span 
                  className="ml-2" 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  →
                </motion.span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-accent" 
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-4 py-2 rounded-lg group neon-glow-blue"
              >
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/20" 
                    animate={{ 
                      background: [
                        'linear-gradient(to right, rgba(77, 192, 255, 0.05), rgba(15, 86, 179, 0.15))',
                        'linear-gradient(to right, rgba(15, 86, 179, 0.15), rgba(77, 192, 255, 0.05))',
                        'linear-gradient(to right, rgba(77, 192, 255, 0.05), rgba(15, 86, 179, 0.15))'
                      ] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity
                    }}
                  />
                </span>
              
                <span className="font-medium text-sm text-accent relative z-10 flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="mr-1"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Demo
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Overlay interactif au survol */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
}