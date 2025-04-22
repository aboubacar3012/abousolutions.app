'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Données pour les services de MVP
const mvpServices = [
  {
    title: 'ESSENTIAL MVP PACKAGE',
    description: 'Lancez votre produit rapidement avec les fonctionnalités essentielles pour valider votre concept.',
    features: [
      'Jusqu\'à 5 écrans',
      'Entre 1 et 3 fonctionnalités',
      'Livré en 8 semaines',
      'Design non inclus',
      'Maintenance 4 semaines',
      'Conseil/Accompagnement pour la mise en ligne (Play Store et App Store)',
    ],
    price: '4 500€ HT',
    timeframe: '2 mois',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
  },
  {
    title: 'PRO MVP PACKAGE',
    description: 'Solution complète pour lancer votre MVP avec un design professionnel et des fonctionnalités avancées.',
    features: [
      'Jusqu\'à 10 écrans',
      'Entre 3 et 5 fonctionnalités',
      'Design UX/UI inclus',
      'Livré en 12 semaines',
      'Maintenance 3 mois',
      'Conseil stratégique',
      'Analyse des performances'
    ],
    price: '9 500€ HT',
    timeframe: '3 mois',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
    highlighted: true,
  },
  {
    title: 'ENTERPRISE MVP PACKAGE',
    description: 'Solution sur mesure pour les entreprises avec des besoins complexes et une évolutivité maximale.',
    features: [
      'Nombre d\'écrans illimité',
      'Fonctionnalités personnalisées',
      'Design UX/UI premium',
      'Délai personnalisé',
      'Maintenance 6 mois',
      'Support technique dédié',
      'Conseil stratégique avancé'
    ],
    price: 'Sur devis',
    timeframe: 'Personnalisé',
    buttonText: 'Nous contacter',
    buttonLink: '/contact',
  },
];

export default function MvpSection() {
  return (
    <section id="mvp" className="py-20 md:py-28 bg-background-dark relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 to-background-dark/95"></div>
        
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
            <div className="px-5 py-1.5 rounded-full border border-foreground-dark/10 bg-foreground-dark/5 text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-foreground-dark/80">
                Solutions MVP
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
            <span className="blue-gradient-text">
              Services de Création de MVP
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className="text-foreground-dark/70 text-lg max-w-2xl text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lancez rapidement votre produit avec notre service de MVP (Minimum Viable Product).
            Transformez votre idée en une réalité concrète, testable par vos utilisateurs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {mvpServices.map((service, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`rounded-xl glass-effect h-full p-8 flex flex-col transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 group ${service.highlighted ? 'border-accent/30 shadow-lg shadow-accent/10' : 'border-foreground-dark/5'}`}>
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-foreground-dark/70 mb-6">
                  {service.description}
                </p>

                {/* Price and timeframe */}
                <div className="mb-6">
                  <div className="text-accent text-2xl font-bold mb-2">{service.price}</div>
                  <div className="text-foreground-dark/60 text-sm">{service.timeframe}</div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-foreground-dark/80 text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-auto">
                  <motion.a 
                    href={service.buttonLink} 
                    className={`inline-flex items-center ${service.highlighted ? 'bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg' : 'text-accent group-hover:text-accent/80'}`}
                    whileHover={{ x: service.highlighted ? 0 : 5, scale: service.highlighted ? 1.03 : 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {service.buttonText}
                    {!service.highlighted && <ArrowRight className="ml-2 w-4 h-4" />}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Added CTA section with updated styling */}
        <motion.div
          className="mt-16 pt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-lg text-foreground-dark/70 max-w-2xl mx-auto">
            Besoin d'une solution personnalisée ? <br className="md:hidden" />
            <motion.a 
              href="#contact" 
              className="text-accent font-medium underline-offset-4 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactez-nous pour discuter de votre projet
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}