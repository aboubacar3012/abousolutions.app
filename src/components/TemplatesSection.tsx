"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
    title: "E-commerce Starter",
    description:
      "Solution complète pour votre boutique en ligne avec panier, paiements et gestion des produits.",
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "Stripe", "Tailwind", "Sanity"],
    demoUrl: "/demo/ecommerce-starter",
    price: 99.99,
    discountPrice: 69.99,
    rating: 4.7,
    sales: 98,
    features: [
      "Stripe integration", 
      "Product management", 
      "Shopping cart", 
      "User accounts", 
      "Order tracking"
    ],
    screenshots: [
      "/screenshots/ecommerce-1.jpg",
      "/screenshots/ecommerce-2.jpg",
      "/screenshots/ecommerce-3.jpg"
    ]
  },
  {
    id: "3",
    title: "Portfolio Artist",
    description:
      "Portfolio élégant pour artistes et créatifs avec galerie d'images et mise en page personnalisable.",
    imageUrl:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2274&auto=format&fit=crop",
    technologies: ["React", "Framer Motion", "GSAP", "Tailwind"],
    demoUrl: "/demo/portfolio-artist",
    price: 49.99,
    rating: 4.6,
    sales: 212,
    features: [
      "Image gallery", 
      "Smooth animations", 
      "Contact form", 
      "Blog integration", 
      "SEO optimized"
    ],
    screenshots: [
      "/screenshots/portfolio-1.jpg",
      "/screenshots/portfolio-2.jpg",
      "/screenshots/portfolio-3.jpg"
    ]
  },
  {
    id: "4",
    title: "SaaS Landing",
    description:
      "Template de landing page pour les startups SaaS avec sections de fonctionnalités, prix et témoignages.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
    demoUrl: "/demo/saas-landing",
    price: 59.99,
    discountPrice: 39.99,
    rating: 4.9,
    sales: 156,
    features: [
      "Feature showcase", 
      "Pricing tables", 
      "Testimonials", 
      "Newsletter signup", 
      "FAQ section"
    ],
    screenshots: [
      "/screenshots/saas-1.jpg",
      "/screenshots/saas-2.jpg",
      "/screenshots/saas-3.jpg"
    ]
  },
  {
    id: "5",
    title: "Blog Magazine",
    description:
      "Solution de blog magazine complet avec page d'accueil dynamique, articles et catégories personnalisables.",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind", "MDX", "Contentful"],
    demoUrl: "/demo/blog-magazine",
    price: 69.99,
    rating: 4.7,
    sales: 87,
    features: [
      "Dynamic homepage", 
      "Category pages", 
      "Article templates", 
      "Search functionality", 
      "Author profiles"
    ],
    screenshots: [
      "/screenshots/blog-1.jpg",
      "/screenshots/blog-2.jpg",
      "/screenshots/blog-3.jpg"
    ]
  },
  {
    id: "6",
    title: "Real Estate Pro",
    description:
      "Template complet pour les agences immobilières avec listings de propriétés, recherche et filtres avancés.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind", "Mapbox"],
    demoUrl: "/demo/real-estate-pro",
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.8,
    sales: 65,
    features: [
      "Property listings", 
      "Advanced search", 
      "Map integration", 
      "Virtual tours", 
      "Contact forms"
    ],
    screenshots: [
      "/screenshots/realestate-1.jpg",
      "/screenshots/realestate-2.jpg",
      "/screenshots/realestate-3.jpg"
    ]
  },
];

export default function TemplatesSection() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredTemplates = filter
    ? templateData.filter((template) =>
        template.technologies.includes(filter)
      )
    : templateData;

  return (
    <section className="py-20 md:py-28 bg-card-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient blob */}
        <motion.div
          className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary/5 rounded-full blur-[120px]"
          animate={{
            x: [20, -15, 20],
            y: [-20, 15, -20],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary accent blob */}
        <motion.div
          className="absolute bottom-20 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px]"
          animate={{
            x: [-15, 20, -15],
            y: [15, -20, 15],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Geometric accents */}
        <div className="hidden lg:block absolute top-20 left-10 w-4 h-16 border-l-2 border-primary/20 rotate-45"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-4 h-16 border-l-2 border-accent/20 -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 inline-block"
          >
            <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/10 text-primary font-medium text-sm uppercase tracking-widest shadow-sm">
              Templates Premium
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold relative inline-block z-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="blue-gradient-text">Nos Templates</span>
            <motion.span 
              className="absolute -bottom-2 left-1 right-1 h-[3px] bg-gradient-to-r from-primary via-accent to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          <motion.p
            className="mt-5 text-foreground-dark/80 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Accélérez votre développement avec nos templates premium, conçus pour vous faire gagner du temps et offrir une expérience utilisateur exceptionnelle.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TemplateFilter activeFilter={filter} setFilter={setFilter} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              title={template.title}
              description={template.description}
              imageUrl={template.imageUrl}
              price={template.price}
              discountPrice={template.discountPrice}
              technologies={template.technologies}
            />
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground-dark/80 text-lg">
              Aucun template ne correspond à ce filtre. Essayez une autre technologie.
            </p>
          </motion.div>
        )}
        
        {/* Added CTA section */}
        <motion.div
          className="mt-16 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto border border-accent/20"
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          >
            <h3 className="text-2xl font-bold mb-4">Besoin d'un template sur mesure ?</h3>
            <p className="mb-6 text-foreground-dark/90">
              Nous pouvons créer un template personnalisé qui répond parfaitement à vos besoins spécifiques.
            </p>
            <motion.a 
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-primary text-white font-medium rounded-lg shadow-lg shadow-accent/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contactez-nous
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
