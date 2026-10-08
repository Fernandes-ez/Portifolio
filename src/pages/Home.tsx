import Layout from '../components/Layout'
import { Button, FinalCta, Label, MiniCard, PaperSection, Placeholder, SectionHead, ServiceCard } from '../components/ui'
import { aPartirDe } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
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
        <p className={styles.caption}>Puka: CRM com atendimento por IA no WhatsApp. Produto próprio, desenvolvido por mim.</p>
      </section>

      <section className={`container ${styles.services}`}>
        <SectionHead title="O que eu faço" aside="contrate um ou os três juntos" />
        <div className={styles.serviceGrid}>
          <ServiceCard
            media={<Placeholder>[print do site da Aqua Fit, quando a nova versão estiver no ar]</Placeholder>}
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
          <MiniCard inline title="Puka" text="CRM com atendimento por IA no WhatsApp · produto próprio" />
          <MiniCard inline title="Tábua" text="cardápio digital para restaurantes · em construção" />
        </div>
      </section>

      <PaperSection id="como-funciona" title="Como funciona" items={passos} columns={4} />

      <section id="sobre" className={`container ${styles.about}`}>
        <Placeholder className={styles.photo}>[sua foto]</Placeholder>
        <div>
          <h2>Quem faz</h2>
          <p>
            Eu sou o Enzo, desenvolvedor em São Paulo. Trabalho com Node.js, Python, Java, C# e React/Next.js. Construí
            a Puka, um CRM com IA para WhatsApp, e estou construindo a Tábua, de cardápio digital.
          </p>
          <p>Na ezf.tech, quem conversa com você é quem escreve o código.</p>
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
