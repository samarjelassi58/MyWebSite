import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-5rem)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gradient">
            {t("projects:title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t("projects:subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t('projects:projects.items', { returnObjects: true }).map((project, index) => (
              <div key={index} className="card-modern group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-2h6a1 1 0 011 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="card-modern inline-block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Intéressé par une collaboration ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
                Discutons de votre prochain projet et voyons comment nous pouvons travailler ensemble.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-modern group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Me Contacter</span>
                </Link>
                <Link to="/about" className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>En Savoir Plus</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}