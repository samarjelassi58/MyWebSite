import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <Link to="/" className="site-brand site-footer-brand">
              <span className="site-brand-mark">SJ</span>
              <span className="site-brand-name">Samar Jelassi</span>
            </Link>
            <p className="site-footer-description">{t('footer:description')}</p>
          </div>
          <div>
            <h2>{t('navigation:menu')}</h2>
            <div className="site-footer-links">
              <Link to="/about">{t('navigation:about')}</Link>
              <Link to="/projects">{t('navigation:projects')}</Link>
              <Link to="/contact">{t('navigation:contact')}</Link>
            </div>
          </div>
          <div>
            <h2>{t('footer:contact')}</h2>
            <div className="site-footer-links">
              <span>{t('footer:location')}</span>
              <a href="mailto:samar.jelassi@outlook.fr">samar.jelassi@outlook.fr</a>
              <a href="tel:+330620145790">+33 06 20 14 57 90</a>
              <div className="site-footer-social">
                <a href="https://www.linkedin.com/in/samarjelassi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/samarjelassi58" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://wa.me/33620145790" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Samar Jelassi. {t('footer:copyright')}</span>
          <span>{t('footer:madeWith')} ♥ {t('footer:inTunisia')}</span>
        </div>
      </div>
    </footer>
  );
}
