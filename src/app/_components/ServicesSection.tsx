'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code2, Palette, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  // Services data for more consistent rendering
  const services = [
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Nous créons des expériences mobiles exceptionnelles en exploitant les technologies les plus récentes. Élargissez votre marché et améliorez l'expérience utilisateur avec des applications mobiles pour Android et iOS.",
      features: ["Applications natives", "Solutions cross-platform", "Interfaces tactiles optimisées"],
      delay: 0,
    },
    {
      icon: Code2,
      title: "Développement Web",
      description: "Nous concevons et développons des sites et applications web modernes, robustes et adaptés à tous les dispositifs. Nos solutions web sont optimisées pour les performances et le référencement.",
      features: ["Sites responsive", "Applications web progressives", "Optimisation SEO"],
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "Design UX/UI",
      description: "Vous n'avez pas de design ? Nos experts en UX/UI donneront vie à vos idées les plus audacieuses. Établissons ensemble une vision claire qui répond aux besoins de votre entreprise et de vos clients.",
      features: ["Maquettes interactives", "Design system", "Tests utilisateurs"],
      delay: 0.4,
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0e17] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/80 to-[#0a0e17]/95"></div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-white/80">
                Nos expertises
              </span>
            </div>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Nos Services
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className="text-white/70 text-lg max-w-2xl text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Solutions numériques sur mesure pour transformer vos idées en réalités concrètes 
            avec une expertise de pointe
          </motion.p>
        </div>
        
        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <div className="rounded-xl bg-[#080c15] border border-white/5 h-full p-8 flex flex-col transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 group">
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className="w-8 h-8 text-blue-500" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-8 flex-grow">
                  {service.description}
                </p>
                
                {/* Features without bullet points */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-white/80 text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-auto">
                  <motion.a 
                    href="#contact" 
                    className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}