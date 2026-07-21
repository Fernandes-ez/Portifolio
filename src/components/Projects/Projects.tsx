import styles from "./Projects.module.css";

const projects = [
  {
    title: "AquaFit Club",
    description:
      "Landing page desenvolvida para uma academia, com foco em conversão e apresentação dos planos e estrutura do espaço.",
    stack: "Landing Page",
    year: "2026",
    link: "https://aquafitclub.com.br",
  },
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
        {projects.map((project, index) => {
          const content = (
            <>
              <div className={styles.projectNumber}>0{index + 1}</div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <span className={styles.year}>{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className={styles.stack}>{project.stack}</div>
              </div>
            </>
          );

          if (project.link) {
            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project}
              >
                {content}
              </a>
            );
          }

          return (
            <article
              key={project.title}
              className={`${styles.project} ${styles.comingSoon}`}
            >
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
