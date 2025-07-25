"use client";
import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Sobre mim",
      intro:
        "Me chamo Guilherme. Trabalho como desenvolvedor front-end na IEZ Telecom / Grupo Greatek, focado no desenvolvimento de sistemas internos com tecnologias como TypeScript, Angular e Next.js.",
      paragraph1:
        "Atualmente estou cursando Análise e Desenvolvimento de Sistemas e uma pós-graduação em Engenharia de Software. Também estudo por conta própria e participo de cursos paralelos para continuar evoluindo.",
      paragraph2:
        "Tenho experiência com HTML, CSS, JavaScript, React, Angular, Next.js, Node.js, e integrações via API REST e gRPC. No dia a dia, também uso ferramentas como Figma, GitHub e bancos de dados SQL.",
    },
    en: {
      title: "About Me",
      intro:
        "My name is Guilherme. I work as a front-end developer at IEZ Telecom / Grupo Greatek, focused on developing internal systems using technologies such as TypeScript, Angular, and Next.js.",
      paragraph1:
        "I'm currently pursuing a degree in Systems Analysis and Development and a postgraduate course in Software Engineering. I also study on my own and take additional courses to keep improving.",
      paragraph2:
        "I have experience with HTML, CSS, JavaScript, React, Angular, Next.js, Node.js, and API integrations using REST and gRPC. On a daily basis, I also use tools like Figma, GitHub, and SQL databases.",
    },
  };

  const t = texts[language];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t.title}
          <span className={styles.dot}>.</span>
        </h2>
        <p className={styles.intro}>{t.intro}</p>
        <div className={styles.content}>
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
