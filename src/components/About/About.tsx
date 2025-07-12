import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Sobre mim<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.intro}>
          Me chamo Guilherme. Trabalho como desenvolvedor front-end na IEZ
          Telecom / Grupo Greatek, focado no desenvolvimento de sistemas
          internos com tecnologias como TypeScript, Angular e Next.js.
        </p>
        <div className={styles.content}>
          <p>
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas e
            uma pós-graduação em Engenharia de Software. Também estudo por conta
            própria e participo de cursos paralelos para continuar evoluindo.
          </p>
          <p>
            Tenho experiência com HTML, CSS, JavaScript, React, Angular,
            Next.js, Node.js, e integrações via API REST e gRPC. No dia a dia,
            também uso ferramentas como Figma, GitHub e bancos de dados SQL.
          </p>
        </div>
      </div>
    </section>
  );
}
