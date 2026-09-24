import { useEffect } from "react";
import logo from "./assets/images/ezTechLogo.png";
import styles from "./App.module.css";

const WHATSAPP = "https://wa.me/5511991084238";
const EMAIL = "ezftech.contato@gmail.com";

const navItems = [
  { label: "Problemas", href: "#problems" },
  { label: "Como ajudamos", href: "#solutions" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Processo", href: "#process" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

const problems = [
  "Atendimento lento e oportunidades perdidas",
  "Clientes que perguntam e não recebem resposta",
  "Dependência total do Instagram para vender",
  "Processos manuais que travam a rotina",
  "Falta de organização entre equipes e canais",
];

const solutions = [
  {
    title: "Presença digital profissional",
    description:
      "Sites e páginas claras para sua empresa transmitir confiança, explicar melhor sua oferta e gerar mais contatos.",
  },
  {
    title: "Captação e qualificação de leads",
    description:
      "Landing pages, formulários e automações que transformam interesse em oportunidades mais organizadas.",
  },
  {
    title: "Atendimento automatizado",
    description:
      "Chatbots e IA para responder rápido, filtrar dúvidas repetidas e encaminhar cada cliente com mais contexto.",
  },
  {
    title: "Organização da operação",
    description:
      "Sistemas web sob medida para centralizar informações, reduzir retrabalho e dar mais controle para a equipe.",
  },
  {
    title: "Integração entre canais",
    description:
      "Conexões entre site, Instagram, WhatsApp, planilhas e sistemas para que nada importante fique perdido.",
  },
  {
    title: "Automação de tarefas repetitivas",
    description:
      "Fluxos inteligentes que economizam tempo e liberam sua equipe para focar no que realmente move o negócio.",
  },
];

const benefits = [
  {
    title: "organização",
    description: "Informações centralizadas e menos perda de contexto entre canais, equipe e clientes.",
  },
  {
    title: "produtividade",
    description: "Menos tarefas repetitivas e mais tempo para a equipe focar no atendimento certo.",
  },
  {
    title: "tempo",
    description: "Processos mais simples para reduzir improviso, espera e retrabalho no dia a dia.",
  },
  {
    title: "oportunidades",
    description: "Leads melhor atendidos, qualificados e direcionados antes de esfriarem.",
  },
  {
    title: "profissionalismo",
    description: "Uma experiência digital mais clara, confiável e preparada para crescer.",
  },
];

const processSteps = [
  "Entendemos sua operação e os gargalos que travam o crescimento",
  "Definimos quais soluções digitais realmente fazem sentido",
  "Desenvolvemos sites, sistemas ou automações com foco prático",
  "Implementamos os fluxos com segurança e clareza para a equipe",
  "Acompanhamos ajustes para manter a solução útil no dia a dia",
];

const portfolioItems = [
  {
    title: "Aqua Fit Club",
    type: "Automação",
    mockup: "chat",
    problem: "Leads chegavam pelo atendimento sem triagem inicial, exigindo mais tempo da equipe.",
    solution:
      "Criamos um chatbot para qualificar o contato, organizar as informações e redirecionar cada lead para o atendimento certo.",
    result:
      "O fluxo comercial ficou mais claro, com contatos melhor direcionados e menos esforço manual no primeiro atendimento.",
    tags: ["Atendimento", "Qualificação", "Organização comercial"],
  },
  {
    title: "Aqua Fit Club",
    type: "Site",
    mockup: "site",
    problem: "A academia não tinha uma página própria para se apresentar e captar novos alunos.",
    solution:
      "Desenvolvemos uma landing page para apresentar a estrutura, os planos e facilitar o primeiro contato de quem visita.",
    result:
      "Uma presença digital própria, com apresentação clara da academia e mais um canal para converter visitantes em alunos.",
    tags: ["Landing Page", "Presença digital", "Conversão"],
    link: "https://aquafitclub.com.br",
  },
];

const differentiators = [
  "Tecnologia com propósito",
  "Soluções sob medida",
  "Simplicidade",
  "Inovação prática",
  "Transparência",
  "Compromisso com resultados",
  "Aprendizado contínuo",
];

const heroPromises = ["Atendimento inteligente", "Processos automatizados", "Mais produtividade"];

const heroTrust = [
  "Soluções personalizadas",
  "Desenvolvimento sob medida",
  "Atendimento próximo durante todo o projeto",
];

const heroStats = [
  { label: "Resultado", text: "Mais organização para sua operação" },
  { label: "Processo", text: "Menos trabalho manual e menos retrabalho" },
  { label: "Contato", text: "Mais leads qualificados com mais previsibilidade" },
];

const signals = ["Cliente pede informações", "IA responde imediatamente", "Lead é qualificado"];

const storySteps = [
  { title: "Cliente entra pelo Instagram", description: "O interesse vira conversa no canal onde ele já está." },
  { title: "Conhece sua empresa", description: "Uma página clara explica a oferta e aumenta a confiança." },
  { title: "Recebe atendimento automático", description: "A IA responde rápido, qualifica o lead e evita espera." },
  { title: "É direcionado ao setor correto", description: "A conversa segue no WhatsApp com contexto e prioridade." },
  { title: "Sua equipe recebe tudo organizado", description: "Dados, histórico e próximos passos ficam registrados." },
];

/* Chave vertical — o símbolo da marca, usado como abertura/fechamento e agrupamento. */
function Brace({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M88 4C46 4 50 36 50 76v84c0 28-16 40-44 40 28 0 44 12 44 40v84c0 40-4 72 38 72"
        fill="none"
        stroke="currentColor"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* Chave horizontal que faz a transição entre seções; a ponta aponta para o título. */
function Edge({ at }: { at: number }) {
  const w = 1440;
  const b = 64;
  const x = Math.round(w * at);
  const line = `M0 ${b}H${x - 64}C${x - 20} ${b} ${x} ${b - 10} ${x} 4C${x} ${b - 10} ${x + 20} ${b} ${x + 64} ${b}H${w}`;

  return (
    <svg className={styles.edge} viewBox={`0 0 ${w} 72`} preserveAspectRatio="none" aria-hidden="true">
      <path d={`${line}V72H0Z`} className={styles.edgeFill} />
      <path d={line} className={styles.edgeLine} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function ChatMockup({ lines }: { lines: string[] }) {
  return (
    <div className={styles.chat} aria-hidden="true">
      {lines.map((line, index) => (
        <span key={line} className={index % 2 ? styles.bubbleBot : styles.bubbleUser}>
          {line}
        </span>
      ))}
    </div>
  );
}

function SiteMockup() {
  return (
    <div className={styles.site} aria-hidden="true">
      <span className={styles.siteBar}>
        <i />
        <i />
        <i />
        <b>aquafitclub.com.br</b>
      </span>
      <span className={styles.siteHero}>
        <strong>Aqua Fit Club</strong>
        <small>Estrutura · Planos · Contato</small>
        <em />
      </span>
      <span className={styles.siteGrid}>
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "ezf.tech | Tecnologia para organizar, automatizar e crescer";

    const updateMeta = (name: string, content: string) => {
      let metaTag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    updateMeta(
      "description",
      "Soluções digitais para pequenas e médias empresas que querem organizar processos, automatizar tarefas, melhorar o atendimento e gerar mais oportunidades.",
    );
    updateMeta(
      "keywords",
      "Soluções Digitais, Automação Empresarial, Atendimento Inteligente, Sistemas Web, Chatbots, Inteligência Artificial, Organização de Processos",
    );
    updateMeta("theme-color", "#1b1026");
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <a href="#home" className={styles.brand}>
            <img src={logo} alt="ezf.tech" />
          </a>

          <nav className={styles.nav} aria-label="Seções da página">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className={styles.headerCta} href="#contact">
            Solicitar diagnóstico
          </a>
        </div>
      </header>

      <main>
        <section id="home" className={`${styles.band} ${styles.ink} ${styles.hero}`}>
          <Brace className={styles.heroBrace} />

          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Soluções digitais para pequenas e médias empresas</p>
              <h1>
                Tecnologia que <span className={styles.braced}>organiza</span> seu negócio e acelera
                resultados.
              </h1>
              <p className={styles.heroLead}>
                Estruturamos soluções digitais que reduzem tarefas repetitivas, melhoram o atendimento e
                ajudam sua empresa a crescer com mais organização.
              </p>

              <p className={styles.promises}>{heroPromises.join("  ·  ")}</p>

              <div className={styles.actions}>
                <a href="#contact" className={styles.button}>
                  Solicitar diagnóstico
                </a>
                <a href="#process" className={styles.textLink}>
                  Conversar sobre meu projeto
                </a>
              </div>

              <ul className={styles.trust}>
                {heroTrust.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <ol className={styles.flow} aria-label="Como funciona o atendimento organizado">
              {storySteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </li>
              ))}
            </ol>
          </div>

          <dl className={`container ${styles.stats}`}>
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="problems" className={`${styles.band} ${styles.paper} ${styles.problems}`}>
          <Edge at={0.14} />
          <div className={`container ${styles.problemsGrid}`}>
            <p className={styles.kicker}>Problemas que resolvemos</p>
            <h2 className={styles.problemsTitle}>Onde a maioria dos negócios perde dinheiro e tempo</h2>

            <ul className={styles.problemList}>
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>

            {/* O fio embaraçado atravessa a divisória e chega organizado na próxima seção. */}
            <svg className={styles.tangle} viewBox="0 0 240 620" aria-hidden="true">
              <path
                d="M30 60C110-10 210 40 170 110S20 170 60 90s170-20 150 70-160 60-120-10 150 10 110 90-110 70-60 10 100 40 50 110c-30 40-30 80-30 130V620"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>

        <section id="solutions" className={`${styles.band} ${styles.ink} ${styles.solutions}`}>
          <Edge at={0.1} />
          <div className={`container ${styles.solutionsGrid}`}>
            <div className={styles.solutionsHead}>
              <p className={styles.kicker}>Como ajudamos</p>
              <h2 className={styles.title}>Tecnologia aplicada aos pontos que mais travam o crescimento</h2>
              <p className={styles.muted}>
                Sites, sistemas, chatbots e IA entram como ferramentas. O foco é melhorar atendimento,
                organizar processos e criar uma operação mais preparada para vender e crescer.
              </p>
            </div>

            <figure className={styles.solutionsFigure}>
              <ol className={styles.signals}>
                {signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ol>
            </figure>

            <ul className={styles.solutionList}>
              {solutions.map((solution) => (
                <li key={solution.title}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="benefits" className={`${styles.band} ${styles.violet} ${styles.benefits}`}>
          <Edge at={0.43} />
          <div className="container">
            <p className={styles.kicker}>Benefícios</p>
            <h2 className={styles.benefitsTitle}>
              O que sua empresa ganha quando a tecnologia resolve problemas reais
            </h2>

            <div className={styles.benefitsGroup}>
              <span className={styles.more} aria-hidden="true">
                Mais
              </span>
              <Brace className={styles.benefitsBrace} />
              <ul className={styles.benefitList}>
                {benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <h3>
                      <span className={styles.srOnly}>Mais </span>
                      {benefit.title}
                    </h3>
                    <p>{benefit.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="process" className={`${styles.band} ${styles.paper} ${styles.process}`}>
          <Edge at={0.43} />
          <div className="container">
            <div className={styles.processHead}>
              <p className={styles.kicker}>Como funciona</p>
              <h2 className={styles.title}>Um processo simples, claro e orientado a resultado</h2>
            </div>

            <ol className={styles.timeline}>
              {processSteps.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="portfolio" className={`${styles.band} ${styles.ink} ${styles.portfolio}`}>
          <Edge at={0.1} />
          <div className="container">
            <div className={styles.portfolioHead}>
              <p className={styles.kicker}>Portfólio</p>
              <h2 className={styles.title}>Projetos que mostram tecnologia resolvendo operação</h2>
              <p className={styles.muted}>
                Cada entrega é apresentada pelo problema que precisava ser resolvido, pela solução criada e
                pelo ganho prático para a rotina do negócio.
              </p>
            </div>

            {portfolioItems.map((project) => (
              <article key={`${project.title}-${project.type}`} className={styles.case}>
                <figure className={project.mockup === "chat" ? styles.caseCircle : styles.caseArch}>
                  {project.mockup === "chat" ? (
                    <ChatMockup
                      lines={[
                        "Oi! Quero saber sobre os planos.",
                        "Claro! Qual modalidade te interessa?",
                        "Natação, à noite.",
                        "Anotado. Vou te passar para a equipe certa.",
                      ]}
                    />
                  ) : (
                    <SiteMockup />
                  )}
                </figure>

                <div className={styles.caseBody}>
                  <p className={styles.caseType}>
                    {project.type} <span>/ {project.tags[0]}</span>
                  </p>
                  <h3>{project.title}</h3>
                  <dl>
                    <div>
                      <dt>Problema</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Solução</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Resultado</dt>
                      <dd>{project.result}</dd>
                    </div>
                  </dl>
                  <p className={styles.tags}>{project.tags.join(" / ")}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                      Visitar site ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className={`${styles.band} ${styles.paper} ${styles.about}`}>
          <Edge at={0.1} />
          <div className={`container ${styles.aboutGrid}`}>
            <div className={styles.aboutHead}>
              <p className={styles.kicker}>Sobre a ezf.tech</p>
              <h2 className={styles.title}>Tecnologia com foco em resolver problemas de negócio</h2>
            </div>
            <p className={styles.aboutLead}>
              A ezf.tech ajuda pequenas e médias empresas a trabalharem melhor, atenderem melhor e crescerem
              de forma mais organizada usando soluções digitais inteligentes.
            </p>

            <blockquote className={styles.quote}>
              <Brace className={styles.quoteBrace} />A ezf.tech não vende sites, sistemas ou IA. Usa essas
              ferramentas para ajudar empresas a trabalhar melhor, atender melhor e crescer com mais
              organização.
            </blockquote>

            <p className={styles.aboutText}>
              O trabalho parte dos desafios reais da operação: tarefas repetitivas, atendimento lento,
              informações espalhadas e processos que dependem demais de esforço manual.
            </p>

            <ul className={styles.values}>
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className={`${styles.band} ${styles.ink} ${styles.contact}`}>
          <Edge at={0.1} />
          <Brace className={styles.closeBrace} />
          <div className={`container ${styles.contactGrid}`}>
            <p className={styles.kicker}>Diagnóstico</p>
            <h2 className={styles.contactTitle}>
              Vamos descobrir como a tecnologia pode <span className={styles.braced}>simplificar</span> seu
              negócio?
            </h2>
            <p className={`${styles.muted} ${styles.contactLead}`}>
              Se você quer organizar atendimento, melhorar a presença digital e criar um fluxo comercial mais
              consistente, o próximo passo é um diagnóstico rápido.
            </p>

            <div className={styles.actions}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={styles.button}>
                Falar no WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.buttonLine}>
                Enviar email
              </a>
              <a href="#home" className={styles.textLink}>
                Voltar ao topo
              </a>
            </div>

            <dl className={styles.channels}>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    +55 11 99108-4238
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <span>© 2026 ezf.tech</span>
          <span>Tecnologia para organizar processos, melhorar atendimento e criar crescimento com mais clareza.</span>
        </div>
      </footer>

      <a href={WHATSAPP} className={styles.floating} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export default App;
