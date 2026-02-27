import styles from "./Stack.module.css";

const stack = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express.js", ".NET", "C#", "Java", "Python"],
  database: ["MySQL", "MongoDB", "MongoDB Atlas", "SQL"],
  tools: [
    "Git",
    "GitHub",
    "VSCode",
    "Postman",
    "Jest",
    "Vercel",
    "Render",
    "Netlify",
  ],
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
