'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [-50, 20, -50],
            y: [50, -20, 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="blue-gradient-text">Notre Approche</span>
          </h2>
          <p className="text-foreground-dark/80 max-w-3xl mx-auto">
            De l&apos;idée au lancement, nous vous accompagnons à chaque étape du développement de votre MVP.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
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
          ].map((step, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground-dark/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}