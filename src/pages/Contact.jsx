import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="max-w-2xl mx-auto mt-12 p-10 bg-gradient-to-br from-palette-beige/30 via-white to-palette-turquoise/20 dark:from-palette-bleuFonce dark:via-palette-bleu/80 dark:to-palette-bleuClair/30 rounded-2xl shadow-2xl border border-palette-turquoise/30 dark:border-palette-bleuClair/40">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-palette-bleu via-palette-bleuClair to-palette-turquoise dark:from-palette-turquoise dark:via-palette-beige dark:to-palette-jaune bg-clip-text text-transparent text-center">{t('contact.title')}</h1>
      <p className="text-lg text-palette-bleuFonce dark:text-palette-beige leading-relaxed mb-8 text-center">{t('contact.content')}</p>
      <form className="grid gap-4">
        <input 
          type="text" 
          placeholder={t('contact.name', 'Nom')} 
          className="p-4 rounded-lg border border-palette-turquoise/40 dark:border-palette-bleuClair/40 bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all" 
        />
        <input 
          type="email" 
          placeholder={t('contact.email', 'Email')} 
          className="p-4 rounded-lg border border-palette-turquoise/40 dark:border-palette-bleuClair/40 bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all" 
        />
        <textarea 
          placeholder={t('contact.message', 'Message')} 
          className="p-4 rounded-lg border border-palette-turquoise/40 dark:border-palette-bleuClair/40 bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all resize-none" 
          rows={4}
        ></textarea>
        <button 
          type="submit" 
          className="bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white py-3 px-6 rounded-lg hover:from-palette-bleuClair hover:to-palette-turquoise hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
        >
          {t('contact.send', 'Envoyer')}
        </button>
      </form>
    </section>
  );
}
