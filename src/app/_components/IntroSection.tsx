'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 md:py-28 lg:py-32 bg-background-dark relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient blob - now with more subtle animation and better blur */}
        <motion.div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/8 rounded-full blur-[120px]"
          animate={{
            x: [20, -15, 20],
            y: [-20, 15, -20],
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.8, 0.7],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary accent blob - more elegant motion */}
        <motion.div
          className="absolute bottom-20 -left-20 w-2/3 h-2/3 bg-accent/8 rounded-full blur-[100px]"
          animate={{
            x: [-15, 20, -15],
            y: [15, -20, 15],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Tertiary subtle blob for added depth */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[80px]"
          animate={{
            x: [10, -10, 10],
            y: [-10, 10, -10],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Enhanced floating particles with varied sizes and colors */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-accent' : 'bg-white/50'
              } ${
                i % 4 === 0 ? 'w-1 h-1' : i % 4 === 1 ? 'w-1.5 h-1.5' : i % 4 === 2 ? 'w-2 h-2' : 'w-0.5 h-0.5'
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Modern geometric accents */}
        <div className="hidden lg:block absolute top-20 left-10 w-4 h-20 border-l-2 border-primary/20 rotate-45"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-4 h-20 border-l-2 border-accent/20 -rotate-45"></div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-8 h-8 border border-white/10 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-primary/10 rounded-lg rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left content - Enhanced main message with improved typography */}
          <motion.div 
            className="text-left lg:w-3/5 mb-12 lg:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-5 inline-block"
            >
              <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/10 text-primary font-medium text-sm uppercase tracking-widest shadow-sm">
                AbouSolutions
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="blue-gradient-text inline-block relative">
                Innovons ensemble.
                <motion.span 
                  className="absolute -bottom-2 left-1 right-1 h-[3px] bg-gradient-to-r from-primary via-accent to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span> 
              <span className="text-foreground-dark text-3xl md:text-4xl lg:text-5xl mt-3 block font-light">
                Votre vision, <span className="font-medium text-white">notre expertise.</span>
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-foreground-dark/85 text-xl mb-9 leading-relaxed max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transformons votre concept en une application mobile d&apos;exception qui captive 
              les utilisateurs et génère un <span className="text-white font-normal">impact réel</span> sur votre marché.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-5 mt-9"
            >
              {/* Bouton "Démarrer un projet" amélioré */}
              <motion.button 
                className="px-8 py-4 relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary/90 text-white font-semibold rounded-lg transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Démarrer un projet</span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                {/* Effet de halo */}
                <span className="absolute -inset-1 rounded-lg blur-sm bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              </motion.button>
              
              {/* Bouton "En savoir plus" amélioré */}
              <motion.button 
                className="px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-accent/30 hover:border-accent/70 text-white font-semibold rounded-lg transition-all hover:bg-accent/10 relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>En savoir plus</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </motion.svg>
                </span>
                <span className="absolute inset-0 rounded-lg border border-accent/0 group-hover:border-accent/20 transition-all duration-300"></span>
              </motion.button>
            </motion.div>
            
            {/* New stats section - adds credibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {[
                { value: '5+', label: "Années d'expertise" },
                { value: '50+', label: 'Projets livrés' },
                { value: '95%', label: 'Clients satisfaits' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-white font-bold text-2xl md:text-3xl">{stat.value}</span>
                  <span className="text-foreground-dark/70 text-sm mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right content - Enhanced quote card with more elegant styling */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/30 opacity-70 rounded-tl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 opacity-70 rounded-br-xl"></div>
              
              <motion.div
                className="relative p-8 md:p-10 bg-gradient-to-br from-background-dark/95 to-background-dark/40 backdrop-blur-md rounded-xl border border-foreground-dark/10 shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)",
                  y: -8,
                  borderColor: "rgba(255, 255, 255, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-14 h-14 text-primary/40" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                
                <blockquote className="text-xl text-foreground-dark/90 font-light leading-relaxed mb-8">
                  Nous sommes un groupe d&apos;experts spécialisés dans la conception, la stratégie et le 
                  développement d&apos;applications <span className="text-white font-normal">mobiles et web</span>. 
                  Les entrepreneurs, les start-ups et les entreprises comptent sur nous pour 
                  <span className="italic"> lancer et revitaliser</span> leurs produits numériques.
                </blockquote>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary/60 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    AD
                  </div>
                  <div>
                    <div className="font-medium text-white">Aboubacar DIALLO</div>
                    <div className="text-sm text-foreground-dark/70 mt-0.5">Fondateur, AbouSolutions</div>
                  </div>
                </div>
                
                {/* Add subtle decorative accent */}
                <div className="absolute top-6 right-6 w-12 h-12 opacity-10">
                  <div className="w-full h-full border-2 border-accent rounded-lg rotate-45"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}