import { useEffect, useMemo, useState, type MouseEvent } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import logo from "./assets/images/ezTechLogo.png";
import styles from "./App.module.css";

const navItems = [
  { label: "Problemas", href: "#problems" },
  { label: "Soluções", href: "#solutions" },
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
    title: "Sites Institucionais",
    description: "Presença profissional para transmitir confiança, autoridade e clareza.",
  },
  {
    title: "Landing Pages",
    description: "Páginas focadas em conversão para campanhas, lançamentos e captação.",
  },
  {
    title: "Sistemas Web",
    description: "Ferramentas sob medida para organizar processos e reduzir retrabalho.",
  },
  {
    title: "Chatbots",
    description: "Atendimento inteligente para responder rápido e manter o fluxo ativo.",
  },
  {
    title: "Automações com IA",
    description: "Tarefas repetitivas transformadas em fluxos mais rápidos e precisos.",
  },
  {
    title: "Integrações",
    description: "Conexão entre canais e sistemas para que as informações circulem melhor.",
  },
];

const benefits = [
  "Mais organização",
  "Mais produtividade",
  "Mais tempo",
  "Mais oportunidades",
  "Mais autoridade",
];

const processSteps = [
  "Entendemos seu negócio",
  "Planejamos a solução ideal",
  "Desenvolvemos com clareza",
  "Implementamos com segurança",
  "Acompanhamos com suporte",
];

const portfolioItems = [
  {
    title: "Aqua Fit Club",
    description:
      "Chatbot desenvolvido para funil de leads, qualificação inicial e redirecionamento dos contatos para os atendentes certos.",
    tags: ["Chatbot", "Funil de Leads", "Redirecionamento"],
  },
];

const differentiators = [
  "Desenvolvimento",
  "Automação",
  "IA",
  "Integração",
  "Suporte",
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
    document.title = "ezf.tech | Sites, automação e IA para empresas";

    const description =
      "A ezf.tech cria sites profissionais, landing pages, automações com IA, chatbots e sistemas web para organizar processos e gerar mais oportunidades.";
    const keywords =
      "Sites Profissionais, Landing Pages, Automação com IA, Chatbots, Sistemas Web, Desenvolvimento Web, Automação Empresarial";

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
              <h1>Organização digital para sua empresa crescer com previsibilidade.</h1>
              <p>
                A ezf.tech ajuda negócios locais a atender melhor, reduzir retrabalho e criar uma
                presença digital mais profissional, clara e consistente.
              </p>

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
                  Ver como funciona
                </a>
              </div>

              <div className={styles.heroStats}>
                <article className={styles.statCard}>
                  <strong>Clareza</strong>
                  <span>Seu cliente entende o que você faz em segundos</span>
                </article>
                <article className={styles.statCard}>
                  <strong>Processo</strong>
                  <span>Menos improviso e mais consistência na operação</span>
                </article>
                <article className={styles.statCard}>
                  <strong>Contato</strong>
                  <span>Mais pedidos de orçamento com mais confiança</span>
                </article>
              </div>
            </div>

            <aside className={styles.heroVisual} aria-label="Resumo da proposta de valor">
              <div className={styles.heroPanel}>
                <span className={styles.panelTag}>Diagnóstico rápido</span>
                <h2>Uma presença digital que passa segurança e organiza a operação.</h2>
                <p>
                  Estruturamos sites, automações e fluxos de contato para que o seu negócio pareça
                  mais profissional e funcione com menos atrito.
                </p>

                <div className={styles.signalList}>
                  <div className={styles.signalItem}>
                    <span />
                    Atendimento mais rápido
                  </div>
                  <div className={styles.signalItem}>
                    <span />
                    Processo comercial mais fluido
                  </div>
                  <div className={styles.signalItem}>
                    <span />
                    Mais autoridade para vender
                  </div>
                </div>

                <a href="#contact" className={styles.panelCta} onClick={handleAnchorClick}>
                  Solicitar diagnóstico
                </a>
              </div>

              <div className={styles.heroAsideCard}>
                <span className={styles.panelTag}>Foco em resultado</span>
                <ul>
                  <li>Organização da operação</li>
                  <li>Captação de novos contatos</li>
                  <li>Integração entre canais</li>
                  <li>Suporte e evolução contínua</li>
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
              <h2 className="sectionTitle">Soluções digitais pensadas para vender melhor e organizar a operação</h2>
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
              <h2 className="sectionTitle">O que sua empresa ganha com a transformação digital</h2>
            </div>

            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => (
                <article key={benefit} className={styles.benefitCard}>
                  <span aria-hidden="true">✔</span>
                  <h3>{benefit}</h3>
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
              <h2 className="sectionTitle">Clientes e entregas reais</h2>
              <p className={styles.sectionLead}>
                Nesta seção aparecem apenas trabalhos realizados de fato, com foco em resultado,
                organização comercial e experiência prática aplicada ao negócio.
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
                  <p>{project.description}</p>
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
                A ezf.tech foi pensada para empresas que querem crescer com clareza, processo e
                presença digital profissional. A abordagem parte da operação e termina em resultado.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <p>
                O trabalho é guiado por um princípio simples: a tecnologia precisa organizar,
                acelerar e facilitar a vida do cliente, não apenas impressionar visualmente.
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
              <span className="eyebrow">CTA final</span>
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
          <span>Sites, automação e IA para empresas que querem crescer com organização.</span>
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
