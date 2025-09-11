import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinks = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/projects", labelKey: "nav.projects" },
  { to: "/contact", labelKey: "nav.contact" },
];

const Header = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <header className="relative bg-gradient-to-r from-palette-beige/30 via-white to-palette-beige/30 dark:from-palette-bleuFonce dark:via-palette-bleu/80 dark:to-palette-bleuFonce backdrop-blur-md shadow-xl border-b border-palette-turquoise/20 dark:border-palette-bleuClair/30">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-palette-bleu/5 via-palette-turquoise/5 to-palette-bleuClair/5 dark:from-palette-turquoise/10 dark:via-palette-bleuClair/10 dark:to-palette-beige/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 lg:py-8">
          {/* Logo/Brand Section */}
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
            <div className="group cursor-pointer">
              <h1 className="text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-palette-bleu via-palette-bleuClair to-palette-turquoise dark:from-palette-turquoise dark:via-palette-beige dark:to-palette-jaune bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Samar Jelassi
              </h1>
              <div className="h-1 bg-gradient-to-r from-palette-bleu to-palette-turquoise rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
            {/* Main Navigation */}
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group relative px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palette-bleuClair/50
                    ${location.pathname === link.to 
                      ? "bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white shadow-lg shadow-palette-turquoise/25 dark:shadow-palette-bleuClair/20" 
                      : "bg-white/70 dark:bg-palette-bleuFonce/70 text-palette-bleuFonce dark:text-palette-beige hover:bg-white dark:hover:bg-palette-bleu/50 shadow-md hover:shadow-lg border border-palette-turquoise/30 dark:border-palette-bleuClair/30 backdrop-blur-sm"
                    }
                  `}
                >
                  <span className="relative z-10">{t(link.labelKey)}</span>
                  {location.pathname !== link.to && (
                    <div className="absolute inset-0 bg-gradient-to-r from-palette-bleu/10 to-palette-turquoise/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white/80 dark:bg-palette-bleuFonce/80 rounded-full shadow-lg border border-palette-turquoise/30 dark:border-palette-bleuClair/30 backdrop-blur-sm">
              {['fr', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`relative px-3 py-1.5 rounded-full font-bold text-xs lg:text-sm transition-all duration-300 ease-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-palette-bleuClair/50
                    ${currentLang === lang
                      ? 'bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white shadow-md'
                      : 'text-palette-bleuFonce dark:text-palette-beige hover:bg-palette-beige/20 dark:hover:bg-palette-bleu/30'}
                  `}
                >
                  {lang.toUpperCase()}
                  {currentLang === lang && (
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-palette-turquoise/50 to-transparent"></div>
    </header>
  );
};

export default Header;
