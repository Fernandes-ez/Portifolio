import Layout from '../components/Layout'
import { Button, FinalCta, Label, PackageGrid, PaperSection, Placeholder } from '../components/ui'
import { pacotesSites } from '../data/precos'
import { mensagens, wa } from '../data/whatsapp'
import styles from './Service.module.css'

const garantias = [
  ['Protótipo grátis', 'você vê antes de pagar'],
  ['Domínio no seu nome', 'se quiser sair, leva tudo'],
  ['WhatsApp em cada item', 'o cliente chama já sabendo o que quer'],
  ['2 rodadas de ajustes', 'você aprova o design antes'],
]

const perguntas = [
  { title: 'O site é meu?', text: 'Sim. Domínio, contas e redes ficam no seu nome. Se um dia quiser sair, eu entrego tudo.' },
  {
    title: 'Por que tem mensalidade?',
    text: 'Ela paga a hospedagem, a segurança, os backups e o meu tempo para ajustes e suporte. O site fica no ar e atualizado sem você se preocupar.',
  },
  {
    title: 'Dá para vender com pagamento no site?',
    text: 'Os pacotes acima fecham a venda pelo WhatsApp. Se você precisa de carrinho e pagamento online, eu monto uma loja na Nuvemshop com o seu visual, com orçamento à parte.',
  },
  {
    title: 'Quanto tempo leva?',
    text: 'Cerca de 4 semanas depois que você aprova o protótipo e envia o material, com prévias no caminho.',
  },
]

export default function Sites() {
  return (
    <Layout page="sites">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Label>Sites</Label>
          <h1>Site profissional para a sua empresa, com preço fechado.</h1>
          <p>
            Antes de decidir, você recebe um protótipo grátis com a cara da sua marca. Do sim ao site no ar, cerca de 4
            semanas.
          </p>
          <div className={styles.actions}>
            <Button href={wa(mensagens.prototipo)}>Quero meu protótipo grátis</Button>
            <Button href="#pacotes" variant="secondary">
              Ver os pacotes
            </Button>
          </div>
        </div>
        <Placeholder className={styles.heroPlaceholder}>[print do site da Aqua Fit no computador e no celular]</Placeholder>
      </section>

      <div className="container">
        <div className={styles.guarantees}>
          {garantias.map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="pacotes" className={`container ${styles.section}`}>
        <div className={styles.intro}>
          <h2>Escolha o seu pacote</h2>
          <p>
            Pagamento em 50% no início e 50% na entrega, em até 3x, ou em 12x sem entrada já com a manutenção do primeiro
            ano.
          </p>
        </div>
        <PackageGrid pacotes={pacotesSites} />
        <div className={styles.includes}>
          <strong>A mensalidade inclui</strong>
          <span>hospedagem · certificado de segurança · backups · pequenos ajustes (até 1 hora por mês) · suporte pelo WhatsApp</span>
        </div>
        <p className={styles.note}>Domínio (.com.br) registrado no seu nome, cerca de R$ 40 por ano, pago direto ao registro.</p>
      </section>

      <PaperSection title="Perguntas comuns" items={perguntas} columns={2} />

      <FinalCta
        title="Veja o seu site antes de pagar."
        text="Me manda o Instagram da sua empresa e eu faço o protótipo."
        cta="Pedir protótipo no WhatsApp"
        href={wa(mensagens.prototipo)}
      />
    </Layout>
  )
}
