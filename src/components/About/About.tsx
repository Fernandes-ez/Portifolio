import styles from "./About.module.css";

function About() {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.header}>
        <span className="eyebrow">Sobre</span>
        <h2 className="sectionTitle">
          Desenvolvedor Full Stack com experiência prática
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            Sou Enzo Fernandes, desenvolvedor Full Stack com experiência prática em projetos reais. Estou cursando Desenvolvimento de Software Multiplataforma na <a href="https://fateczl.cps.sp.gov.br">FATEC Zona Leste</a>.Já participei da construção de plataformas web com foco em gestão, organização de informações e melhoria de fluxos de atendimento, além de projetos voltados à presença digital e captação de clientes.</p>
            <p>Meu trabalho é guiado pela ideia de que tecnologia deve ser uma ferramenta estratégica — não apenas visual, mas funcional, escalável e alinhada aos objetivos do negócio.</p>
        </div>
        <div className={styles.approach}>
          <div>
            <strong>Análise</strong>
            <p>Entendo o problema real antes de codar qualquer linha</p>
          </div>
          <div>
            <strong>Execução</strong>
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
