// Données de démonstration pour les templates avec informations détaillées
export const templateData = [
  {
    id: "1",
    title: "Dashboard NextJS",
    description:
      "Template moderne de dashboard administratif avec authentification, tableaux de bord et panneaux d'administration.",
    longDescription: 
      "Un dashboard administratif complet développé avec Next.js et Tailwind CSS, intégrant un système d'authentification sécurisé, des tableaux de bord analytiques interactifs et des interfaces d'administration puissantes. Ce template offre une base solide pour construire des applications web d'entreprise nécessitant une gestion centralisée des données et des utilisateurs. Parfait pour les startups et entreprises cherchant à accélérer leur développement sans compromis sur la qualité et l'expérience utilisateur.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind"],
    demoUrl: "/demo/dashboard-nextjs",
    price: 79.99,
    discountPrice: 59.99,
    rating: 4.8,
    sales: 124,
    features: [
      "Authentication JWT avec gestion des rôles", 
      "Dashboard analytics temps réel", 
      "Gestion complète des utilisateurs", 
      "Dark & Light mode personnalisables",
      "Design responsive pour tous appareils",
      "Tables de données avancées avec filtres et exports",
      "Charts et graphiques interactifs",
      "Formulaires avec validation",
      "Notifications en temps réel"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2038&auto=format&fit=crop"
    ],
    architecture: `
# Architecture du Dashboard NextJS

## Structure du projet
/
├── public/            # Fichiers statiques
├── src/
│   ├── components/    # Composants React réutilisables
│   │   ├── ui/        # Composants d'interface utilisateur
│   │   ├── layout/    # Composants de mise en page
│   │   └── charts/    # Composants de visualisation de données
│   ├── lib/           # Bibliothèques utilitaires
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Routes de l'application
│   ├── context/       # Contexte React global
│   ├── api/           # Routes API Next.js
│   └── styles/        # CSS et thèmes Tailwind
└── prisma/            # Schéma et migrations de base de données

## Technologies principales
- Next.js 14+
- React 18+
- Tailwind CSS 3+
- Prisma ORM
- NextAuth.js
- SWR ou React Query pour la gestion des données
- Recharts pour les visualisations
- Zod pour la validation des données
    `,
    requirements: [
      "Node.js version 16.x ou supérieure",
      "NPM 7+ ou Yarn 1.22+",
      "PostgreSQL 12+ ou MySQL 8+ (recommandé)",
      "Minimum 1GB de RAM pour le développement",
      "Connaissance basique de React et Next.js"
    ]
  },
  {
    id: "2",
    title: "E-commerce PWA",
    description:
      "Solution e-commerce complète avec panier, paiement et gestion des produits. Compatible PWA pour mobile.",
    longDescription:
      "Une solution e-commerce Progressive Web App (PWA) tout-en-un qui offre une expérience utilisateur fluide sur desktop et mobile. Ce template inclut un système de panier d'achat avancé, l'intégration de plusieurs passerelles de paiement, une gestion complète des produits et un back-office pour les administrateurs. Optimisé pour le référencement (SEO) et conçu pour fonctionner même en mode hors ligne, ce template accélère considérablement le lancement de votre boutique en ligne tout en garantissant d'excellentes performances.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    technologies: ["PWA", "React", "Node.js"],
    demoUrl: "/demo/ecommerce-pwa",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.9,
    sales: 87,
    features: [
      "Panier d'achat avec sauvegarde automatique", 
      "Intégration Stripe, PayPal et autres systèmes de paiement", 
      "Gestion complète des produits avec variations", 
      "PWA avec fonctionnalités hors ligne",
      "SEO optimisé pour Google et autres moteurs",
      "Système de recherche avancé avec filtres",
      "Gestion des stocks en temps réel",
      "Système de notation et avis clients",
      "Dashboard administrateur complet"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2070&auto=format&fit=crop"
    ],
    architecture: `
# Architecture E-commerce PWA

## Structure du projet
/
├── public/              # Fichiers statiques et service worker
├── src/
│   ├── components/      # Composants React réutilisables
│   ├── context/         # Contexte React (panier, auth, etc.)
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Routes principales
│   │   ├── api/         # API Routes Next.js
│   │   ├── products/    # Pages produits
│   │   ├── checkout/    # Process de paiement
│   │   └── account/     # Espace client
│   └── utils/           # Fonctions utilitaires
├── server/              # Backend Node.js séparé
│   ├── controllers/     # Contrôleurs API
│   ├── models/          # Modèles de données
│   ├── routes/          # Routes API
│   └── services/        # Services métier
└── config/              # Configuration de l'application

## Technologies principales
- React 18+
- Next.js avec ISR/SSG pour les pages de produits
- Node.js avec Express pour le backend
- MongoDB pour la base de données
- Redux ou Context API pour la gestion d'état
- Workbox pour les fonctionnalités PWA
- Stripe/PayPal pour les paiements
- Algolia ou MeiliSearch pour la recherche
    `,
    requirements: [
      "Node.js 16+",
      "MongoDB 4.4+ ou MongoDB Atlas",
      "Compte Stripe ou PayPal Développeur",
      "Minimum 2GB de RAM pour le développement",
      "Configuration SSL pour le déploiement en production"
    ]
  },
  {
    id: "3",
    title: "Application Desktop",
    description:
      "Application desktop cross-platform développée avec Electron pour Windows, Mac et Linux.",
    longDescription:
      "Cette application desktop cross-platform construite avec Electron offre une solution complète pour créer des applications natives pour Windows, macOS et Linux à partir d'une seule base de code. Le template inclut des fonctionnalités essentielles comme la synchronisation cloud, les mises à jour automatiques, l'intégration système native et le support hors ligne. Parfait pour les entreprises souhaitant distribuer des logiciels professionnels avec l'apparence et les fonctionnalités d'applications natives tout en réutilisant les compétences web existantes.",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    technologies: ["Desktop", "Electron", "Vue.js"],
    demoUrl: "/demo/desktop-app",
    price: 149.99,
    discountPrice: 119.99,
    rating: 4.6,
    sales: 52,
    features: [
      "Installation cross-platform (Windows, macOS, Linux)", 
      "Synchronisation des données avec le cloud", 
      "Système de mises à jour automatiques", 
      "Intégrations natives avec le système d'exploitation",
      "Fonctionnalités complètes hors ligne",
      "Base de données locale avec SQLite",
      "Support des notifications système",
      "Gestion avancée des fenêtres et des menus",
      "Outils de débogage et de surveillance"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2021&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2125&auto=format&fit=crop"
    ],
    architecture: `
# Architecture Application Desktop Electron

## Structure du projet
/
├── build/              # Scripts de build et ressources
├── dist/               # Applications compilées
├── src/
│   ├── main/           # Processus principal Electron
│   │   ├── index.js    # Point d'entrée
│   │   ├── menu.js     # Configuration des menus
│   │   └── updater.js  # Système de mise à jour
│   ├── renderer/       # Processus de rendu (Interface)
│   │   ├── components/ # Composants Vue.js
│   │   ├── views/      # Pages de l'application
│   │   ├── store/      # Gestion d'état Vuex
│   │   └── App.vue     # Composant racine
│   └── common/         # Code partagé
├── static/             # Fichiers statiques
└── electron-builder.json # Configuration du build

## Technologies principales
- Electron 22+
- Vue.js 3+ (ou React selon préférence)
- Vuex pour la gestion d'état
- SQLite pour la base de données locale
- electron-updater pour les mises à jour automatiques
- electron-store pour la persistance des préférences
- Vue Router pour la navigation
    `,
    requirements: [
      "Node.js 16+ et npm/yarn",
      "Windows 10+, macOS 10.14+ ou Linux pour le développement",
      "Xcode pour le build macOS (sur macOS uniquement)",
      "Visual Studio Build Tools pour Windows",
      "Minimum 4GB de RAM recommandé"
    ]
  },
  {
    id: "4",
    title: "CRM Entreprise",
    description:
      "Système CRM complet pour la gestion des clients, des ventes et du marketing.",
    longDescription:
      "Un système de gestion de la relation client (CRM) complet et moderne conçu pour les entreprises de toutes tailles. Ce template offre des fonctionnalités avancées pour la gestion des contacts, le suivi des ventes via un pipeline visuel, l'automatisation des tâches marketing et des rapports analytiques détaillés. Sa conception modulaire permet une personnalisation facile selon les besoins spécifiques de votre entreprise et son architecture évolutive assure une performance optimale même avec une grande quantité de données.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    demoUrl: "/demo/crm-entreprise",
    price: 199.99,
    discountPrice: 159.99,
    rating: 4.7,
    sales: 73,
    features: [
      "Gestion complète des contacts et entreprises", 
      "Pipeline de ventes visuel avec drag & drop", 
      "Automatisation des campagnes marketing", 
      "Tableaux de bord et rapports analytiques personnalisables",
      "Intégration avec des services tiers (Gmail, Outlook, etc.)",
      "Système d'alertes et de rappels",
      "Gestion des tâches et calendrier",
      "Suivi des interactions clients",
      "Modules de facturation et devis"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=2074&auto=format&fit=crop"
    ],
    architecture: `
# Architecture CRM Entreprise

## Structure du projet
/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React partagés
│   │   ├── ui/          # Composants UI réutilisables
│   │   ├── forms/       # Composants de formulaire
│   │   └── modules/     # Composants spécifiques aux modules
│   ├── pages/           # Routes Next.js
│   │   ├── api/         # API Routes
│   │   ├── contacts/    # Module contacts
│   │   ├── deals/       # Module ventes
│   │   └── marketing/   # Module marketing
│   ├── lib/             # Bibliothèques et utilitaires
│   ├── services/        # Services d'API et business logic
│   ├── hooks/           # Custom hooks React
│   └── context/         # Context providers
├── prisma/              # Schéma Prisma et migrations
│   └── schema.prisma    # Modèle de données
└── config/              # Configuration de l'application

## Technologies principales
- TypeScript pour un typage fort
- Next.js avec API Routes ou tRPC
- Prisma ORM avec MongoDB ou PostgreSQL
- React Query pour la gestion des données
- NextAuth.js pour l'authentification
- TailwindCSS pour les styles
- React Hook Form pour les formulaires
- Recharts pour les visualisations de données
    `,
    requirements: [
      "Node.js 16.x ou supérieur",
      "MongoDB 5.0+ ou PostgreSQL 13+",
      "Redis pour la mise en cache (recommandé)",
      "Minimum 4GB de RAM pour l'environnement de développement",
      "Un compte email SMTP pour les notifications"
    ]
  },
];