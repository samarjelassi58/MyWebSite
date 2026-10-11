import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-5rem)] px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="section-shell p-7 md:p-10 animate-fadeInUp">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                Stage IA/ML recherche - Paris et hybride
              </span>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight mt-5 mb-5 leading-[1.04]">
                <span className="text-gradient">{t('home:title')}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-6">
                {t('home:intro')}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {['M2 IA & ML', 'React Native', 'LLM', 'Python', 'Spring Boot'].map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn-modern group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-2h6a1 1 0 011 2v2M7 7h10" />
                  </svg>
                  <span>{t('home:cta.projects')}</span>
                </Link>

                <a
                  href="/assets/Samar_Jelassi_CV.pdf"
                  download="Samar_Jelassi_CV.pdf"
                  className="btn-modern group bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-cyan-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t('home:cta.downloadCV')}</span>
                </a>

                <Link to="/contact" className="cta-secondary px-6 py-3 inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('home:cta.contact')}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-modern h-full">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-6">Profil rapide</p>
                <div className="space-y-4">
                  <div className="stat-tile">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Localisation</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Montrouge, France</p>
                  </div>
                  <div className="stat-tile">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Specialite</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Intelligence Artificielle & ML</p>
                  </div>
                  <div className="stat-tile">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Objectif</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Stage 2026-2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="card-modern text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('home:features.frontend.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('home:features.frontend.description')}</p>
          </div>

          <div className="card-modern text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('home:features.backend.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('home:features.backend.description')}</p>
          </div>

          <div className="card-modern text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-700 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('home:features.learning.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('home:features.learning.description')}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">{t('home:stats.projects.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('home:stats.projects.label')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">{t('home:stats.learning.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('home:stats.learning.label')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">{t('home:stats.technologies.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('home:stats.technologies.label')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">{t('home:stats.passion.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('home:stats.passion.label')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
