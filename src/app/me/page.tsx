'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types pour notre CV
interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Skill {
  name: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

// Notre CV data
const CV_DATA = {
  name: "Aboubacar",
  title: "Développeur Web & Mobile",
  about: "Passionné par le développement d'applications web et mobiles innovantes, j'aime construire des expériences numériques modernes qui résolvent des problèmes réels. J'ai une expertise particulière dans les technologies React, Next.js et Node.js, avec un fort penchant pour les interfaces utilisateur élégantes et performantes.",
  experiences: [
    {
      id: "exp1",
      company: "AbouSolutions",
      position: "Fondateur & Lead Developer",
      period: "2023 - Présent",
      description: [
        "Développement de MVPs pour startups",
        "Création de templates web adaptés aux besoins spécifiques",
        "Consultations en architecture technique",
        "Optimisation SEO et performance d'applications web"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "exp2",
      company: "Agence Web",
      position: "Développeur Full Stack Senior",
      period: "2020 - 2023",
      description: [
        "Développement d'applications web pour des clients de divers secteurs",
        "Architecture de solutions cloud et serverless",
        "Collaboration avec des équipes multidisciplinaires",
        "Mentorat de développeurs juniors"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: "exp3",
      company: "Startup Tech",
      position: "Développeur Frontend",
      period: "2018 - 2020",
      description: [
        "Développement d'interfaces utilisateur réactives",
        "Intégration d'APIs et services tiers",
        "Optimisation de la vitesse de chargement",
        "Tests unitaires et d'intégration"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Jest"]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "École d'Ingénieur",
      degree: "Diplôme d'Ingénieur en Informatique",
      period: "2015 - 2018"
    },
    {
      id: "edu2",
      institution: "Université Tech",
      degree: "Licence en Développement Web",
      period: "2012 - 2015"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Plateforme E-commerce",
      description: "Solution e-commerce personnalisée avec paiement intégré et gestion d'inventaire en temps réel.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
      link: "https://projet-ecommerce.com"
    },
    {
      id: "proj2",
      title: "Application de Suivi Fitness",
      description: "Application mobile permettant aux utilisateurs de suivre leurs activités physiques et leur nutrition.",
      technologies: ["React Native", "Firebase", "GraphQL"],
      link: "https://fitness-tracker-app.com"
    },
    {
      id: "proj3",
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour visualiser et analyser des données commerciales en temps réel.",
      technologies: ["D3.js", "React", "Node.js", "PostgreSQL"],
      link: "https://analytics-dashboard.com"
    }
  ],
  skills: [
    { name: "Next.js", level: 9, category: "frontend" },
    { name: "React", level: 9, category: "frontend" },
    { name: "TypeScript", level: 8, category: "frontend" },
    { name: "Tailwind CSS", level: 9, category: "frontend" },
    { name: "Node.js", level: 8, category: "backend" },
    { name: "Express", level: 8, category: "backend" },
    { name: "MongoDB", level: 7, category: "backend" },
    { name: "PostgreSQL", level: 6, category: "backend" },
    { name: "AWS", level: 7, category: "tools" },
    { name: "Docker", level: 6, category: "tools" },
    { name: "Git", level: 8, category: "tools" },
    { name: "Figma", level: 7, category: "design" },
    { name: "UI/UX Design", level: 7, category: "design" }
  ],
  contact: {
    email: "contact@abousolutions.com",
    github: "github.com/aboubacar",
    linkedin: "linkedin.com/in/aboubacar",
    twitter: "twitter.com/aboubacar"
  }
};

const InteractiveCV = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [selectedExperience, setSelectedExperience] = useState<string>(CV_DATA.experiences[0].id);
  const [selectedProject, setSelectedProject] = useState<string>(CV_DATA.projects[0].id);
  const [skillFilter, setSkillFilter] = useState<string>("all");
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 70 }
    }
  };

  const tabVariants = {
    inactive: { 
      opacity: 0.7,
      y: 0 
    },
    active: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-foreground-dark py-12 md:py-20 px-4 md:px-8">
      {/* Layout de la grille principale */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Sidebar - Info personnelle (fixe sur desktop) */}
        <aside className="lg:col-span-3 lg:sticky lg:top-20 lg:self-start h-fit">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 glass-effect rounded-xl"
          >
            <div className="text-center mb-6">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto mb-6 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center overflow-hidden border-4 border-primary/20"
              >
                <span className="text-4xl font-light">{CV_DATA.name.charAt(0)}</span>
              </motion.div>
              
              <h1 className="text-2xl font-light tracking-wide text-white mb-1">{CV_DATA.name}</h1>
              <p className="text-sm font-medium tracking-wider text-accent uppercase">{CV_DATA.title}</p>
            </div>

            <div className="space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-foreground-dark/70 border-b border-primary/20 pb-2 mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-3 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href={`mailto:${CV_DATA.contact.email}`} className="text-foreground-dark hover:text-accent transition-colors">
                      {CV_DATA.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-3 text-accent/70" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    <a href={`https://${CV_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-foreground-dark hover:text-accent transition-colors">
                      github.com/aboubacar
                    </a>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-3 text-accent/70" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                    <a href={`https://${CV_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-foreground-dark hover:text-accent transition-colors">
                      linkedin.com/in/aboubacar
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Langues */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-foreground-dark/70 border-b border-primary/20 pb-2 mb-4">Langues</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-foreground-dark">Français</span>
                      <span className="text-foreground-dark/70">Natif</span>
                    </div>
                    <div className="w-full bg-dark-blue rounded-full h-1">
                      <div className="h-1 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-foreground-dark">Anglais</span>
                      <span className="text-foreground-dark/70">Courant</span>
                    </div>
                    <div className="w-full bg-dark-blue rounded-full h-1">
                      <div className="h-1 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Télécharger CV - Optionnel */}
              <div className="pt-4">
                <a 
                  href="#" 
                  className="block w-full text-center border border-primary/30 hover:border-accent/50 bg-transparent hover:bg-primary/10 text-foreground-dark px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Télécharger CV
                </a>
              </div>
            </div>
          </motion.div>
        </aside>
        
        {/* Contenu principal */}
        <main className="lg:col-span-9">
          {/* Navigation Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 border-b border-primary/20"
          >
            <nav className="flex space-x-1 md:space-x-4 overflow-x-auto scrollbar-hide pb-px">
              {["about", "experience", "skills", "education", "projects"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-4 text-sm font-medium tracking-wide whitespace-nowrap focus:outline-none ${
                    activeSection === section 
                      ? 'blue-gradient-text border-b border-accent' 
                      : 'text-foreground-dark/70 hover:text-accent'
                  }`}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeSection === section ? "active" : "inactive"}
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </nav>
          </motion.div>
          
          {/* Dynamic Content Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
            
              {/* About Section */}
              {activeSection === "about" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-10"
                >
                  <motion.div variants={itemVariants} className="glass-effect rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-light text-white mb-6 tracking-wide border-b border-primary/20 pb-3">À propos de moi</h2>
                    <p className="text-foreground-dark/85 leading-relaxed text-base">{CV_DATA.about}</p>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-light text-white mb-4">Mes valeurs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {["Qualité", "Innovation", "Apprentissage continu", "Collaboration"].map((value, idx) => (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center text-foreground-dark bg-card-bg/50 rounded-md p-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                            <span className="text-sm">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="glass-effect rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-light text-white mb-6 tracking-wide border-b border-primary/20 pb-3">En résumé</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center justify-center p-4 bg-card-bg/50 rounded-xl">
                        <span className="text-2xl font-light text-accent mb-1">5+</span>
                        <span className="text-xs text-foreground-dark/70 uppercase tracking-wider">années d'expérience</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-4 bg-card-bg/50 rounded-xl">
                        <span className="text-2xl font-light text-accent mb-1">20+</span>
                        <span className="text-xs text-foreground-dark/70 uppercase tracking-wider">projets réalisés</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-4 bg-card-bg/50 rounded-xl">
                        <span className="text-2xl font-light text-accent mb-1">15+</span>
                        <span className="text-xs text-foreground-dark/70 uppercase tracking-wider">technologies maîtrisées</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Experience Section */}
              {activeSection === "experience" && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <h2 className="text-xl font-light text-white mb-4 tracking-wide lg:sticky lg:top-24">Expérience</h2>
                      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {CV_DATA.experiences.map((exp) => (
                          <motion.button
                            key={exp.id}
                            onClick={() => setSelectedExperience(exp.id)}
                            className={`text-left px-4 py-3 rounded-md min-w-[160px] ${
                              selectedExperience === exp.id 
                                ? 'bg-card-bg border-l-2 border-accent' 
                                : 'bg-transparent hover:bg-card-bg/50 border-l-2 border-transparent'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          >
                            <h3 className={`text-sm font-normal ${selectedExperience === exp.id ? 'text-accent' : 'text-foreground-dark/80'}`}>
                              {exp.position}
                            </h3>
                            <p className="text-xs text-foreground-dark/60 mt-1">{exp.company}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <AnimatePresence mode="wait">
                        {CV_DATA.experiences.map((exp) => (
                          exp.id === selectedExperience && (
                            <motion.div
                              key={exp.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="glass-effect rounded-xl p-6 md:p-8"
                            >
                              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 pb-6 border-b border-primary/20">
                                <div>
                                  <h3 className="text-lg font-light text-white">{exp.position}</h3>
                                  <p className="text-accent mt-1">{exp.company}</p>
                                </div>
                                <p className="text-sm text-foreground-dark/60 mt-2 md:mt-0 font-mono">{exp.period}</p>
                              </div>
                              
                              <div className="space-y-6">
                                <div>
                                  <h4 className="text-base font-light text-white mb-3">Responsabilités</h4>
                                  <ul className="space-y-2">
                                    {exp.description.map((item, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start text-foreground-dark/85 text-sm"
                                      >
                                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                                        <span>{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="text-base font-light text-white mb-3">Technologies</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-card-bg text-accent text-xs rounded-md"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Skills Section */}
              {activeSection === "skills" && (
                <div className="space-y-8">
                  <div className="glass-effect rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-light text-white mb-6 tracking-wide border-b border-primary/20 pb-3">Compétences</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <button
                        onClick={() => setSkillFilter("all")}
                        className={`px-3 py-1 text-xs rounded-md transition-colors ${
                          skillFilter === "all" 
                            ? "bg-gradient-to-r from-primary to-accent text-white" 
                            : "bg-card-bg text-foreground-dark/80 hover:bg-card-hover"
                        }`}
                      >
                        Toutes
                      </button>
                      {["frontend", "backend", "design", "tools"].map((category) => (
                        <button
                          key={category}
                          onClick={() => setSkillFilter(category)}
                          className={`px-3 py-1 text-xs rounded-md transition-colors ${
                            skillFilter === category 
                              ? "bg-gradient-to-r from-primary to-accent text-white" 
                              : "bg-card-bg text-foreground-dark/80 hover:bg-card-hover"
                          }`}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      ))}
                    </div>
                    
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <AnimatePresence>
                        {CV_DATA.skills
                          .filter(skill => skillFilter === "all" || skill.category === skillFilter)
                          .map((skill) => (
                            <motion.div
                              key={skill.name}
                              layout
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-card-bg p-4 rounded-md"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-foreground-dark">{skill.name}</span>
                                <span className="text-xs text-accent/80">{skill.level}/10</span>
                              </div>
                              <div className="w-full bg-dark-blue rounded-full h-1">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level * 10}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-1 rounded-full bg-gradient-to-r from-primary to-accent"
                                ></motion.div>
                              </div>
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              )}
              
              {/* Education Section */}
              {activeSection === "education" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="glass-effect rounded-xl p-6 md:p-8"
                >
                  <h2 className="text-xl font-light text-white mb-6 tracking-wide border-b border-primary/20 pb-3">Formation</h2>
                  
                  <div className="space-y-8">
                    {CV_DATA.education.map((edu, idx) => (
                      <motion.div
                        key={edu.id}
                        variants={itemVariants}
                        className={`relative pl-6 ${
                          idx !== CV_DATA.education.length - 1 ? 'pb-8 border-l border-primary/30' : ''
                        }`}
                      >
                        <div className="absolute w-3 h-3 bg-card-bg border border-accent rounded-full -left-1.5"></div>
                        <div className="mb-1 font-mono text-xs text-foreground-dark/60">{edu.period}</div>
                        <h3 className="text-lg font-light text-white">{edu.degree}</h3>
                        <p className="text-accent text-sm mt-1">{edu.institution}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Projects Section */}
              {activeSection === "projects" && (
                <div className="space-y-8">
                  <div className="glass-effect rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-light text-white mb-6 tracking-wide border-b border-primary/20 pb-3">Projets</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {CV_DATA.projects.map((project) => (
                        <motion.div
                          key={project.id}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="bg-card-bg p-5 rounded-lg border border-primary/20 hover:border-accent/40 transition-colors hover:neon-glow-blue"
                        >
                          <h3 className="text-base font-normal text-white mb-2">{project.title}</h3>
                          <p className="text-foreground-dark/75 text-sm mb-4 line-clamp-3">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-card-hover text-accent/80 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-accent text-xs border-b border-dotted border-primary/30 hover:border-accent transition-colors"
                            >
                              Voir le projet
                              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </a>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      {/* Background elements similaires à IntroSection */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Main gradient blob */}
        <motion.div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/8 rounded-full blur-[120px]"
          animate={{
            x: [20, -15, 20],
            y: [-20, 15, -20],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary accent blob */}
        <motion.div
          className="absolute bottom-20 -left-20 w-2/3 h-2/3 bg-accent/8 rounded-full blur-[100px]"
          animate={{
            x: [-15, 20, -15],
            y: [15, -20, 15],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Tertiary subtle blob */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[80px]"
          animate={{
            x: [10, -10, 10],
            y: [-10, 10, -10],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default InteractiveCV;