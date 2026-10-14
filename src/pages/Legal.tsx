import Layout from '../components/Layout'
import { CNPJ } from '../data/whatsapp'
import styles from './Legal.module.css'

type LegalPage = 'termos' | 'privacidade'

const content = {
  termos: {
    eyebrow: 'documento legal',
    title: 'Termos e condições',
    description: 'As regras para navegar pelo site ezf.tech e contratar os serviços apresentados por aqui.',
    toc: [
      ['escopo', 'Escopo'],
      ['servicos', 'Serviços e contratação'],
      ['responsabilidades', 'Responsabilidades'],
      ['propriedade', 'Propriedade intelectual'],
      ['contato', 'Fale comigo'],
    ],
    sections: [
      {
        id: 'escopo',
        title: '1. Escopo',
        paragraphs: [
          `Estes termos regulam o uso do site ezf.tech e a apresentação dos serviços de criação de sites, automação e sistemas para empresas. O site e os serviços são de responsabilidade de Enzo Fernandes, microempreendedor individual (MEI), CNPJ ${CNPJ}, com sede em São Paulo, SP.`,
          'Ao navegar por este site, você concorda com estes termos. Se não concordar com alguma parte, interrompa a navegação e entre em contato para esclarecer suas dúvidas.',
        ],
      },
      {
        id: 'servicos',
        title: '2. Serviços e contratação',
        paragraphs: [
          'As informações, preços e prazos exibidos no site são referências iniciais. O escopo, o valor final, o cronograma e as condições de cada projeto são definidos em uma proposta específica antes do início do trabalho.',
          'A contratação só é confirmada após a aprovação da proposta e o cumprimento das condições de pagamento nela descritas. Qualquer alteração de escopo pode exigir revisão de prazo e orçamento.',
        ],
      },
      {
        id: 'responsabilidades',
        title: '3. Responsabilidades',
        paragraphs: [
          'O cliente é responsável por fornecer informações, textos, imagens, acessos e aprovações necessários para o projeto, além de garantir que possui autorização para usar os materiais enviados.',
          'O site busca permanecer disponível e atualizado, mas não é possível garantir disponibilidade contínua ou ausência de falhas em serviços de terceiros, como hospedagem, domínio, APIs e WhatsApp.',
        ],
      },
      {
        id: 'propriedade',
        title: '4. Propriedade intelectual',
        paragraphs: [
          'Marcas, textos, imagens e demais materiais fornecidos pelo cliente permanecem de sua propriedade ou de seus respectivos titulares.',
          'A propriedade e as licenças do código, design e demais entregáveis são definidas na proposta de cada projeto. O conteúdo deste site, incluindo textos, identidade visual e código, não pode ser copiado ou redistribuído sem autorização.',
        ],
      },
      {
        id: 'contato',
        title: '5. Fale comigo',
        paragraphs: [
          'Para dúvidas sobre estes termos, entre em contato pelo WhatsApp ou pelo e-mail exibido no rodapé. Estes termos podem ser atualizados para refletir mudanças no site ou nos serviços; a versão vigente será sempre a publicada nesta página.',
        ],
      },
    ],
  },
  privacidade: {
    eyebrow: 'documento legal',
    title: 'Política de privacidade',
    description: 'Como o ezf.tech trata as informações compartilhadas quando você entra em contato ou navega pelo site.',
    toc: [
      ['coleta', 'Informações coletadas'],
      ['uso', 'Como usamos'],
      ['compartilhamento', 'Compartilhamento'],
      ['seguranca', 'Segurança e retenção'],
      ['direitos', 'Seus direitos'],
      ['contato', 'Fale comigo'],
    ],
    sections: [
      {
        id: 'coleta',
        title: '1. Informações coletadas',
        paragraphs: [
          'O site não exige cadastro e não possui formulário próprio. Quando você entra em contato por WhatsApp ou e-mail, podemos receber seu nome, telefone, e-mail, empresa e as informações que você decidir enviar na conversa.',
          'Também podem ser registrados dados técnicos básicos necessários para a segurança e o funcionamento da hospedagem, como endereço IP, data e horário de acesso. Este site não usa cookies de publicidade.',
        ],
      },
      {
        id: 'uso',
        title: '2. Como usamos suas informações',
        paragraphs: [
          'Usamos as informações para responder mensagens, preparar orçamentos, executar serviços solicitados, prestar suporte e melhorar a comunicação e a experiência do site.',
          'Não vendemos seus dados e não usamos as informações recebidas para enviar comunicações que não tenham relação com seu contato ou com um serviço contratado.',
        ],
      },
      {
        id: 'compartilhamento',
        title: '3. Compartilhamento',
        paragraphs: [
          'As conversas iniciadas pelos botões do site passam pelo WhatsApp, que possui sua própria política de privacidade. O envio de uma mensagem também pode envolver o provedor de e-mail e o serviço de hospedagem utilizados para operar o site.',
          'Só compartilhamos informações quando isso for necessário para prestar o serviço, cumprir uma obrigação legal ou proteger direitos. Não comercializamos dados pessoais.',
        ],
      },
      {
        id: 'seguranca',
        title: '4. Segurança e retenção',
        paragraphs: [
          'Adotamos medidas razoáveis para proteger as informações contra acesso indevido, perda ou uso incompatível com esta política. Nenhum serviço online, porém, é completamente livre de riscos.',
          'Mantemos os dados apenas pelo tempo necessário para atender à finalidade do contato, cumprir obrigações legais ou exercer direitos. Depois disso, eles podem ser excluídos ou anonimizados.',
        ],
      },
      {
        id: 'direitos',
        title: '5. Seus direitos',
        paragraphs: [
          'Você pode solicitar confirmação sobre o tratamento de seus dados, acesso, correção, eliminação quando aplicável e informações sobre o uso deles. Para exercer seus direitos, basta enviar uma solicitação pelos canais de contato do site.',
          'Podemos pedir informações adicionais para confirmar sua identidade e responderemos dentro de prazo razoável, observando as obrigações legais aplicáveis.',
        ],
      },
      {
        id: 'contato',
        title: '6. Fale comigo',
        paragraphs: [
          `O controlador dos dados é Enzo Fernandes (ezf.tech), MEI, CNPJ ${CNPJ}, de São Paulo, SP. Se tiver dúvidas sobre privacidade ou quiser fazer uma solicitação, use o WhatsApp ou o e-mail exibido no rodapé. Esta política pode ser atualizada quando houver mudanças no site, nos serviços ou na legislação aplicável.`,
        ],
      },
    ],
  },
} satisfies Record<
  LegalPage,
  {
    eyebrow: string
    title: string
    description: string
    toc: string[][]
    sections: { id: string; title: string; paragraphs: string[] }[]
  }
>

export default function Legal({ page }: { page: LegalPage }) {
  const pageContent = content[page]

  return (
    <Layout page={page}>
      <div className={`container ${styles.page}`}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{pageContent.eyebrow}</span>
          <h1>{pageContent.title}</h1>
          <p>{pageContent.description}</p>
          <p className={styles.updated}>Última atualização: 13 de outubro de 2026</p>
        </header>

        <div className={styles.content}>
          <nav className={styles.toc} aria-label="Nesta página">
            {pageContent.toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <article className={styles.article}>
            {pageContent.sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </Layout>
  )
}
