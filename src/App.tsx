import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import logo from "./assets/images/ezTechLogo.png";
import styles from "./App.module.css";

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
    title: "Mais organização",
    description: "Informações centralizadas e menos perda de contexto entre canais, equipe e clientes.",
  },
  {
    title: "Mais produtividade",
    description: "Menos tarefas repetitivas e mais tempo para a equipe focar no atendimento certo.",
  },
  {
    title: "Mais tempo",
    description: "Processos mais simples para reduzir improviso, espera e retrabalho no dia a dia.",
  },
  {
    title: "Mais oportunidades",
    description: "Leads melhor atendidos, qualificados e direcionados antes de esfriarem.",
  },
  {
    title: "Mais profissionalismo",
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
    problem: "Leads chegavam pelo atendimento sem triagem inicial, exigindo mais tempo da equipe.",
    solution:
      "Criamos um chatbot para qualificar o contato, organizar as informações e redirecionar cada lead para o atendimento certo.",
    result:
      "O fluxo comercial ficou mais claro, com contatos melhor direcionados e menos esforço manual no primeiro atendimento.",
    tags: ["Atendimento", "Qualificação", "Organização comercial"],
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

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+55 11 94035-4855",
    href: "https://wa.me/5511940354855",
  },
  {
    label: "Email",
    value: "fernandesdenzo223@gmail.com",
    href: "mailto:fernandesdenzo223@gmail.com",
  },
];

type IconName = "zap" | "refresh" | "chart" | "instagram" | "globe" | "bot" | "route" | "inbox";

const heroPromises = [
  { icon: "zap", label: "Atendimento inteligente" },
  { icon: "refresh", label: "Processos automatizados" },
  { icon: "chart", label: "Mais produtividade" },
];

const storySteps = [
  {
    icon: "instagram",
    title: "Cliente entra pelo Instagram",
    description: "O interesse vira conversa no canal onde ele já está.",
  },
  {
    icon: "globe",
    title: "Conhece sua empresa",
    description: "Uma página clara explica a oferta e aumenta a confiança.",
  },
  {
    icon: "bot",
    title: "Recebe atendimento automático",
    description: "A IA responde rápido, qualifica o lead e evita espera.",
  },
  {
    icon: "route",
    title: "É direcionado ao setor correto",
    description: "A conversa segue no WhatsApp com contexto e prioridade.",
  },
  {
    icon: "inbox",
    title: "Sua equipe recebe tudo organizado",
    description: "Dados, histórico e próximos passos ficam registrados.",
  },
];

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    refresh: (
      <>
        <path d="M21 12a9 9 0 0 1-15.2 6.5" />
        <path d="M3 12A9 9 0 0 1 18.2 5.5" />
        <path d="M3 19v-5h5" />
        <path d="M21 5v5h-5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M16.5 7.5h.01" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21" />
        <path d="M12 3c-2.3 2.5-3.5 5.5-3.5 9s1.2 6.5 3.5 9" />
      </>
    ),
    bot: (
      <>
        <rect x="5" y="8" width="14" height="10" rx="3" />
        <path d="M12 4v4" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
        <path d="M10 18v2" />
        <path d="M14 18v2" />
      </>
    ),
    route: (
      <>
        <path d="M5 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
        <path d="M13 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
        <path d="M8 10v1a6 6 0 0 0 6 6" />
      </>
    ),
    inbox: (
      <>
        <path d="M4 14 7 5h10l3 9" />
        <path d="M4 14h5l2 3h2l2-3h5" />
        <path d="M4 14v5h16v-5" />
      </>
    ),
  };

  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function scrollToSection(href: string) {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const headerHeight = 88;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");

  if (!href?.startsWith("#")) {
    return;
  }

  e.preventDefault();
  scrollToSection(href);
}

