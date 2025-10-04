import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');

  // Informations personnelles - À mettre à jour selon votre CV
  const personalInfo = {
    name: "Samar Jelassi",
    title: "Développeur Full-Stack & Étudiant en Informatique",
    location: "Sousse, Tunisie",
    email: "samar.jelassi.dev@gmail.com",
    phone: "+216 29 123 456",
    linkedin: "linkedin.com/in/samar-jelassi",
    github: "github.com/samarjelassi58"
  };

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percentage: 100 },
    { name: "Français", level: "Courant (C1)", percentage: 90 },
    { name: "Anglais", level: "Intermédiaire (B2)", percentage: 75 }
  ];

  const skills = {
    frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "SASS"],
    backend: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django", "REST API", "GraphQL"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
    tools: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman", "Linux", "AWS", "Heroku"]
  };

  const experience = [
    {
      title: "Développeur Web Freelance",
      company: "Projets personnels",
      period: "2022 - Présent",
      description: "Développement d'applications web et sites internet pour divers clients",
      achievements: [
        "Création de 8+ sites web responsives",
        "Développement d'une application e-commerce complète",
        "Intégration d'APIs tierces (paiement, géolocalisation)",
        "Optimisation SEO et performance web"
      ]
    },
    {
      title: "Stage Développeur Full-Stack",
      company: "TechStart Sousse",
      period: "Été 2023",
      description: "Stage de 2 mois dans une startup technologique",
      achievements: [
        "Participation au développement d'une application mobile",
        "Création d'une API REST avec Node.js",
        "Collaboration en équipe avec méthodologie Agile",
        "Tests unitaires et débogage"
      ]
    }
  ];

  const education = [
    {
      degree: "Licence Appliquée en Développement de Systèmes d'Information",
      school: "École Polytechnique Internationale de Sousse (EPISousse)",
      year: "2021 - 2024",
      description: "Formation spécialisée en développement web, mobile et gestion de bases de données"
    },
    {
      degree: "Baccalauréat Mathématiques",
      school: "Lycée Tahar Sfar, Sousse",
      year: "2021",
      description: "Mention Bien - Section Mathématiques"
    }
  ];

  const tabs = [
    { id: 'experience', label: 'Expérience', icon: '💼' },
    { id: 'skills', label: 'Compétences', icon: '🚀' },
    { id: 'education', label: 'Formation', icon: '🎓' },
    { id: 'languages', label: 'Langues', icon: '🌍' }
  ];

  return (
     <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <img 
                  src="https://ui-avatars.com/api/?name=Samar+Jelassi&background=3b82f6&color=fff&size=140&bold=true" 
                  alt="Samar Jelassi" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-black mb-4 text-gradient">
            {personalInfo.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
            {personalInfo.title}
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{personalInfo.location}</span>
          </div>

          {/* Contact Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={`mailto:${personalInfo.email}`} className="btn-modern">
              <span>📧</span>
              <span>Email</span>
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn-modern">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="btn-modern">
              <span>🐱</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fadeInUp">
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Expérience Professionnelle
              </h2>
              {experience.map((exp, index) => (
                <div key={index} className="card-modern">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Compétences Techniques
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-modern">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <span>🎨</span>
                    <span>Frontend</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-modern">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                    <span>⚙️</span>
                    <span>Backend</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-modern">
                  <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4 flex items-center gap-2">
                    <span>🗄️</span>
                    <span>Base de données</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-modern">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                    <span>🛠️</span>
                    <span>Outils</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Formation
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="card-modern">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{edu.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'languages' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Langues
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="card-modern text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{lang.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{lang.level}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="card-modern inline-block">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Intéressé par une collaboration ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Je suis toujours ouvert aux nouvelles opportunités et projets passionnants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-modern">
                <span>📧</span>
                <span>Me contacter</span>
              </a>
              <a href="/projects" className="btn-modern bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white hover:bg-white/30">
                <span>🚀</span>
                <span>Voir mes projets</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
