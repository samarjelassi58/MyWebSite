import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', labelKey: 'navigation:home' },
  { to: '/about', labelKey: 'navigation:about' },
  { to: '/projects', labelKey: 'navigation:projects' },
  { to: '/contact', labelKey: 'navigation:contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();

  const links = navLinks.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      onClick={() => setIsMobileMenuOpen(false)}
      className={`site-nav-link ${pathname === link.to ? 'is-active' : ''}`}
      aria-current={pathname === link.to ? 'page' : undefined}
    >
      {t(link.labelKey)}
    </Link>
  ));

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="site-brand-mark">SJ</span>
          <span className="site-brand-name">Samar Jelassi</span>
        </Link>
        <nav className="site-desktop-nav" aria-label={t('navigation:menu')}>{links}</nav>
        <div className="site-header-actions">
          <div className="site-language" aria-label={t('navigation:language')}>
            {['fr', 'en'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => i18n.changeLanguage(lang)}
                aria-pressed={i18n.resolvedLanguage === lang}
                className={i18n.resolvedLanguage === lang ? 'is-active' : ''}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="site-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t(isMobileMenuOpen ? 'navigation:closeMenu' : 'navigation:openMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <nav id="mobile-navigation" className="site-mobile-nav" aria-label={t('navigation:menu')}>{links}</nav>}
    </header>
  );
}
