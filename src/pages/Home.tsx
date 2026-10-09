import Layout from '../components/Layout'
import { Button, FinalCta, Label, MiniCard, PaperSection, SectionHead, ServiceCard } from '../components/ui'
import { aPartirDe } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
import { links } from '../data/links'
import styles from './Home.module.css'

const passos = [
  { label: '01', title: 'Conversa', text: 'Você me conta pelo WhatsApp como a empresa funciona hoje e o que está travando.' },
  { label: '02', title: 'Proposta', text: 'Para site, um protótipo grátis com a cara da sua marca. Para automação e sistema, escopo e preço fechados.' },
  { label: '03', title: 'Desenvolvimento', text: 'Cerca de 4 semanas para um site, com prévias para você aprovar no caminho.' },
  { label: '04', title: 'Entrega e manutenção', text: 'Treinamento, hospedagem, backups, ajustes e suporte pelo WhatsApp.' },
]

const conversa = [
  'Oi! Quero saber sobre os planos.',
  'Claro! Qual modalidade te interessa?',
  'Natação, à noite.',
  'Anotado. Vou te passar para a equipe certa.',
]

export default function Home() {
  return (
    <Layout page="home">
      <section className={`container ${styles.hero}`}>
        <Label>Enzo · desenvolvedor · São Paulo</Label>
        <h1>Sites, atendimento automático no WhatsApp e sistemas para a sua empresa.</h1>
        <p>Eu desenho, programo e mantenho. Você fala direto comigo, do orçamento à entrega.</p>
        <div className={styles.actions}>
          <Button href={wa(mensagens.orcamento)}>Pedir orçamento no WhatsApp</Button>
          <Button href="#como-funciona" variant="secondary">
            Ver como funciona
          </Button>
        </div>
      </section>

      <section className={`container ${styles.showcase}`}>
        <div className={styles.dashboard}>
          <img
            src="/img/puka-dashboard.png"
            alt="Painel da Puka com leads em aberto, conversas e gráficos"
            width={1837}
            height={872}
          />
        </div>
        <div className={styles.chat}>
          <img
            src="/img/puka-conversa.png"
            alt="Conversa no WhatsApp respondida pela IA da Puka"
            width={1051}
            height={788}
          />
        </div>
        <p className={styles.caption}>
          <a href={links.puka} target="_blank" rel="noreferrer">
            Puka
          </a>
          : CRM com atendimento por IA no WhatsApp. Produto próprio, desenvolvido por mim.
        </p>
      </section>

      <section className={`container ${styles.services}`}>
        <SectionHead title="O que eu faço" aside="contrate um ou os três juntos" />
        <div className={styles.serviceGrid}>
          <ServiceCard
            media={
              <img
                className={styles.cover}
                src="/img/aquafit-desktop.jpg"
                alt="Site da Aqua Fit Club, feito pela ezf.tech"
                width={1440}
                height={900}
                loading="lazy"
              />
            }
            label="Site"
            title="Sua empresa encontrada fora do Instagram"
            text="Site com a cara da sua marca, rápido no celular, com WhatsApp em cada produto ou serviço. Domínio sempre no seu nome."
            price={aPartirDe.site}
          />
          <ServiceCard
            media={
              <div className={styles.bubbles} aria-hidden="true">
                {conversa.map((msg) => (
                  <span key={msg}>{msg}</span>
                ))}
              </div>
            }
            label="Automação"
            title="Nenhum cliente esperando resposta"
            text="Atendimento no WhatsApp que responde na hora, entende o que o cliente quer e passa para a pessoa certa. Lembretes e avisos sem ninguém digitar."
            price={aPartirDe.automacao}
          />
          <ServiceCard
            media={
              <img
                className={styles.crop}
                src="/img/puka-dashboard.png"
                alt="Recorte do painel da Puka"
                width={1837}
                height={872}
                loading="lazy"
              />
            }
            label="Sistema"
            title="Sua operação fora da planilha"
            text="Agendamento online, painel, cadastros e relatórios feitos para a sua rotina, entregues por etapas."
            price={aPartirDe.sistema}
          />
        </div>
        <div className={styles.products}>
          <MiniCard inline title="Puka" text="CRM com atendimento por IA no WhatsApp · produto próprio" href={links.puka} />
          <MiniCard inline title="Tábua" text="cardápio digital para restaurantes · em construção" href={links.tabua} />
        </div>
      </section>

      <PaperSection id="como-funciona" title="Como funciona" items={passos} columns={4} />

      <section id="sobre" className={`container ${styles.about}`}>
        <img
          className={styles.photo}
          src="/img/enzo.jpg"
          alt="Enzo Fernandes, desenvolvedor da ezf.tech"
          width={460}
          height={460}
          loading="lazy"
        />
        <div>
          <h2>Quem faz</h2>
          <p>
            Eu sou o Enzo, desenvolvedor aqui em São Paulo. Estudei Desenvolvimento de Software Multiplataforma na Fatec
            Zona Leste e trabalhei como desenvolvedor antes de abrir a ezf.tech.
          </p>
          <p>
            A ezf.tech existe para fazer soluções sob medida. Em vez de encaixar a sua empresa num sistema pronto, eu
            entendo como ela funciona e faço o site, a automação ou o sistema para ela. Foi assim que construí a{' '}
            <a href={links.puka} target="_blank" rel="noreferrer">
              Puka
            </a>
            , um CRM com IA para WhatsApp, e estou construindo a{' '}
            <a href={links.tabua} target="_blank" rel="noreferrer">
              Tábua
            </a>
            , de cardápio digital.
          </p>
          <p>Na ezf.tech, quem conversa com você é quem escreve o código.</p>
          <dl className={styles.facts}>
            <div>
              <dt>formação</dt>
              <dd>Desenvolvimento de Software Multiplataforma · Fatec Zona Leste</dd>
            </div>
            <div>
              <dt>onde</dt>
              <dd>São Paulo, capital</dd>
            </div>
            <div>
              <dt>trabalho com</dt>
              <dd>Node.js, Python, Java, C#, React e Next.js</dd>
            </div>
            <div>
              <dt>código</dt>
              <dd>
                <a href={links.github} target="_blank" rel="noreferrer">
                  github.com/Fernandes-ez ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <FinalCta
        title="Vamos ver o que dá para fazer na sua empresa?"
        text="Você fala direto comigo, sem intermediário."
        cta="Chamar no WhatsApp"
        href={wa()}
      />
    </Layout>
  )
}
