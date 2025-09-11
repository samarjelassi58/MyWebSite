import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="flex justify-end gap-2 p-4">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-4 py-2 rounded-lg border transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 ${
          currentLang === 'fr'
            ? 'border-palette-bleuClair bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white'
            : 'border-palette-turquoise bg-palette-beige/20 dark:bg-palette-bleuFonce/50 text-palette-bleu dark:text-palette-turquoise hover:bg-palette-turquoise/20 dark:hover:bg-palette-bleu/30'
        }`}
      >
        {t('lang.fr', 'FR')}
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-4 py-2 rounded-lg border transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 ${
          currentLang === 'en'
            ? 'border-palette-bleuClair bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white'
            : 'border-palette-turquoise bg-palette-beige/20 dark:bg-palette-bleuFonce/50 text-palette-bleu dark:text-palette-turquoise hover:bg-palette-turquoise/20 dark:hover:bg-palette-bleu/30'
        }`}
      >
        {t('lang.en', 'EN')}
      </button>
    </div>
  );
}
