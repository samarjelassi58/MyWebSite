import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="max-w-3xl mx-auto mt-12 p-10 bg-gradient-to-br from-palette-beige/30 via-white to-palette-turquoise/20 dark:from-palette-bleuFonce dark:via-palette-bleu/80 dark:to-palette-bleuClair/30 rounded-2xl shadow-2xl text-center border border-palette-turquoise/20 dark:border-palette-bleuClair/30">
      <img src="/vite.svg" alt="Portfolio" className="mx-auto mb-6 w-24 h-24 rounded-full shadow-lg border-4 border-palette-turquoise dark:border-palette-beige" />
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-palette-bleu via-palette-bleuClair to-palette-turquoise dark:from-palette-turquoise dark:via-palette-beige dark:to-palette-jaune bg-clip-text text-transparent tracking-tight drop-shadow">{t('home.title')}</h1>
      <p className="text-xl text-palette-bleuFonce dark:text-palette-beige leading-relaxed mb-6">{t('home.intro')}</p>
      <div className="flex justify-center gap-6 mt-8">
        <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">{t('home.cta_projects', 'Voir mes projets')}</a>
        <a href="#contact" className="px-6 py-3 bg-white dark:bg-palette-bleuFonce text-palette-bleu dark:text-palette-beige border border-palette-bleu dark:border-palette-turquoise rounded-lg shadow-lg hover:bg-palette-beige/20 dark:hover:bg-palette-bleu/30 hover:scale-105 transition-all duration-300 font-semibold">{t('home.cta_contact', 'Contactez-moi')}</a>
      </div>
    </section>
  );
}
