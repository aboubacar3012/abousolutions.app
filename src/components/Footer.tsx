'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
;

  return (
    <footer className="bg-dark-blue pt-16 pb-8 relative overflow-hidden">
   

      <div className="container mx-auto px-4">
        
        
        {/* Newsletter */}
        <motion.div 
          className="glass-effect p-8 rounded-2xl mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Effet de lumière animé */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 z-0 opacity-0"
            animate={{ 
              opacity: [0, 0.5, 0],
              x: ['-100%', '100%']
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <motion.h3 
                className="text-xl font-bold mb-2 blue-gradient-text"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Restez informé
              </motion.h3>
              <motion.p 
                className="text-foreground-dark/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres.
              </motion.p>
            </div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <motion.div 
                  className="relative flex-grow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-foreground-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-background-dark/60 border border-foreground-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground-dark"
                    placeholder="Votre adresse email"
                  />
                </motion.div>
                <motion.button
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(77, 192, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  S&apos;inscrire
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      
        {/* Copyright et Mentions */}
        <div className="border-t border-foreground-dark/10 pt-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground-dark/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AbouSolutions. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-foreground-dark/60 hover:text-accent text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/terms" 
                className="text-foreground-dark/60 hover:text-accent text-sm transition-colors"
              >
                Conditions d&apos;utilisation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}