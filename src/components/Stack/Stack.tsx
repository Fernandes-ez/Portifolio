import styles from "./Stack.module.css";

const stack = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite"],
  backend: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  tools: ["Git", "Figma", "Vercel", "Docker"],
};

function Stack() {
  return (
    <div className={`container ${styles.stack}`}>
      <div className={styles.header}>
        <span className="eyebrow">Stack</span>
        <h2 className="sectionTitle">Tecnologias</h2>
      </div>
      <div className={styles.categories}>
        {Object.entries(stack).map(([category, techs]) => (
          <div key={category} className={styles.category}>
            <h3>{category}</h3>
            <div className={styles.list}>
              {techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
