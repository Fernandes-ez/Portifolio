import styles from "./Projects.module.css";

const projects = [
  {
    title: "Em breve",
    description:
      "Estou trabalhando em novos projetos incríveis. Em breve compartilharei meus trabalhos mais recentes aqui.",
    stack: "Novidades em desenvolvimento",
    year: "2026",
  },
];

function Projects() {
  return (
    <div className={`container ${styles.projects}`}>
      <div className={styles.header}>
        <span className="eyebrow">Portfolio</span>
        <h2 className="sectionTitle">Projetos recentes</h2>
      </div>
      <div className={styles.list}>
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`${styles.project} ${styles.comingSoon}`}
          >
            <div className={styles.projectNumber}>0{index + 1}</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                <span className={styles.year}>{project.year}</span>
              </div>
              <p>{project.description}</p>
              <div className={styles.stack}>{project.stack}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
