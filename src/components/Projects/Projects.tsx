import styles from './Projects.module.css';

const projects = [
  {
    title: 'Skywatch',
    description:
      'Sistema de monitoramento de rede que simula o comportamento de usuários reais e coleta dados de latência, DNS e processamento. Possui dashboards interativos para análise dos dados.',
    techs: ['TypeScript', 'React', 'Dashboards', 'APIs'],
    github: 'https://github.com/GuilhermeBatBrasil',
  },
  {
    title: 'CRM Interno IEZ',
    description:
      'Aplicação de controle de usuários, produtos, financeiro, fiscal e atendimento ao cliente. Desenvolvido com base em design do Figma.',
    techs: ['Next.js', 'Angular', 'Figma', 'APIs'],
    github: 'https://github.com/GuilhermeBatBrasil',
  },
  {
    title: 'Gerenciamento de Números e Simcards',
    description:
      'Aplicação React para cadastro e controle de números telefônicos e simcards. Integração com APIs e design orientado por UX/UI.',
    techs: ['React', 'TypeScript', 'UX/UI', 'HTTP API'],
    github: 'https://github.com/GuilhermeBatBrasil',
  },
  {
    title: 'Si-Adm',
    description:
      'Frontend para controle de usuários com vinculação a perfis e permissões, separando usuários internos e externos.',
    techs: ['TypeScript', 'Figma', 'APIs', 'Next.js'],
    github: 'https://github.com/GuilhermeBatBrasil',
  },
  {
    title: 'WebScrap5G',
    description:
      'Script em JavaScript para verificar compatibilidade de celulares com 5G e eSIM, via web scraping.',
    techs: ['JavaScript', 'WebScraping'],
    github: 'https://github.com/GuilhermeBatBrasil',
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>Projetos</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.techs}>
                {project.techs.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}