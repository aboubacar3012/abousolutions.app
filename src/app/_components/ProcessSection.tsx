'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const processSteps = [
    {
      title: "Consultation",
      icon: "💬",
      description: "Nous commençons par comprendre votre vision, vos objectifs et les besoins de vos utilisateurs."
    },
    {
      title: "Design & Planification",
      icon: "🎨",
      description: "Nous concevons des wireframes et maquettes pour visualiser votre application avant le développement."
    },
    {
      title: "Développement",
      icon: "👨‍💻",
      description: "Notre équipe développe votre MVP avec des itérations régulières pour assurer la qualité."
    },
    {
      title: "Lancement & Support",
      icon: "🚀",
      description: "Nous déployons votre application et vous fournissons un support technique pendant sa mise en ligne."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0a0e17] relative overflow-hidden">
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
                Méthodologie
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
              Notre Approche
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
            De l&apos;idée au lancement, nous vous accompagnons à chaque étape du développement de votre MVP.
          </motion.p>
        </div>
        
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="rounded-xl bg-[#080c15] border border-white/5 h-full p-8 flex flex-col transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 group">
                {/* Step number indicator */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="text-blue-500/50 text-xl font-bold">0{index + 1}</div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70">
                  {step.description}
                </p>
                
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent translate-x-1/2 z-0"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional section */}
        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70">
            Notre approche agile nous permet de nous adapter rapidement aux retours des utilisateurs et d'ajuster votre produit en fonction des besoins réels du marché. Nous privilégions la communication transparente et la collaboration étroite à chaque étape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}