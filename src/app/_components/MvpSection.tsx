'use client';

import ServiceCard from "@/src/components/ServiceCard";



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
      'Jusqu\'à 12 écrans',
      'Jusqu\'à 5 fonctionnalités',
      'Livré en 12 semaines',
      'Design inclus',
      'Maintenance 4 semaines',
      'Mise en ligne (Play Store et App Store)',
    ],
    price: '7 500€ HT',
    timeframe: '3 mois',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
    highlighted: true,
  },
  {
    title: 'ULTIMATE MVP PACKAGE',
    description: 'Solution sur mesure pour les projets ambitieux nécessitant une solution mobile complète.',
    features: [
      'Écrans illimités',
      'Fonctionnalités illimitées',
      'Livraison flexible',
      'Design inclus',
      'Maintenance 4 semaines',
      'Mise en ligne (Play Store et App Store)',
    ],
    price: 'Sur devis',
    timeframe: '+ de 3 mois',
    buttonText: 'Obtenir un devis',
    buttonLink: '/contact',
  }
];

export default function MvpSection() {
  return (
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
  );
}