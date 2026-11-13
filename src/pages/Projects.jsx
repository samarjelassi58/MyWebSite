import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects:projects.items', { returnObjects: true });

  return (
    <div className="inner-page">
      <div className="page-container">
        <header className="page-heading">
          <p className="home-section-kicker">{t('home:work.eyebrow')}</p>
          <h1>{t('projects:title')}</h1>
          <p>{t('projects:subtitle')}</p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="page-card project-detail" key={project.name}>
              <div className="project-detail-intro">
                <span className="home-expertise-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="home-project-tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <h3 className="project-detail-label">{t('projects:labels.features')}</h3>
                <ul className="page-bullet-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                {project.link && (
                  <a className="home-text-link project-detail-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              {(project.image || project.videoDemo || project.screenshots) && (
                <div className="project-detail-media">
                  {project.image && <img className="project-main-image" src={project.image} alt={project.name} loading="lazy" />}
                  {project.videoDemo && (
                    <div>
                      <h3 className="project-detail-label">{t('projects:labels.video')}</h3>
                      <video controls controlsList="nodownload" preload="metadata" className="project-video">
                        <source src={project.videoDemo} type="video/mp4" />
                        {t('projects:labels.videoFallback')}
                      </video>
                    </div>
                  )}
                  {project.screenshots && (
                    <div>
                      <h3 className="project-detail-label">{t('projects:labels.screenshots')}</h3>
                      <div className="project-screenshots">
                        {project.screenshots.map((screenshot, screenshotIndex) => (
                          <a href={screenshot} key={screenshot} target="_blank" rel="noopener noreferrer">
                            <img src={screenshot} alt={`${project.name} – ${t('projects:labels.screenshot')} ${screenshotIndex + 1}`} loading="lazy" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
        <section className="home-contact-strip page-section-spaced">
          <div><p className="home-section-kicker">{t('home:contact.eyebrow')}</p><h2>{t('projects:cta.title')}</h2><p className="page-strip-description">{t('projects:cta.description')}</p></div>
          <Link to="/contact" className="home-button home-button-primary">{t('projects:cta.contact')} <span aria-hidden="true">→</span></Link>
        </section>
      </div>
    </div>
  );
}
