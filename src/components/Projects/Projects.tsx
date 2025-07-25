"use client";
import styles from "./Projects.module.css";
import { Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = {
  pt: [
    {
      title: "Skywatch",
      description:
        "Sistema de monitoramento de rede que simula o comportamento de usuários reais e coleta dados de latência, DNS e processamento. Possui dashboards interativos para análise dos dados.",
      techs: ["TypeScript", "React", "Dashboards", "APIs"],
    },
    {
      title: "CRM Interno IEZ",
      description:
        "Aplicação de controle de usuários, produtos, financeiro, fiscal e atendimento ao cliente. Desenvolvido com base em design do Figma.",
      techs: ["Next.js", "Angular", "Figma", "APIs"],
    },
    {
      title: "Gerenciamento de Números e Simcards",
      description:
        "Aplicação React para cadastro e controle de números telefônicos e simcards. Integração com APIs e design orientado por UX/UI.",
      techs: ["React", "TypeScript", "UX/UI", "HTTP API"],
    },
    {
      title: "Si-Adm",
      description:
        "Frontend para controle de usuários com vinculação a perfis e permissões, separando usuários internos e externos.",
      techs: ["TypeScript", "Figma", "APIs", "Next.js"],
    },
    {
      title: "WebScrap5G",
      description:
        "Script em JavaScript para verificar compatibilidade de celulares com 5G e eSIM, via web scraping.",
      techs: ["JavaScript", "WebScraping"],
    },
  ],
  en: [
    {
      title: "Skywatch",
      description:
        "Network monitoring system that simulates real user behavior and collects latency, DNS, and processing data. Includes interactive dashboards for data analysis.",
      techs: ["TypeScript", "React", "Dashboards", "APIs"],
    },
    {
      title: "Internal CRM IEZ",
      description:
        "Application for managing users, products, finance, billing, and customer service. Developed based on Figma designs.",
      techs: ["Next.js", "Angular", "Figma", "APIs"],
    },
    {
      title: "Number and Simcard Management",
      description:
        "React application for registering and managing phone numbers and simcards. Integrated with APIs and designed with UX/UI principles.",
      techs: ["React", "TypeScript", "UX/UI", "HTTP API"],
    },
    {
      title: "Si-Adm",
      description:
        "Frontend to manage users with role-based permissions, separating internal and external users.",
      techs: ["TypeScript", "Figma", "APIs", "Next.js"],
    },
    {
      title: "WebScrap5G",
      description:
        "JavaScript script to check phone compatibility with 5G and eSIM using web scraping.",
      techs: ["JavaScript", "WebScraping"],
    },
  ],
};

export default function ProjectsSection() {
  const { language } = useLanguage();
  const texts = {
    pt: {
      title: "Projetos",
      github: "Ver no GitHub",
    },
    en: {
      title: "Projects",
      github: "View on GitHub",
    },
  };

  const t = texts[language];
  const projectList = projects[language];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t.title}
          <span className={styles.dot}>.</span>
        </h2>
        <a
          href="https://github.com/GuilhermeBatBrasil"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <Github className={styles.icon} />
          {t.github}
        </a>
        <div className={styles.grid}>
          {projectList.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.techs}>
                {project.techs.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
