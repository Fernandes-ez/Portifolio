import styles from "./Projects.module.css";

const projects = [
  {
    title: "E-commerce responsivo",
    description:
      "Plataforma completa com carrinho, checkout e painel admin. Integracao com Stripe e gestao de estoque.",
    stack: "Next.js · TypeScript · Stripe · Prisma",
    year: "2026",
  },
  {
    title: "Dashboard analytics",
    description:
      "Interface para visualizacao de metricas em tempo real. Graficos interativos e exportacao de relatorios.",
    stack: "React · Chart.js · TailwindCSS",
    year: "2025",
  },
  {
    title: "Landing page SaaS",
    description:
      "Site institucional com foco em conversao. Animacoes suaves, SEO otimizado e integracao com CRM.",
    stack: "React · Framer Motion · Vercel",
    year: "2025",
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
          <article key={project.title} className={styles.project}>
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
