'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="blue-gradient-text">Nos Services</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            className="glass-effect p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Développement d&apos;application mobile et site web</h3>
            <p className="text-foreground-dark/80 mb-6 relative z-10">
              Nous créons des expériences mobiles exceptionnelles en exploitant les technologies les plus récentes. 
              Élargissez votre marché et améliorez l&apos;expérience utilisateur en développant des applications mobiles 
              pour Android et iOS grâce à notre expertise.
            </p>
            <p className="text-foreground-dark/80 relative z-10">
              De plus, si nécessaire, nous pouvons également développer une plateforme web pour vous.
            </p>
          </motion.div>
          
          <motion.div
            className="glass-effect p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Design UX/UI</h3>
            <p className="text-foreground-dark/80 mb-6 relative z-10">
              Vous n&apos;avez pas de design ? Nos experts en UX/UI donneront vie à vos idées les plus audacieuses. 
              Établissons ensemble une vision claire qui répond aux besoins de votre entreprise et de vos clients cibles.
            </p>
            <p className="text-foreground-dark/80 font-medium italic relative z-10">
              Les fonctionnalités déterminent les coûts de développement de l&apos;application.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}