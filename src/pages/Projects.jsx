
import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";

const sampleProjects = [
  {
    title: "Portfolio Web",
    description: "Site personnel moderne avec React et Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Application Mobile",
    description: "App de gestion de tâches développée en React Native.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Dashboard Data",
    description: "Tableau de bord interactif pour la visualisation de données.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto mt-16 p-8 bg-gradient-to-br from-palette-beige/40 via-white to-palette-turquoise/20 dark:from-palette-bleuFonce dark:via-palette-bleu/80 dark:to-palette-bleuClair/30 rounded-3xl shadow-2xl border border-palette-turquoise/30 dark:border-palette-bleuClair/40">
      <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-palette-bleu via-palette-bleuClair to-palette-turquoise dark:from-palette-turquoise dark:via-palette-beige dark:to-palette-jaune text-center drop-shadow-lg">
        {t("projects.title")}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sampleProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
