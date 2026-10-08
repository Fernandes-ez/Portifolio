import Layout from '../components/Layout'
import { Button, FinalCta, Label, MiniCard, PackageGrid } from '../components/ui'
import { pacotesAutomacao } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
import styles from './Service.module.css'

const possibilidades = [
  { title: 'Primeira resposta', text: 'Quem chama no WhatsApp é atendido na hora, a qualquer horário.' },
  { title: 'Triagem', text: 'A IA pergunta o que o cliente precisa e encaminha para a pessoa certa.' },
  { title: 'Lembretes e avisos', text: 'Confirmação de horário, aviso de pagamento e retorno, sem ninguém digitar.' },
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
        </div>
        <div className={styles.grid4}>
          {possibilidades.map((item) => (
            <MiniCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.case}`}>
        <div>
          <Label>caso real · Aqua Fit Club</Label>
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
          <h2>Preços claros, sem surpresa</h2>
          <p>
            Você sabe quanto paga antes de começar. Mensagens de marketing enviadas pela Meta são cobradas à parte, direto
            por ela.
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
