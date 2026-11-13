import React from 'react';
import { useTranslation } from 'react-i18next';

const contactMethods = [
  { key: 'email', value: 'samar.jelassi@outlook.fr', href: 'mailto:samar.jelassi@outlook.fr' },
  { key: 'phone', value: '+33 06 20 14 57 90', href: 'tel:+330620145790' },
  { key: 'linkedin', value: 'Samar Jelassi', href: 'https://www.linkedin.com/in/samarjelassi' },
  { key: 'github', value: '@samarjelassi58', href: 'https://github.com/samarjelassi58' },
  { key: 'whatsapp', value: '+33 06 20 14 57 90', href: 'https://wa.me/33620145790' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-container">
        <header className="page-heading">
          <p className="home-section-kicker">{t('home:contact.eyebrow')}</p>
          <h1>{t('contact:title')}</h1>
          <p>{t('contact:content')}</p>
        </header>
        <section aria-labelledby="contact-methods">
          <div className="home-section-heading page-section-heading">
            <p className="home-section-kicker">{t('footer:contact')}</p>
            <h2 id="contact-methods">{t('contact:contactMethods')}</h2>
          </div>
          <div className="page-grid contact-grid">
            {contactMethods.map((method, index) => (
              <a
                key={method.key}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="page-card contact-card"
              >
                <span className="home-expertise-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="contact-card-heading"><h3>{t(`contact:methods.${method.key}.title`)}</h3><span aria-hidden="true">↗</span></div>
                <strong>{method.value}</strong>
                <p>{t(`contact:methods.${method.key}.description`)}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="contact-availability">
          <span className="contact-availability-dot" aria-hidden="true" />
          <div>
            <p className="home-section-kicker">{t('contact:availability')}</p>
            <h2>{t('contact:availableStatus')}</h2>
            <p>{t('contact:responseTime')}</p>
          </div>
        </section>
        <p className="contact-privacy">{t('contact:dataProtection')}</p>
      </div>
    </div>
  );
}
