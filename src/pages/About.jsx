import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const experience = t('about.experience', { returnObjects: true });
  const skills = t('about.skills', { returnObjects: true });
  const education = t('about.education', { returnObjects: true });
  const contact = t('about.contact', { returnObjects: true });

  return (
    <section className="max-w-3xl mx-auto mt-12 p-0">
      <div className="bg-gradient-to-br from-palette-beige/40 via-white to-palette-turquoise/20 dark:from-palette-bleuFonce dark:via-palette-bleu/80 dark:to-palette-bleuClair/30 rounded-3xl shadow-2xl p-8 flex flex-col gap-8 border border-palette-turquoise/30 dark:border-palette-bleuClair/40">
        <div className="flex flex-col items-center mb-6">
          <img src="https://ui-avatars.com/api/?name=Samar+Jelassi&background=0D8ABC&color=fff&size=128" alt="Samar Jelassi" className="w-32 h-32 rounded-full shadow-lg border-4 border-palette-turquoise dark:border-palette-beige mb-4" />
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-palette-bleu via-palette-bleuClair to-palette-turquoise dark:from-palette-turquoise dark:via-palette-beige dark:to-palette-jaune bg-clip-text text-transparent tracking-tight drop-shadow">{t('about.title')}</h1>
          <h2 className="text-lg font-medium mb-4 text-palette-bleuFonce dark:text-palette-beige text-center">{t('about.summary')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expérience */}
          <div>
            <h3 className="text-xl font-bold text-palette-bleu dark:text-palette-turquoise mb-2">{t('about.experienceTitle')}</h3>
            {Array.isArray(experience) && experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="font-semibold text-palette-bleuFonce dark:text-palette-beige">{exp.poste || exp.position} <span className="text-sm text-palette-bleu/70 dark:text-palette-turquoise/70">{exp.entreprise || exp.company}</span></div>
                <div className="text-sm text-palette-bleu/70 dark:text-palette-turquoise/70 mb-1">{exp.periode || exp.period}</div>
                <ul className="list-disc ml-5 text-palette-bleuFonce dark:text-palette-beige">
                  {(exp.missions || exp.tasks).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Compétences */}
          <div>
            <h3 className="text-xl font-bold text-palette-bleu dark:text-palette-turquoise mb-2">{t('about.skillsTitle')}</h3>
            <ul className="flex flex-wrap gap-2">
              {Array.isArray(skills) && skills.map((skill, idx) => (
                <li key={idx} className="bg-palette-turquoise/20 dark:bg-palette-bleuClair/20 text-palette-bleu dark:text-palette-beige px-3 py-1 rounded-full text-sm font-medium shadow border border-palette-turquoise/30 dark:border-palette-bleuClair/30">{skill}</li>
              ))}
            </ul>
          </div>
          {/* Formation */}
          <div>
            <h3 className="text-xl font-bold text-palette-bleu dark:text-palette-turquoise mb-2">{t('about.educationTitle')}</h3>
            {Array.isArray(education) && education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <div className="font-semibold text-palette-bleuFonce dark:text-palette-beige">{edu.diplome || edu.degree}</div>
                <div className="text-sm text-palette-bleu/70 dark:text-palette-turquoise/70">{edu.etablissement || edu.school} {edu.annee || edu.year}</div>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-palette-bleu dark:text-palette-turquoise mb-2">{t('about.contactTitle')}</h3>
            <div className="text-palette-bleuFonce dark:text-palette-beige">
              <div>Email : <a href={`mailto:${contact.email}`} className="underline text-palette-bleu dark:text-palette-turquoise hover:text-palette-bleuClair dark:hover:text-palette-beige transition-colors">{contact.email}</a></div>
              <div>Téléphone : <a href={`tel:${contact.telephone || contact.phone}`} className="underline text-palette-bleu dark:text-palette-turquoise hover:text-palette-bleuClair dark:hover:text-palette-beige transition-colors">{contact.telephone || contact.phone}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
