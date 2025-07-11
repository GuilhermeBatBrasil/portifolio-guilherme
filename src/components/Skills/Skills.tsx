import styles from './Skills.module.css';

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js'],
  backend: ['Python', 'Node.js', 'API REST', 'gRPC', 'NestJS', 'Envoy Proxy'],
  database: ['SQL', 'SAP'],
  tools: ['GitHub', 'Figma'],
  languages: ['Inglês (Avançado)', 'Espanhol (Básico)'],
};

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>skills<span className={styles.dot}>.</span></h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.card}>
              <h3 className={styles.category}>{formatTitle(category)}</h3>
              <ul className={styles.list}>
                {items.map((skill, idx) => (
                  <li key={idx} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatTitle(key: string) {
  switch (key) {
    case 'frontend':
      return 'Front-End';
    case 'backend':
      return 'Back-End';
    case 'database':
      return 'Banco de Dados';
    case 'tools':
      return 'Ferramentas e UX/UI';
    case 'languages':
      return 'Idiomas';
    default:
      return key;
  }
}
