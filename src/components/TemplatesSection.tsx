"use client";
import { useState } from "react";
import TemplateCard from "./TemplateCard";
import TemplateFilter from "./TemplateFilter";

// Données de démonstration pour les templates
const templateData = [
  {
    id: "1",
    title: "Dashboard NextJS",
    description:
      "Template moderne de dashboard administratif avec authentification, tableaux de bord et panneaux d'administration.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind"],
    demoUrl: "/demo/dashboard-nextjs",
    price: 79.99,
    discountPrice: 59.99,
    rating: 4.8,
    sales: 124,
    features: [
      "Authentication JWT", 
      "Dashboard analytics", 
      "User management", 
      "Dark & Light mode",
      "Responsive design"
    ],
    screenshots: [
      "/screenshots/dashboard-1.jpg",
      "/screenshots/dashboard-2.jpg",
      "/screenshots/dashboard-3.jpg"
    ]
  },
  {
    id: "2",
    title: "E-commerce PWA",
    description:
      "Solution e-commerce complète avec panier, paiement et gestion des produits. Compatible PWA pour mobile.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    technologies: ["PWA", "React", "Node.js"],
    demoUrl: "/demo/ecommerce-pwa",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.9,
    sales: 87,
    features: [
      "Panier d'achat", 
      "Passerelle de paiement", 
      "Gestion des produits", 
      "PWA mobile optimisée",
      "SEO optimisé"
    ],
    screenshots: [
      "/screenshots/ecommerce-1.jpg",
      "/screenshots/ecommerce-2.jpg",
      "/screenshots/ecommerce-3.jpg"
    ]
  },
  {
    id: "3",
    title: "Application Desktop",
    description:
      "Application desktop cross-platform développée avec Electron pour Windows, Mac et Linux.",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    technologies: ["Desktop", "Electron", "Vue.js"],
    demoUrl: "/demo/desktop-app",
    price: 149.99,
    discountPrice: 119.99,
    rating: 4.6,
    sales: 52,
    features: [
      "Installation cross-platform", 
      "Synchronisation cloud", 
      "Mises à jour automatiques", 
      "Plugins système",
      "Fonctionnalités hors ligne"
    ],
    screenshots: [
      "/screenshots/desktop-1.jpg",
      "/screenshots/desktop-2.jpg",
      "/screenshots/desktop-3.jpg"
    ]
  },
  {
    id: "4",
    title: "CRM Entreprise",
    description:
      "Système CRM complet pour la gestion des clients, des ventes et du marketing.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    demoUrl: "/demo/crm-entreprise",
    price: 199.99,
    discountPrice: 159.99,
    rating: 4.7,
    sales: 73,
    features: [
      "Gestion des contacts", 
      "Pipeline de ventes", 
      "Automatisation marketing", 
      "Rapports analytiques",
      "Intégrations API"
    ],
    screenshots: [
      "/screenshots/crm-1.jpg",
      "/screenshots/crm-2.jpg",
      "/screenshots/crm-3.jpg"
    ]
  },
];

const TemplatesSection = () => {
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

  // Extraire toutes les technologies uniques pour le filtre
  const allTechnologies = Array.from(
    new Set(templateData.flatMap(template => template.technologies))
  );

  return (
    <div>
      {/* Section Templates */}
      <section id="templates" className="py-16 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="blue-gradient-text">Templates Professionnels</span>
            </h2>
            <p className="text-foreground-dark/80 max-w-3xl mx-auto">
              Découvrez notre collection de templates premium conçus pour accélérer vos projets.
              Chaque solution est entièrement personnalisable et livrée avec une documentation complète.
            </p>
          </div>

          {/* Ajout du filtre de templates */}
          <TemplateFilter 
            technologies={allTechnologies} 
            onFilterChange={handleFilterChange} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                id={template.id}
                title={template.title}
                description={template.description}
                imageUrl={template.imageUrl}
                technologies={template.technologies}
                demoUrl={template.demoUrl}
                price={template.price}
                discountPrice={template.discountPrice}
                rating={template.rating}
                sales={template.sales}
              />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground-dark/80">
                Aucun template ne correspond à vos critères.
              </p>
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
    </div>
  );
};

export default TemplatesSection;
