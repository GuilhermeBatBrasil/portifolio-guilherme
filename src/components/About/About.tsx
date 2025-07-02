import styles from './About.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Guilherme e sou um desenvolvedor front-end com forte foco em qualidade,
          performance e experiência do usuário. Estou em constante evolução na área de tecnologia,
          cursando Análise e Desenvolvimento de Sistemas e uma pós-graduação em Engenharia de
          Software.
        </p>
        <p>
          Atualmente trabalho como programador na IEZ Telecom/Grupo Greatek, onde desenvolvo sistemas
          internos utilizando TypeScript, Angular, Next.js e outras tecnologias modernas.
        </p>
        <p>
          Tenho experiência em projetos com HTML, CSS, JavaScript, React, Angular, Next, Node.js, e
          também com integrações via API REST e gRPC. Busco sempre aplicar boas práticas de
          desenvolvimento, mantendo o código limpo e reutilizável.
        </p>
        <p>
          Também possuo conhecimento em ferramentas de UX/UI (como Figma), banco de dados SQL, e
          versionamento com GitHub. Me considero proativo, autodidata e apaixonado por resolver
          problemas através da tecnologia.
        </p>
      </div>
    </section>
  );
}
