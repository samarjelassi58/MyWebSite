import React from "react";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-gradient-to-br from-white via-palette-beige/10 to-palette-turquoise/10 dark:from-palette-bleuFonce dark:via-palette-bleu/60 dark:to-palette-bleuClair/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 border border-palette-turquoise/30 dark:border-palette-bleuClair/40 backdrop-blur-sm">
    {image && (
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-palette-bleu/20 to-transparent"></div>
      </div>
    )}
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-2 text-palette-bleuFonce dark:text-palette-beige">{title}</h3>
      <p className="text-palette-bleu dark:text-palette-turquoise mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white px-4 py-2 rounded-lg hover:from-palette-bleuClair hover:to-palette-turquoise hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
        >
          Voir le projet
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
