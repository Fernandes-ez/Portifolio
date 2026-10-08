import Layout from '../components/Layout'
import { Button, FinalCta, Label, MiniCard, PackageGrid } from '../components/ui'
import { pacotesSistemas } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
import styles from './Service.module.css'

// Página sem referência visual: segue o modelo de /automacao.
const possibilidades = [
  { title: 'Agendamento online', text: 'Seus clientes marcam horário sozinhos, sem troca de mensagens.' },
  { title: 'Painel', text: 'O dia da empresa numa tela: agenda, pedidos e o que está pendente.' },
  { title: 'Cadastros', text: 'Clientes, produtos e serviços num lugar só, fora da planilha.' },
  { title: 'Relatórios', text: 'Os números da operação prontos, sem montar conta à mão.' },
]

export default function Sistemas() {
  return (
    <Layout page="sistemas">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Label>Sistemas</Label>
          <h1>Sistema para a sua empresa sair da planilha.</h1>
          <p>
            Agendamento online, painel, cadastros e relatórios feitos para a sua rotina, entregues por etapas, com preço
            fechado em cada uma.
          </p>
          <Button href={wa(mensagens.orcamento)}>Pedir orçamento no WhatsApp</Button>
        </div>
        <div className={styles.shot}>
          <img
            src="/img/puka-dashboard.png"
            alt="Painel da Puka com leads em aberto, conversas e gráficos"
            width={1837}
            height={872}
          />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <h2>O que dá para fazer</h2>
        </div>
        <div className={styles.grid4}>
          {possibilidades.map((item) => (
            <MiniCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <Label>sistemas que eu já construí</Label>
        </div>
        <div className={styles.grid2}>
          <MiniCard inline title="Puka" text="CRM com atendimento por IA no WhatsApp · produto próprio" />
          <MiniCard inline title="Tábua" text="cardápio digital para restaurantes · em construção" />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <h2>Preços claros, sem surpresa</h2>
          <p>Você sabe quanto paga antes de começar. Sistemas maiores são entregues por etapas, com preço fechado em cada uma.</p>
        </div>
        <PackageGrid pacotes={pacotesSistemas} />
      </section>

      <FinalCta
        title="Me conta onde a sua operação ainda depende de planilha."
        cta="Chamar no WhatsApp"
        href={wa()}
      />
    </Layout>
  )
}