function App() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    document.title = "ezf.tech | Tecnologia para organizar, automatizar e crescer";

    const description =
      "Soluções digitais para pequenas e médias empresas que querem organizar processos, automatizar tarefas, melhorar o atendimento e gerar mais oportunidades.";
    const keywords =
      "Soluções Digitais, Automação Empresarial, Atendimento Inteligente, Sistemas Web, Chatbots, Inteligência Artificial, Organização de Processos";

    const updateMeta = (name: string, content: string) => {
      let metaTag = document.querySelector<HTMLMetaElement>(`meta[name=\"${name}\"]`);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("theme-color", "#141427");

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.22,
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#9112bc", "#ae75da", "#ffffff"],
        },
        links: {
          color: "#ae75da",
          distance: 110,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          outModes: {
            default: "out",
          },
          random: true,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 64,
        },
        opacity: {
          value: 0.34,
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className={styles.page}>
      <div className={styles.dots} aria-hidden="true" />
      {particlesReady && (
        <div className={styles.particlesLayer} aria-hidden="true">
          <Particles
            id="background-particles"
            options={particlesOptions}
            className={styles.particlesCanvas}
          />
        </div>
      )}
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <a href="#home" className={styles.brand} onClick={handleAnchorClick}>
            <img className={styles.brandLogo} src={logo} alt="ezf.tech" />
            <span className={styles.brandCopy}>
              <strong>ezf.tech</strong>
              <span>Soluções digitais para empresas que querem organizar e crescer</span>
            </span>
          </a>

          <nav className={styles.nav} aria-label="Seções da página">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleAnchorClick}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a
              className={styles.ghostButton}
              href="#contact"
              onClick={handleAnchorClick}
            >
              Solicitar diagnóstico
            </a>
            <a
              className={styles.primaryButton}
              href="https://wa.me/5511940354855"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section id="home" className={`${styles.section} ${styles.heroSection}`}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">Soluções digitais para pequenas e médias empresas</span>
              <h1>Tecnologia que organiza seu negócio e acelera resultados.</h1>
              <p>
                Estruturamos soluções digitais que reduzem tarefas repetitivas, melhoram o
                atendimento e ajudam sua empresa a crescer com mais organização.
              </p>

              <div className={styles.heroPromises} aria-label="Promessas de posicionamento">
                {heroPromises.map((promise) => (
                  <span key={promise.label}>
                    <Icon name={promise.icon as IconName} />
                    {promise.label}
                  </span>
                ))}
              </div>

              <div className={styles.heroActions}>
                <a
                  href="#contact"
                  className={styles.primaryButton}
                  onClick={handleAnchorClick}
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href="#process"
                  className={styles.secondaryButton}
                  onClick={handleAnchorClick}
                >
                  Conversar sobre meu projeto
                </a>
              </div>

              <div className={styles.heroTrust} aria-label="Sinais de confiança">
                <span>✔ Soluções personalizadas</span>
                <span>✔ Desenvolvimento sob medida</span>
                <span>✔ Atendimento próximo durante todo o projeto</span>
              </div>

              <div className={styles.heroStats}>
                <article className={styles.statCard}>
                  <strong>Resultado</strong>
                  <span>Mais organização para sua operação</span>
                </article>
                <article className={styles.statCard}>
                  <strong>Processo</strong>
                  <span>Menos trabalho manual e menos retrabalho</span>
                </article>
                <article className={styles.statCard}>
                  <strong>Contato</strong>
                  <span>Mais leads qualificados com mais previsibilidade</span>
                </article>
              </div>
            </div>

            <aside className={styles.heroVisual} aria-label="Resumo da proposta de valor">
              <div className={styles.heroPanel}>
                <span className={styles.panelTag}>Diagnóstico rápido</span>
                <h2>Como sua empresa ganha tempo, organiza processos e atende melhor.</h2>

                <div className={styles.signalList}>
                  <div className={styles.signalItem}>
                    <span />
                    Cliente pede informações
                  </div>
                  <div className={styles.signalItem}>
                    <span />
                    IA responde imediatamente
                  </div>
                  <div className={styles.signalItem}>
                    <span />
                    Lead é qualificado
                  </div>
                </div>

                <div className={styles.flowBox} aria-label="Como funciona">
                  {storySteps.map((step, index) => (
                    <div key={step.title} className={styles.flowStep}>
                      <span className={styles.flowIcon}>
                        <Icon name={step.icon as IconName} />
                      </span>
                      <span className={styles.flowCopy}>
                        <strong>{step.title}</strong>
                        <small>{step.description}</small>
                      </span>
                      {index < storySteps.length - 1 && (
                        <span className={styles.flowArrow} aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>

                <a href="#contact" className={styles.panelCta} onClick={handleAnchorClick}>
                  Solicitar diagnóstico
                </a>
              </div>

              <div className={styles.heroAsideCard}>
                <span className={styles.panelTag}>Foco em resultado</span>
                <ul>
                  <li>Mais clareza para o cliente entender sua oferta</li>
                  <li>Mais velocidade no atendimento</li>
                  <li>Mais organização entre canais e equipe</li>
                  <li>Mais oportunidades com menos esforço manual</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="problems" className={styles.section}>
          <div className={`container ${styles.sectionShell}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Problemas que resolvemos</span>
              <h2 className="sectionTitle">Onde a maioria dos negócios perde dinheiro e tempo</h2>
            </div>

            <div className={styles.problemGrid}>
              {problems.map((problem) => (
                <article key={problem} className={styles.problemCard}>
                  <span className={styles.problemDot} aria-hidden="true" />
                  <p>{problem}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className={styles.section}>
          <div className={`container ${styles.sectionShell}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Como ajudamos</span>
              <h2 className="sectionTitle">Tecnologia aplicada aos pontos que mais travam o crescimento</h2>
              <p className={styles.sectionLead}>
                Sites, sistemas, chatbots e IA entram como ferramentas. O foco é melhorar atendimento,
                organizar processos e criar uma operação mais preparada para vender e crescer.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {solutions.map((solution) => (
                <article key={solution.title} className={styles.serviceCard}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className={styles.section}>
          <div className={`container ${styles.sectionShell}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Benefícios</span>
              <h2 className="sectionTitle">O que sua empresa ganha quando a tecnologia resolve problemas reais</h2>
            </div>

            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => (
                <article key={benefit.title} className={styles.benefitCard}>
                  <span aria-hidden="true">✔</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className={`container ${styles.sectionShell}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Como funciona</span>
              <h2 className="sectionTitle">Um processo simples, claro e orientado a resultado</h2>
            </div>

            <div className={styles.processList}>
              {processSteps.map((step, index) => (
                <article key={step} className={styles.processStep}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className={styles.section}>
          <div className={`container ${styles.sectionShell}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Portfólio</span>
              <h2 className="sectionTitle">Projetos que mostram tecnologia resolvendo operação</h2>
              <p className={styles.sectionLead}>
                Cada entrega é apresentada pelo problema que precisava ser resolvido, pela solução
                criada e pelo ganho prático para a rotina do negócio.
              </p>
            </div>

            <div className={styles.portfolioGrid}>
              {portfolioItems.map((project) => (
                <article key={project.title} className={styles.portfolioCard}>
                  <div className={styles.portfolioMeta}>
                    <span className={styles.panelTag}>{project.tags[0]}</span>
                    <span className={styles.portfolioType}>Demonstração</span>
                  </div>
                  <h3>{project.title}</h3>
                  <dl className={styles.caseList}>
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
                  <div className={styles.portfolioTags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={`container ${styles.sectionShell} ${styles.aboutGrid}`}>
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Sobre a ezf.tech</span>
              <h2 className="sectionTitle">Tecnologia com foco em resolver problemas de negócio</h2>
              <p className={styles.sectionLead}>
                A ezf.tech ajuda pequenas e médias empresas a trabalharem melhor, atenderem melhor
                e crescerem de forma mais organizada usando soluções digitais inteligentes.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <blockquote>
                A ezf.tech não vende sites, sistemas ou IA. Usa essas ferramentas para ajudar
                empresas a trabalhar melhor, atender melhor e crescer com mais organização.
              </blockquote>

              <p>
                O trabalho parte dos desafios reais da operação: tarefas repetitivas, atendimento
                lento, informações espalhadas e processos que dependem demais de esforço manual.
              </p>

              <div className={styles.differentiators}>
                {differentiators.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={`container ${styles.contactPanel}`}>
            <div className={styles.contactCopy}>
              <span className="eyebrow">Diagnóstico</span>
              <h2 className="sectionTitle">Vamos descobrir como a tecnologia pode simplificar seu negócio?</h2>
              <p>
                Se você quer organizar atendimento, melhorar a presença digital e criar um fluxo
                comercial mais consistente, o próximo passo é um diagnóstico rápido.
              </p>
            </div>

            <div className={styles.contactActions}>
              <a
                href="https://wa.me/5511940354855"
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Falar no WhatsApp
              </a>
              <a href="mailto:fernandesdenzo223@gmail.com" className={styles.secondaryButton}>
                Enviar email
              </a>
              <a href="#home" className={styles.ghostButton} onClick={handleAnchorClick}>
                Voltar ao topo
              </a>
            </div>

            <div className={styles.contactMethods}>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={method.label === "WhatsApp" ? "noreferrer" : undefined}
                  className={styles.contactMethod}
                >
                  <strong>{method.label}</strong>
                  <span>{method.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <span>© 2026 ezf.tech</span>
          <span>Tecnologia para organizar processos, melhorar atendimento e criar crescimento com mais clareza.</span>
        </div>
      </footer>

      <div className={styles.floatingActions} aria-label="Ações rápidas">
        <a href="#contact" className={styles.floatingDiagnosis} onClick={handleAnchorClick}>
          Solicitar diagnóstico
        </a>
        <a
          href="https://wa.me/5511940354855"
          className={styles.floatingWhatsApp}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;
