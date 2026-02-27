import styles from "./Services.module.css";

const services = [
  {
    icon: "🌐",
    title: "Sites Institucionais",
    description:
      "Criação de sites profissionais que aumentam a autoridade do negócio e estruturam sua presença digital além das redes sociais.",
    items: [
      "Design moderno e responsivo",
      "SEO otimizado para Google",
      "Integração com redes sociais",
    ],
  },
  {
    icon: "🎯",
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão para captação de leads, vendas ou apresentação de serviços.",
    items: [
      "Alta taxa de conversão",
      "Formulários inteligentes",
      "Integração com ferramentas de marketing",
    ],
  },
  {
    icon: "🤖",
    title: "Automações com IA",
    description:
      "Implementação de soluções inteligentes para reduzir tarefas manuais e aumentar oportunidades de venda.",
    items: [
      "Atendimento automático",
      "Captação de leads",
      "Follow-up de clientes",
    ],
  },
  {
    icon: "⚙️",
    title: "Sistemas Sob Medida",
    description:
      "Desenvolvimento de soluções personalizadas de acordo com a necessidade do seu negócio.",
    items: [
      "Dashboards e painéis administrativos",
      "APIs e integrações",
      "Sistemas de gestão customizados",
    ],
  },
];

function Services() {
  return (
    <div className={`container ${styles.services}`}>
      <div className={styles.header}>
        <span className="eyebrow">Serviços</span>
        <h2 className="sectionTitle">Soluções digitais para o seu negócio</h2>
        <p className={styles.subtitle}>
          Desenvolvo soluções digitais para fortalecer a presença online e
          otimizar a geração de clientes.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.title} className={styles.service}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
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
