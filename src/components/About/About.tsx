import styles from "./About.module.css";

function About() {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.header}>
        <span className="eyebrow">Sobre</span>
        <h2 className="sectionTitle">Entrego solucoes completas de frontend</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            Trabalho com empresas e profissionais que precisam transformar
            ideias em produtos digitais funcionais. Do wireframe ao deploy, foco
            em codigo limpo, performance e experiencia do usuario.
          </p>
          <p>
            Minha stack principal: React, TypeScript, Next.js, Tailwind.
            Experiencia com integracao de APIs, autenticacao, otimizacao SEO e
            deploy em ambientes modernos.
          </p>
        </div>
        <div className={styles.approach}>
          <div>
            <strong>Analise</strong>
            <p>Entendo o problema real antes de codar qualquer linha</p>
          </div>
          <div>
            <strong>Execucao</strong>
            <p>Desenvolvimento iterativo com feedback constante</p>
          </div>
          <div>
            <strong>Entrega</strong>
            <p>Codigo documentado e produto pronto para escalar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
