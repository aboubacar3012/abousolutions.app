'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Définir les technologies
const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" }, // Using OpenJDK as a common Java icon
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
        { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000" },
        { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
        { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
      ]
    }
  ];

// Aplatir la liste de toutes les technologies
const allTechItems = technologies.flatMap(category => category.items);

export default function TechAnimation() {
  const [selectedTech, setSelectedTech] = useState<{ name: string; icon: string }[]>([]);

  // Sélectionner aléatoirement 10 technologies au montage
  useEffect(() => {
    const shuffled = [...allTechItems].sort(() => 0.5 - Math.random());
    setSelectedTech(shuffled.slice(0, 12));
  }, []); // Exécuter une seule fois au montage

  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      {selectedTech.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center justify-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg aspect-square"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0], // Animation flottante simple
          }}
          transition={{
            delay: 0.8 + index * 0.1, // Délai staggered
            duration: 4 + Math.random() * 2, // Durée variable
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1, y: -15, transition: { duration: 0.3 } }} // Effet au survol
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-8 w-8 md:h-10 md:w-10 object-contain mb-1"
            // Style pour inverser les icônes blanches si nécessaire
            style={tech.name === 'Java' || tech.name === 'Next.js' ? { filter: 'invert(1)' } : {}}
          />
          <span className="text-xs text-center text-gray-300/80 hidden sm:block">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
