import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const expertiseKeys = ['frontend', 'backend', 'learning'];
const featuredProjectIndexes = [0, 1, 3];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const projects = t('projects:projects.items', { returnObjects: true });
  const featuredProjects = featuredProjectIndexes
    .map((index) => projects[index])
    .filter(Boolean);

  return (
    <div className="home-page">
      <div className="mx-auto max-w-6xl px-6">
        <section className="home-hero">
          <div className="home-hero-copy">
            <p className="home-availability">
              <span aria-hidden="true" />
              {t('home:availability')}
            </p>
            <p className="home-role">{t('home:role')}</p>
            <h1 className="home-heading">
              {t('home:title')}
              <span>{t('home:headline')}</span>
            </h1>
            <p className="home-intro">{t('home:intro')}</p>

            <div className="home-actions">
              <Link to="/projects" className="home-button home-button-primary">
                {t('home:cta.projects')}
                <ArrowIcon />
              </Link>
              <a
                href="/assets/Samar_Jelassi_CV.pdf"
                download="Samar_Jelassi_CV.pdf"
                className="home-button home-button-secondary"
              >
                {t('home:cta.downloadCV')}
              </a>
            </div>
          </div>

          <aside className="home-profile" aria-label={t('home:profile.title')}>
            <div className="home-profile-orbit" aria-hidden="true">
              <span>SJ</span>
            </div>
            <div className="home-profile-content">
              <p className="home-profile-label">{t('home:profile.title')}</p>
              <div>
                <p className="home-profile-key">{t('home:profile.focusLabel')}</p>
                <p className="home-profile-value">{t('home:profile.focus')}</p>
              </div>
              <div>
                <p className="home-profile-key">{t('home:profile.locationLabel')}</p>
                <p className="home-profile-value">{t('home:profile.location')}</p>
              </div>
              <div>
                <p className="home-profile-key">{t('home:profile.goalLabel')}</p>
                <p className="home-profile-value">{t('home:profile.goal')}</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="home-expertise" aria-labelledby="expertise-heading">
          <div className="home-section-heading">
            <p className="home-section-kicker">{t('home:expertise.eyebrow')}</p>
            <h2 id="expertise-heading">{t('home:expertise.title')}</h2>
          </div>
          <div className="home-expertise-grid">
            {expertiseKeys.map((key, index) => (
              <article className="home-expertise-item" key={key}>
                <span className="home-expertise-number">0{index + 1}</span>
                <h3>{t(`home:features.${key}.title`)}</h3>
                <p>{t(`home:features.${key}.description`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-work" aria-labelledby="work-heading">
          <div className="home-work-heading">
            <div className="home-section-heading">
              <p className="home-section-kicker">{t('home:work.eyebrow')}</p>
              <h2 id="work-heading">{t('home:work.title')}</h2>
            </div>
            <Link to="/projects" className="home-text-link">
              {t('home:work.viewAll')}
              <ArrowIcon />
            </Link>
          </div>

          <div className="home-project-grid">
            {featuredProjects.map((project, index) => (
              <article className="home-project-card" key={project.name}>
                <Link to="/projects" className="home-project-link" aria-label={`${t('home:cta.projects')} – ${project.name}`}>
                <div className={`home-project-visual ${project.screenshots ? 'home-project-visual-mobile' : ''}`}>
                  {project.image || project.screenshots?.[0] ? (
                    <img
                      src={project.image || project.screenshots[0]}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <div className="home-project-illustration" aria-hidden="true">
                      <span>AI / MARKET / INSIGHT</span>
                      <strong>From signals<br />to strategy.</strong>
                      <div className="home-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                  <span className="home-project-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="home-project-details">
                  <div className="home-project-title-row">
                    <h3>{project.name}</h3>
                    <ArrowIcon />
                  </div>
                  <p>{project.description}</p>
                  <div className="home-project-tags">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="home-contact-strip">
          <div>
            <p className="home-section-kicker">{t('home:contact.eyebrow')}</p>
            <h2>{t('home:contact.title')}</h2>
          </div>
          <Link to="/contact" className="home-button home-button-primary">
            {t('home:cta.contact')}
            <ArrowIcon />
          </Link>
        </section>
      </div>
    </div>
  );
}
