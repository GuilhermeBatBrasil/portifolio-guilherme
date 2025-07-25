"use client";
import styles from './Skills.module.css';
import { useLanguage } from '@/context/LanguageContext';

type Language = 'pt' | 'en';

type Skills = {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  languages: {
    pt: string[];
    en: string[];
  };
};

type SectionTitles = {
  [key in Language]: {
    title: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
    languages: string;
  };
};

const skills: Skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js'],
  backend: ['Python', 'Node.js', 'API REST', 'gRPC', 'NestJS', 'Envoy Proxy'],
  database: ['SQL', 'SAP'],
  tools: ['GitHub', 'Figma'],
  languages: {
    pt: ['Inglês (Avançado)', 'Espanhol (Básico)'],
    en: ['English (Advanced)', 'Spanish (Basic)'],
  },
};

const sectionTitles: SectionTitles = {
  pt: {
    title: 'Skills',
    frontend: 'Front-End',
    backend: 'Back-End',
    database: 'Banco de Dados',
    tools: 'Ferramentas e UX/UI',
    languages: 'Idiomas',
  },
  en: {
    title: 'Skills',
    frontend: 'Front-End',
    backend: 'Back-End',
    database: 'Database',
    tools: 'Tools & UX/UI',
    languages: 'Languages',
  },
};

export default function SkillsSection() {
  const { language } = useLanguage();

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {sectionTitles[language].title}
          <span className={styles.dot}>.</span>
        </h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => {
            // Corrigir tipagem para garantir acesso seguro
            const isLanguages = category === 'languages';
            const titleKey = category as keyof SectionTitles[typeof language];
            const list = isLanguages
              ? skills.languages[language]
              : (items as string[]);

            return (
              <div key={category} className={styles.card}>
                <h3 className={styles.category}>{sectionTitles[language][titleKey]}</h3>
                <ul className={styles.list}>
                  {list.map((skill, idx) => (
                    <li key={idx} className={styles.skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
