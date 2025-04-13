'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TemplateCard from '../components/TemplateCard';
import TemplateFilter from '../components/TemplateFilter';
import { motion } from 'framer-motion';

// Données de démonstration pour les templates
const templateData = [
  {
    id: '1',
    title: 'Dashboard NextJS',
    description: 'Template moderne de dashboard administratif avec authentification, tableaux de bord et panneaux d\'administration.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'Tailwind'],
    demoUrl: '/demo/dashboard-nextjs'
  },
  {
    id: '2',
    title: 'E-commerce PWA',
    description: 'Solution e-commerce complète avec panier, paiement et gestion des produits. Compatible PWA pour mobile.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    technologies: ['PWA', 'React', 'Node.js'],
    demoUrl: '/demo/ecommerce-pwa'
  },
  {
    id: '3',
    title: 'Application Desktop',
    description: 'Application desktop cross-platform développée avec Electron pour Windows, Mac et Linux.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
    technologies: ['Desktop', 'Electron', 'Vue.js'],
    demoUrl: '/demo/desktop-app'
  },
  {
    id: '4',
    title: 'CRM Entreprise',
    description: 'Système CRM complet pour la gestion des clients, des ventes et du marketing.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    demoUrl: '/demo/crm-entreprise'
  }
];

// Données pour les services de MVP
const mvpServices = [
  {
    title: 'MVP Essentiel',
    description: 'Lancez votre idée rapidement avec les fonctionnalités essentielles pour valider votre concept.',
    features: [
      'Consultation initiale',
      'Design UI/UX basique',
      'Développement des fonctionnalités essentielles',
      'Déploiement sur serveur de test',
      '1 révision après feedback',
    ],
    price: '2 500€',
    timeframe: 'projet',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
  },
  {
    title: 'MVP Standard',
    description: 'Solution complète pour lancer votre MVP avec un design professionnel et des fonctionnalités avancées.',
    features: [
      'Analyse des besoins détaillée',
      'Design UI/UX personnalisé',
      'Développement full-stack',
      'Intégration API',
      'Tests complets et débogage',
      'Déploiement en production',
      '2 révisions après feedback',
    ],
    price: '4 900€',
    timeframe: 'projet',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
    highlighted: true,
  },
  {
    title: 'MVP Premium',
    description: 'Solution sur mesure pour les startups qui cherchent à lever des fonds ou à lancer une version complète.',
    features: [
      'Tout ce qui est inclus dans le pack Standard',
      'Évolutivité et architecture scalable',
      'Tableau de bord admin',
      'Système d\'authentification avancé',
      'Accompagnement post-lancement',
      'Support technique de 3 mois',
      'SEO optimisé',
    ],
    price: '7 900€',
    timeframe: 'projet',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
  }
];

// Technologies disponibles pour les filtres
const availableTechnologies = ['Next.js', 'React', 'PWA', 'Desktop', 'Electron', 'Vue.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind'];

