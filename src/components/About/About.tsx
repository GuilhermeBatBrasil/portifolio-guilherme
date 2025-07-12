import styles from './About.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre mim<span className={styles.dot}>.</span></h2>
        <p className={styles.intro}>
          Meu nome é Guilherme e sou um desenvolvedor front-end com forte foco em qualidade,
          performance e experiência do usuário. Estou em constante evolução na área de tecnologia,
          cursando Análise e Desenvolvimento de Sistemas e uma pós-graduação em Engenharia de
          Software.
        </p>
        <div className={styles.content}>
          <p>
            Atualmente trabalho como programador na <strong>IEZ Telecom / Grupo Greatek</strong>, onde
            desenvolvo sistemas internos utilizando <strong>TypeScript</strong>, <strong>Angular</strong>,{' '}
            <strong>Next.js</strong> e outras tecnologias modernas.
          </p>
          <p>
            Tenho experiência em projetos com <strong>HTML</strong>, <strong>CSS</strong>,{' '}
            <strong>JavaScript</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>Next</strong>,{' '}
            <strong>Node.js</strong>, e também com integrações via <strong>API REST</strong> e <strong>gRPC</strong>.
            Busco sempre aplicar boas práticas de desenvolvimento, mantendo o código limpo e reutilizável.
          </p>
          <p>
            Também possuo conhecimento em ferramentas de <strong>UX/UI</strong> (como Figma), banco de dados{' '}
            <strong>SQL</strong>, e versionamento com <strong>GitHub</strong>. Me considero proativo, autodidata
            e apaixonado por resolver problemas através da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
