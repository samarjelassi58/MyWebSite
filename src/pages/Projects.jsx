
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const sampleProjects = [
  {
    title: "Portfolio Personnel",
    description: "Site web moderne développé avec React, Tailwind CSS et i18n pour le support multilingue. Design responsive avec animations CSS avancées.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["React", "Tailwind CSS", "i18next", "Vite"],
    status: "inProgress"
  },
  {
    title: "Application de Gestion",
    description: "Application web full-stack pour la gestion de projets avec authentification utilisateur et base de données temps réel.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    status: "completed"
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour la visualisation de données avec graphiques dynamiques et export PDF/Excel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["Vue.js", "Chart.js", "Python", "FastAPI"],
    status: "inProgress"
  },
  {
    title: "API REST E-commerce",
    description: "API complète pour plateforme e-commerce avec gestion des produits, commandes, paiements et système d'authentification JWT.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["Spring Boot", "PostgreSQL", "JWT", "Swagger"],
    status: "completed"
  },
  {
    title: "Application Mobile IoT",
    description: "App React Native pour contrôler des appareils IoT connectés avec interface utilisateur intuitive et notifications push.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["React Native", "Firebase", "IoT", "Bluetooth"],
    status: "planned"
  },
  {
    title: "Système de Gestion Scolaire",
    description: "Plateforme complète pour établissements scolaires avec gestion des étudiants, cours, notes et communication parents-professeurs.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
    link: "#",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    status: "inProgress"
  }
];

export default function Projects() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-5rem)] py-12 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {t("projects:title")}
        </h1>
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {t("projects:subtitle")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Simple test cards */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Portfolio Personnel</h3>
              <p className="text-gray-600 dark:text-gray-300">Site web moderne avec React et Tailwind CSS</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Application de Gestion</h3>
              <p className="text-gray-600 dark:text-gray-300">App full-stack avec authentification</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Dashboard Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Visualisation de données interactive</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