export default function Home() {
  const [filteredTemplates, setFilteredTemplates] = useState(templateData);
  
  // Fonction pour filtrer les templates par technologie
  const handleFilterChange = (selectedTechnologies: string[]) => {
    if (selectedTechnologies.length === 0) {
      setFilteredTemplates(templateData);
      return;
    }
    
    const filtered = templateData.filter(template => 
      selectedTechnologies.some(tech => template.technologies.includes(tech))
    );
    
    setFilteredTemplates(filtered);
  };

  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Section Templates */}
        <section id="templates" className="py-16 bg-background-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="blue-gradient-text">Templates sur Mesure</span>
              </h2>
              <p className="text-foreground-dark/80 max-w-3xl mx-auto">
                Découvrez notre catalogue de templates prêts à l&apos;emploi et personnalisables selon vos besoins.
                Chaque template est soigneusement conçu pour offrir une expérience utilisateur optimale.
              </p>
            </div>
            
            <TemplateFilter 
              technologies={availableTechnologies} 
              onFilterChange={handleFilterChange} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map(template => (
                <TemplateCard 
                  key={template.id}
                  id={template.id}
                  title={template.title}
                  description={template.description}
                  imageUrl={template.imageUrl}
                  technologies={template.technologies}
                  demoUrl={template.demoUrl}
                />
              ))}
            </div>
            
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground-dark/80">Aucun template ne correspond à vos critères.</p>
                <button 
                  onClick={() => handleFilterChange([])}
                  className="mt-4 text-accent hover:text-primary-light transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Section MVP */}
        <section id="mvp" className="py-16 bg-card-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="blue-gradient-text">Services de Création de MVP</span>
              </h2>
              <p className="text-foreground-dark/80 max-w-3xl mx-auto">
                Lancez rapidement votre produit avec notre service de création de MVP (Minimum Viable Product).
                Nous vous aidons à transformer votre idée en produit fonctionnel, prêt à être testé par vos utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {mvpServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  timeframe={service.timeframe}
                  buttonText={service.buttonText}
                  buttonLink={service.buttonLink}
                  highlighted={service.highlighted}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Section Contact */}
        <section id="contact" className="py-16 bg-background-dark relative overflow-hidden">
          {/* Arrière-plan animé */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 right-0 w-2/3 h-2/3 bg-accent/5 rounded-full blur-3xl"
              animate={{
                x: [50, -20, 50],
                y: [-50, 20, -50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl"
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
            <motion.div 
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="blue-gradient-text">Discutons de votre projet</span>
              </motion.h2>
              <motion.p 
                className="text-foreground-dark/80 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Votre vision mérite une réalisation exceptionnelle. Contactez-nous pour transformer vos idées en réalité numérique captivante.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Informations de Contact */}
              <motion.div 
                className="lg:col-span-2 glass-effect p-8 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", damping: 15 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Effet de lumière qui se déplace */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold mb-8 blue-gradient-text"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Contactez-nous
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-accent/10 rounded-lg p-3 mt-1">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-accent"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        >
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-foreground-dark font-medium mb-1">Téléphone</p>
                        <a href="tel:+33612345678" className="text-foreground-dark/70 hover:text-accent transition-colors">
                          +33 6 12 34 56 78
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-accent/10 rounded-lg p-3 mt-1">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-accent"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-foreground-dark font-medium mb-1">Email</p>
                        <a href="mailto:contact@abousolutions.com" className="text-foreground-dark/70 hover:text-accent transition-colors">
                          contact@abousolutions.com
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-accent/10 rounded-lg p-3 mt-1">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-accent"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-foreground-dark font-medium mb-1">Adresse</p>
                        <p className="text-foreground-dark/70">
                          123 Avenue de la Tech<br />75001 Paris, France
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-12 flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-background-dark/50 flex items-center justify-center text-foreground-dark/70 hover:text-accent hover:bg-background-dark transition-colors"
                        whileHover={{ 
                          scale: 1.15, 
                          boxShadow: '0 0 15px rgba(77, 192, 255, 0.5)' 
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          {social === 'Twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                          {social === 'LinkedIn' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                          {social === 'GitHub' && <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />}
                          {social === 'Instagram' && <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />}
                        </svg>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Formulaire de Contact */}
              <motion.div 
                className="lg:col-span-3 glass-effect rounded-2xl overflow-hidden relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", damping: 15 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Effet lumineux animé */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl absolute -top-[250px] -right-[250px]"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.2, 0.3],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
                
                <div className="p-8 relative z-10">
                  <motion.form 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <motion.div 
                          className="absolute left-3 top-3 w-6 h-6 flex items-center justify-center text-foreground-dark/40 transition-all duration-300 pointer-events-none group-focus-within:text-accent"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 5,
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </motion.div>
                        <motion.div
                          className="group"
                          whileFocus={{ scale: 1.02 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <motion.input
                            type="text"
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-background-dark/60 border border-foreground-dark/10 text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 group"
                            placeholder="Votre nom"
                            whileFocus={{ boxShadow: "0 0 0 3px rgba(77, 192, 255, 0.2)" }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="absolute left-3 top-3 w-6 h-6 flex items-center justify-center text-foreground-dark/40 transition-all duration-300 pointer-events-none group-focus-within:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <motion.div
                          className="group"
                          whileFocus={{ scale: 1.02 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <motion.input
                            type="email"
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-background-dark/60 border border-foreground-dark/10 text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                            placeholder="votre@email.com"
                            whileFocus={{ boxShadow: "0 0 0 3px rgba(77, 192, 255, 0.2)" }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute left-3 top-3 w-6 h-6 flex items-center justify-center text-foreground-dark/40 transition-all duration-300 pointer-events-none group-focus-within:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <motion.div
                        className="group"
                        whileFocus={{ scale: 1.02 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <motion.input
                          type="text"
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-background-dark/60 border border-foreground-dark/10 text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                          placeholder="Sujet de votre message"
                          whileFocus={{ boxShadow: "0 0 0 3px rgba(77, 192, 255, 0.2)" }}
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute left-3 top-3 w-6 h-6 flex items-center justify-center text-foreground-dark/40 transition-all duration-300 pointer-events-none group-focus-within:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <motion.div
                        className="group"
                        whileFocus={{ scale: 1.02 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <motion.textarea
                          rows={5}
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-background-dark/60 border border-foreground-dark/10 text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                          placeholder="Votre message..."
                          whileFocus={{ boxShadow: "0 0 0 3px rgba(77, 192, 255, 0.2)" }}
                        ></motion.textarea>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="gradient-border rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 120 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03,
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-accent to-primary-light text-white font-medium py-3 px-6 relative overflow-hidden group"
                      >
                        {/* Effet de brillance au survol */}
                        <motion.div 
                          className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                        />
                        
                        <span className="relative z-10 flex items-center justify-center">
                          <span>Envoyer le message</span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="ml-2"
                            animate={{
                              x: [0, 5, 0],
                              opacity: [1, 0.8, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </motion.svg>
                        </span>
                      </button>
                    </motion.div>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
