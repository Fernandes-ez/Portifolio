import styles from "./Services.module.css";

const services = [
  {
    title: "Desenvolvimento frontend",
    items: [
      "Landing pages e sites institucionais",
      "Dashboards e paineis admin",
      "E-commerce e plataformas customizadas",
    ],
  },
  {
    title: "Consultoria tecnica",
    items: [
      "Auditoria de codigo e performance",
      "Migracao e refatoracao",
      "Setup de arquitetura e tooling",
    ],
  },
  {
    title: "Manutencao",
    items: [
      "Correcao de bugs e ajustes",
      "Atualizacao de dependencias",
      "Novas features e melhorias",
    ],
  },
];

function Services() {
  return (
    <div className={`container ${styles.services}`}>
      <div className={styles.header}>
        <span className="eyebrow">Servicos</span>
        <h2 className="sectionTitle">Como posso ajudar</h2>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.title} className={styles.service}>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
