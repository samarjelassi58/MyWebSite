import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-5rem)] py-12 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {t("projects.title")}
        </h1>
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Page des projets en cours de chargement...
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Simple test cards */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projet 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Description du projet 1</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projet 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Description du projet 2</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projet 3</h3>
              <p className="text-gray-600 dark:text-gray-300">Description du projet 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}