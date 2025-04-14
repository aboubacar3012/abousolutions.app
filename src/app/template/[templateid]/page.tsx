'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import des données de templates (à remplacer par une API réelle)
import { templateData } from './data'; 

// Type pour les données de template
type TemplateData = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  sales?: number;
  features: string[];
  screenshots: string[];
  longDescription?: string;
  architecture?: string;
  requirements?: string[];
}

export default function TemplatePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const templateId = params.templateid as string;
  const showBuySection = searchParams.get('buy') === 'true';
  
  const [template, setTemplate] = useState<TemplateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedImage, setSelectedImage] = useState('');
  const [showLightbox, setShowLightbox] = useState(false);
  
  // Récupérer les données du template
  useEffect(() => {
    // Simuler un chargement d'API
    setLoading(true);
    setTimeout(() => {
      const foundTemplate = templateData.find(t => t.id === templateId);
      if (foundTemplate) {
        setTemplate(foundTemplate);
        setSelectedImage(foundTemplate.imageUrl);
      }
      setLoading(false);
    }, 500);
    
    // Scroll vers la section d'achat si le paramètre buy=true est présent
    if (showBuySection) {
      setTimeout(() => {
        document.getElementById('buy-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  }, [templateId, showBuySection]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-t-4 border-accent border-solid rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-accent">Chargement</span>
          </div>
        </div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Template introuvable</h1>
        <p className="text-foreground-dark/80 mb-6">
          Désolé, le template que vous recherchez n&apos;existe pas ou a été supprimé.
        </p>
        <Link 
          href="/#templates" 
          className="bg-accent text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Retour aux templates
        </Link>
      </div>
    );
  }
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
              <p className="text-foreground-dark/80">
                {template.longDescription || template.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Fonctionnalités</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {template.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-foreground-dark/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
        
      case 'screenshots':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[template.imageUrl, ...template.screenshots].map((src, index) => (
                <motion.div 
                  key={index} 
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setSelectedImage(src);
                    setShowLightbox(true);
                  }}
                >
                  <Image 
                    src={src} 
                    alt={`Screenshot ${index + 1}`} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-6v6" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {showLightbox && (
              <motion.div 
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setShowLightbox(false)}
              >
                <motion.div 
                  className="relative max-w-4xl max-h-[80vh] w-full"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={selectedImage} 
                    alt="Screenshot en grand format" 
                    width={1200} 
                    height={800} 
                    className="w-full h-auto object-contain"
                  />
                  <button 
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLightbox(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        );
        
      case 'architecture':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Architecture technique</h3>
            {template.architecture ? (
              <div className="text-foreground-dark/80">
                <div className="glass-effect p-6 rounded-lg">
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {template.architecture}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="glass-effect p-6 rounded-lg">
                <p className="text-foreground-dark/80">
                  Architecture MVC classique avec séparation claire des responsabilités:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <div>
                      <span className="text-white font-semibold">Frontend:</span>
                      <p className="text-foreground-dark/80">
                        Interface utilisateur React/Next.js avec Tailwind CSS pour les styles.
                        Gestion d&apos;état via React Context ou Redux selon la complexité.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <div>
                      <span className="text-white font-semibold">Backend:</span>
                      <p className="text-foreground-dark/80">
                        API RESTful avec Express.js ou API Routes Next.js.
                        Validation des données via Zod ou Joi.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <div>
                      <span className="text-white font-semibold">Base de données:</span>
                      <p className="text-foreground-dark/80">
                        MongoDB avec Mongoose ou SQL avec Prisma selon les besoins du projet.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <div>
                      <span className="text-white font-semibold">Authentification:</span>
                      <p className="text-foreground-dark/80">
                        JWT, NextAuth.js ou Firebase Authentication selon la complexité.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        );
        
      case 'requirements':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Configuration requise</h3>
            <div className="glass-effect p-6 rounded-lg">
              <ul className="space-y-4">
                {template.requirements ? (
                  template.requirements.map((req, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <span className="text-foreground-dark/80">{req}</span>
                    </motion.li>
                  ))
                ) : (
                  <>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="text-white font-semibold">Node.js:</span>
                        <span className="text-foreground-dark/80"> version 16.x ou supérieure</span>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="text-white font-semibold">npm/yarn:</span>
                        <span className="text-foreground-dark/80"> dernière version stable</span>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="text-white font-semibold">Espace disque:</span>
                        <span className="text-foreground-dark/80"> minimum 1 GB disponible</span>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="text-white font-semibold">Navigateur:</span>
                        <span className="text-foreground-dark/80"> Chrome, Firefox, Safari, Edge (dernières versions)</span>
                      </div>
                    </motion.li>
                  </>
                )}
              </ul>
              
              <div className="mt-8 p-4 bg-primary/20 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Installation</h4>
                <div className="bg-dark-blue/70 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                  <p className="text-green-400 mb-1"># Cloner le repository</p>
                  <p className="text-foreground-dark/90">git clone [url_repository]</p>
                  <p className="text-green-400 mt-3 mb-1"># Installer les dépendances</p>
                  <p className="text-foreground-dark/90">npm install</p>
                  <p className="text-green-400 mt-3 mb-1"># Lancer en développement</p>
                  <p className="text-foreground-dark/90">npm run dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero section avec image principale */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Image
              src={template.imageUrl}
              alt={template.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 via-dark-blue/70 to-background-dark"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {template.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="glass-effect text-xs text-white px-3 py-1 rounded-full border border-accent/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent-rgb), 0.15)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold blue-gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <motion.span
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="inline-block"
              >
                {template.title}
              </motion.span>
            </motion.h1>
            
            <p className="text-foreground-dark/90 text-lg md:text-xl max-w-3xl mb-6">
              {template.description}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                {template.rating && (
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star} 
                          className={`text-lg ${star <= Math.round(template.rating || 0) ? 'text-accent' : 'text-gray-500'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-white font-medium">{template.rating?.toFixed(1)}</span>
                  </div>
                )}
              </div>
              
              {template.sales && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="text-foreground-dark/80">{template.sales} ventes</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Colonne de gauche (détails) */}
            <div className="lg:col-span-2">
              <div className="glass-effect p-1 rounded-lg mb-8">
                <div className="flex overflow-x-auto hide-scrollbar">
                  {['details', 'screenshots', 'architecture', 'requirements'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 whitespace-nowrap text-sm font-medium capitalize rounded-lg transition-colors ${
                        activeTab === tab 
                          ? 'bg-accent/20 text-white' 
                          : 'text-foreground-dark/70 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                {renderTabContent()}
              </div>
            </div>

            {/* Colonne de droite (achat) */}
            <div className="lg:col-span-1">
              <motion.div 
                className="glass-effect p-6 rounded-lg sticky top-24"
                id="buy-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mb-6">
                  <div className="flex items-baseline">
                    {template.discountPrice ? (
                      <>
                        <span className="text-3xl font-bold text-white">{template.discountPrice.toFixed(2)} €</span>
                        <span className="ml-3 text-foreground-dark/70 line-through text-lg">{template.price.toFixed(2)} €</span>
                        <span className="ml-3 bg-accent/20 text-accent px-2 py-0.5 rounded text-sm font-semibold">
                          -{Math.round((template.price - (template.discountPrice || 0)) / template.price * 100)}%
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-white">{template.price.toFixed(2)} €</span>
                    )}
                  </div>
                  
                  <p className="text-foreground-dark/60 text-sm mt-2">
                    Prix HT, TVA non applicable
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Licence commerciale</p>
                      <p className="text-foreground-dark/70 text-sm">Pour une utilisation sur un projet unique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Mises à jour gratuites</p>
                      <p className="text-foreground-dark/70 text-sm">Pour une durée de 12 mois</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Support technique</p>
                      <p className="text-foreground-dark/70 text-sm">6 mois d&apos;assistance par email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Documentation complète</p>
                      <p className="text-foreground-dark/70 text-sm">Guide d&apos;installation et d&apos;utilisation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-accent text-dark-blue font-semibold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    Acheter maintenant
                  </button>
                  
                  <a 
                    href={template.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border border-accent/30 text-accent font-medium py-3 px-6 rounded-lg hover:bg-accent/10 transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Voir la démo
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-foreground-dark/10">
                  <p className="text-center text-foreground-dark/60 text-sm">
                    Besoin d&apos;une licence multiple ou d&apos;une personnalisation?
                  </p>
                  <Link 
                    href="/#contact" 
                    className="text-accent text-center hover:text-accent/80 block mt-1 text-sm"
                  >
                    Contactez-nous pour un devis
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Section similaire */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
              <span className="blue-gradient-text">Autres templates similaires</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templateData
                .filter(t => t.id !== template.id)
                .slice(0, 3)
                .map(relatedTemplate => (
                  <motion.div 
                    key={relatedTemplate.id}
                    className="glass-effect p-4 rounded-lg"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <Link href={`/template/${relatedTemplate.id}`} className="block group">
                      <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={relatedTemplate.imageUrl}
                          alt={relatedTemplate.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-4 right-0">
                          <div className="flex gap-2 flex-wrap">
                            {relatedTemplate.technologies.slice(0, 2).map(tech => (
                              <span key={tech} className="glass-effect text-xs text-white px-2 py-0.5 rounded-full">
                                {tech}
                              </span>
                            ))}
                            {relatedTemplate.technologies.length > 2 && (
                              <span className="glass-effect text-xs text-white px-2 py-0.5 rounded-full">
                                +{relatedTemplate.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {relatedTemplate.title}
                      </h3>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          {relatedTemplate.discountPrice ? (
                            <div className="flex items-baseline">
                              <span className="text-white font-semibold">{relatedTemplate.discountPrice.toFixed(2)} €</span>
                              <span className="ml-2 text-foreground-dark/70 line-through text-xs">{relatedTemplate.price.toFixed(2)} €</span>
                            </div>
                          ) : (
                            <span className="text-white font-semibold">{relatedTemplate.price.toFixed(2)} €</span>
                          )}
                        </div>
                        
                        <span className="text-accent text-sm flex items-center">
                          Voir détails
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}