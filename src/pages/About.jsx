import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');
  const tabs = ['experience', 'skills', 'education'];
  const categories = ['frontend', 'backend', 'tools', 'learning'];

  return (
    <div className="inner-page">
      <div className="page-container">
        <header className="page-heading">
          <p className="home-section-kicker">{t('about:title')}</p>
          <h1>{t('about:hero.name')}</h1>
          <p>{t('about:hero.title')}</p>
          <span className="page-location">{t('about:hero.location')}</span>
          <div className="home-actions">
            <Link to="/contact" className="home-button home-button-primary">{t('about:cta.contact')} <span aria-hidden="true">→</span></Link>
            <Link to="/projects" className="home-button home-button-secondary">{t('about:cta.projects')}</Link>
          </div>
        </header>

        <nav className="page-tabs" aria-label={t('about:title')}>
          {tabs.map((tab) => (
            <button key={tab} type="button" className={activeTab === tab ? 'is-active' : ''} onClick={() => setActiveTab(tab)} aria-pressed={activeTab === tab}>
              {t(`about:navigation.${tab}`)}
            </button>
          ))}
        </nav>

        {activeTab === 'experience' && (
          <section aria-labelledby="experience-heading">
            <div className="home-section-heading page-section-heading">
              <p className="home-section-kicker">{t('about:title')}</p>
              <h2 id="experience-heading">{t('about:experience.title')}</h2>
            </div>
            <div className="page-list">
              {t('about:experience.items', { returnObjects: true }).map((exp) => (
                <article className="page-card" key={`${exp.organization}-${exp.period}`}>
                  <div className="page-card-heading">
                    <div><h3>{exp.title}</h3><p className="page-accent">{exp.organization}</p></div>
                    <span className="page-period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <ul className="page-bullet-list">{exp.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section aria-labelledby="skills-heading">
            <div className="home-section-heading page-section-heading">
              <p className="home-section-kicker">{t('about:title')}</p>
              <h2 id="skills-heading">{t('about:skills.title')}</h2>
            </div>
            <div className="page-grid">
              {categories.map((category) => (
                <article className="page-card" key={category}>
                  <h3>{t(`about:skills.categories.${category}.title`)}</h3>
                  <div className="home-project-tags">
                    {t(`about:skills.categories.${category}.skills`, { returnObjects: true }).map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'education' && (
          <section aria-labelledby="education-heading">
            <div className="home-section-heading page-section-heading">
              <p className="home-section-kicker">{t('about:title')}</p>
              <h2 id="education-heading">{t('about:education.title')}</h2>
            </div>
            <div className="page-list">
              {t('about:education.items', { returnObjects: true }).map((edu) => (
                <article className="page-card" key={`${edu.degree}-${edu.year}`}>
                  <div className="page-card-heading">
                    <div><h3>{edu.degree}</h3><p className="page-accent">{edu.school}</p></div>
                    <span className="page-period">{edu.year}</span>
                  </div>
                  <p>{edu.description}</p>
                </article>
              ))}
            </div>
            <div className="home-section-heading page-section-heading page-section-spaced"><h2>{t('about:languages.title')}</h2></div>
            <div className="page-grid page-language-grid">
              {t('about:languages.items', { returnObjects: true }).map((language) => (
                <article className="page-card" key={language.name}>
                  <h3>{language.name}</h3>
                  <p>{language.level} · {language.percentage}%</p>
                  <div className="page-progress"><span style={{ width: `${language.percentage}%` }} /></div>
                </article>
              ))}
            </div>
          </section>
        )}
        <section className="home-contact-strip page-section-spaced">
          <div><p className="home-section-kicker">{t('home:contact.eyebrow')}</p><h2>{t('about:cta.title')}</h2><p className="page-strip-description">{t('about:cta.description')}</p></div>
          <Link to="/contact" className="home-button home-button-primary">{t('about:cta.contact')} <span aria-hidden="true">→</span></Link>
        </section>
      </div>
    </div>
  );
}
