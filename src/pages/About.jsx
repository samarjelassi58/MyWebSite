import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { 
      id: 'experience', 
      label: t('about:navigation.experience'), 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      )
    },
    { 
      id: 'skills', 
      label: t('about:navigation.skills'), 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'education', 
      label: t('about:navigation.education'), 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">SJ</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gradient">
            {t('about:hero.name')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            {t('about:hero.title')}
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{t('about:hero.location')}</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-modern group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact</span>
            </Link>
            <Link to="/projects" className="btn-modern group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-2h6a1 1 0 011 2v2M7 7h10" />
              </svg>
              <span>Projets</span>
            </Link>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md backdrop-blur-sm'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fadeInUp">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gradient mb-4">
                  {t('about:experience.title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-8">
                {t('about:experience.items', { returnObjects: true }).map((exp, index) => (
                  <div key={index} className="card-modern group hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.organization}</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gradient mb-4">
                  {t('about:skills.title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-modern group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {t('about:skills.categories.frontend.title')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t('about:skills.categories.frontend.skills', { returnObjects: true }).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:scale-110 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-modern group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      {t('about:skills.categories.backend.title')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t('about:skills.categories.backend.skills', { returnObjects: true }).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700 hover:scale-110 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-modern group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                      {t('about:skills.categories.tools.title')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t('about:skills.categories.tools.skills', { returnObjects: true }).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700 hover:scale-110 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-modern group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {t('about:skills.categories.learning.title')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t('about:skills.categories.learning.skills', { returnObjects: true }).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 hover:scale-110 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gradient mb-4">
                  {t('about:education.title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-8">
                {t('about:education.items', { returnObjects: true }).map((edu, index) => (
                  <div key={index} className="card-modern group hover:scale-[1.02] transition-all duration-300 relative">
                    <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="pl-12">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {edu.school}
                          </p>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full text-sm">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages Section */}
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gradient mb-4">
                    {t('about:languages.title')}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {t('about:languages.items', { returnObjects: true }).map((lang, index) => (
                    <div key={index} className="card-modern text-center group hover:scale-105 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{lang.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{lang.level}</p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="card-modern inline-block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                {t('about:cta.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
                {t('about:cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-modern group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('about:cta.contact')}</span>
                </Link>
                <Link to="/projects" className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-2h6a1 1 0 011 2v2M7 7h10" />
                  </svg>
                  <span>{t('about:cta.projects')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
