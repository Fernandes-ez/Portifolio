import Layout from '../components/Layout'
import { Button, FinalCta, Label, MiniCard, PackageGrid } from '../components/ui'
import { pacotesAutomacao } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
import { links } from '../data/links'
import styles from './Service.module.css'

// Automações sob medida. O atendimento com IA é vendido à parte (pacote da Puka).
const possibilidades = [
  { title: 'Lembretes', text: 'Confirmação de horário e retorno no WhatsApp, sem ninguém digitar.' },
  { title: 'Avisos', text: 'Aviso de pagamento e de vencimento enviado na hora certa, para cada cliente.' },
  { title: 'Formulários', text: 'O que o cliente preenche cai direto na planilha ou no sistema.' },
  { title: 'Integrações', text: 'Formulário, planilha e sistema conversando entre si, sem copiar e colar.' },
]

const caso = [
  ['problema', 'Leads chegavam sem triagem, exigindo mais tempo da equipe.'],
  ['solução', 'Um chatbot que qualifica o contato e direciona cada lead para o atendimento certo.'],
  ['resultado', 'Fluxo comercial mais claro e menos esforço manual no primeiro atendimento.'],
]

export default function Automacao() {
  return (
    <Layout page="automacao">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Label>Automação</Label>
          <h1>Atendimento automático no WhatsApp para a sua empresa.</h1>
          <p>
            A conversa começa na hora, mesmo fora do horário. A IA entende o que o cliente quer e passa para a pessoa
            certa da equipe, com tudo o que já foi dito.
          </p>
          <Button href={wa(mensagens.orcamento)}>
            Quero automatizar meu atendimento
          </Button>
        </div>
        <div className={styles.shot}>
          <img
            src="/img/puka-conversa.png"
            alt="Conversa no WhatsApp respondida pela IA da Puka"
            width={1051}
            height={788}
          />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <h2>O que dá para automatizar</h2>
          <p>
            Automações sob medida para tirar tarefas repetidas do seu dia. O atendimento com IA no WhatsApp é uma opção à
            parte, pela Puka.
          </p>
        </div>
        <div className={styles.grid4}>
          {possibilidades.map((item) => (
            <MiniCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.case}`}>
        <div>
          <Label>
            caso real ·{' '}
            <a href={links.aquafit} target="_blank" rel="noreferrer">
              Aqua Fit Club ↗
            </a>
          </Label>
          <h2>Triagem dos novos alunos no WhatsApp</h2>
        </div>
        <div className={styles.caseSteps}>
          {caso.map(([label, text]) => (
            <div key={label}>
              <Label>{label}</Label>
              {text}
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <h2>Quanto custa</h2>
          <p>
            Valores de partida. O preço final sai fechado na conversa, antes de começar. Mensagens de marketing da Meta
            são cobradas à parte, direto por ela.
          </p>
        </div>
        <PackageGrid pacotes={pacotesAutomacao} />
      </section>

      <FinalCta
        title="Me conta como é o atendimento da sua empresa hoje."
        cta="Chamar no WhatsApp"
        href={wa()}
      />
    </Layout>
  )
}
