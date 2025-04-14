'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 md:py-28 lg:py-32 bg-background-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient blob */}
        <motion.div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [40, -30, 40],
            y: [-40, 30, -40],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary accent blob */}
        <motion.div
          className="absolute bottom-20 -left-20 w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [-30, 40, -30],
            y: [30, -40, 30],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-primary ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Main message */}
          <motion.div 
            className="text-left lg:w-3/5 mb-12 lg:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 inline-block"
            >
              <span className="px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider">
                AbouSolutions
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="blue-gradient-text inline-block">Innovons ensemble.</span> <br />
              <span className="text-foreground-dark text-3xl md:text-4xl lg:text-5xl mt-2 block">
                Votre vision, notre expertise.
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-foreground-dark/80 text-xl mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transformons votre concept en une application mobile d&apos;exception qui captive les utilisateurs 
              et génère un impact réel sur votre marché.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                Démarrer un projet
              </button>
              <button className="px-8 py-3 bg-transparent border border-foreground-dark/20 hover:border-foreground-dark/40 text-foreground-dark font-medium rounded-lg transition-all">
                En savoir plus
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Quote card */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent opacity-40"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary opacity-40"></div>
              
              <motion.div
                className="relative p-8 bg-gradient-to-br from-background-dark/80 to-background-dark/30 backdrop-blur-lg rounded-xl border border-foreground-dark/10 shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 text-primary/30" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                  </svg>
                </div>
                
                <blockquote className="text-xl text-foreground-dark/90 font-light leading-relaxed mb-6">
                  Nous sommes un groupe d&apos;experts spécialisés dans la conception, la stratégie et le développement d&apos;applications mobiles (et web). Les entrepreneurs, les start-ups et les entreprises comptent sur nous pour lancer et revitaliser leurs produits numériques.
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                    AD
                  </div>
                  <div>
                    <div className="font-medium text-foreground-dark">Aboubacar DIALLO</div>
                    <div className="text-sm text-foreground-dark/60">Fondateur, AbouSolutions</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}