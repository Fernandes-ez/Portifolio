// Todos os preços do site. Automação e sistemas ainda estão em validação: troque aqui e o site inteiro acompanha.
import { mensagens } from './whatsapp'

export type Pacote = {
  nome: string
  descricao: string
  preco: string
  condicoes: string
  itens: string[]
  cta: string
  mensagem: string
  recomendado?: boolean
}

export const aPartirDe = {
  site: 'a partir de R$ 1.490',
  automacao: 'a partir de R$ 490',
  sistema: 'a partir de R$ 790',
}

export const pacotesSites: Pacote[] = [
  {
    nome: 'Vitrine',
    descricao: 'Para mostrar a empresa e os destaques com cara profissional.',
    preco: 'R$ 1.490',
    condicoes: '+ R$ 79/mês · ou 12x de R$ 204 sem entrada',
    itens: ['Início, coleções, sobre e contato', 'Até 20 itens em destaque', 'WhatsApp em cada item', 'Eu troco até 10 itens por mês'],
    cta: 'Quero o Vitrine',
    mensagem: mensagens.pacoteSite('Vitrine'),
  },
  {
    nome: 'Catálogo',
    descricao: 'Para quem vende muitos produtos e quer atualizar sozinho.',
    preco: 'R$ 2.490',
    condicoes: '+ R$ 99/mês · ou 12x de R$ 307 sem entrada',
    itens: [
      'Todas as telas do Vitrine',
      'Itens ilimitados, com filtros',
      'Página própria para cada item',
      'Painel no celular para cadastrar e marcar como esgotado',
      '1 treinamento',
    ],
    cta: 'Quero o Catálogo',
    mensagem: mensagens.pacoteSite('Catálogo'),
    recomendado: true,
  },
  {
    nome: 'Catálogo + implantação',
    descricao: 'Para quem quer o site pronto, com os produtos já cadastrados.',
    preco: 'R$ 3.290',
    condicoes: '+ R$ 99/mês · ou 12x de R$ 374 sem entrada',
    itens: ['Tudo do Catálogo', 'Eu cadastro os primeiros 80 itens', '2 treinamentos'],
    cta: 'Quero com implantação',
    mensagem: mensagens.pacoteSite('Catálogo + implantação'),
  },
]

export const pacotesAutomacao: Pacote[] = [
  {
    nome: 'Automação simples',
    descricao: 'Um fluxo que tira uma tarefa repetida do seu dia.',
    preco: 'R$ 690',
    condicoes: '+ R$ 149/mês de manutenção',
    itens: [
      'Lembrete de horário ou aviso de pagamento no WhatsApp',
      'Formulário caindo direto na planilha',
      'Ajustes e suporte inclusos na manutenção',
    ],
    cta: 'Quero automatizar uma tarefa',
    mensagem: mensagens.pacote('Automação simples'),
  },
  {
    nome: 'Recepção com IA',
    descricao: 'Atendente com IA no WhatsApp, com CRM e sua equipe respondendo junto.',
    preco: 'R$ 490',
    condicoes: 'implantação + plano da Puka a partir de R$ 197/mês',
    itens: [
      'IA configurada com as regras do seu negócio',
      'Triagem e passagem para a pessoa certa',
      'Painel com leads, conversas e histórico',
      'Treinamento da equipe',
    ],
    cta: 'Quero a recepção com IA',
    mensagem: mensagens.pacote('Recepção com IA'),
    recomendado: true,
  },
  {
    nome: 'Automação completa',
    descricao: 'Vários sistemas conversando, com regras e IA, desenhados para a sua operação.',
    preco: 'a partir de R$ 1.690',
    condicoes: '+ R$ 249/mês de manutenção',
    itens: [
      'Três ou mais integrações',
      'Levantamento do processo antes do orçamento',
      'Entrega por etapas, com preço fechado em cada uma',
    ],
    cta: 'Conversar sobre o meu caso',
    mensagem: mensagens.pacote('Automação completa'),
  },
]

// Página ainda sem referência visual: itens montados a partir do escopo do handoff, revisar.
export const pacotesSistemas: Pacote[] = [
  {
    nome: 'Agendamento online',
    descricao: 'Seus clientes marcam horário sozinhos, e você acompanha tudo num painel.',
    preco: 'a partir de R$ 790',
    condicoes: '+ R$ 79/mês',
    itens: [
      'Página de agendamento com a cara da sua marca',
      'Painel com a agenda do dia e os cadastros dos clientes',
      'Confirmação do horário no WhatsApp',
    ],
    cta: 'Quero o agendamento online',
    mensagem: mensagens.pacote('Agendamento online'),
    recomendado: true,
  },
  {
    nome: 'Sistema sob medida',
    descricao: 'Painel, cadastros e relatórios feitos para a rotina da sua empresa.',
    preco: 'a partir de R$ 3.900',
    condicoes: 'entregue por etapas, com preço fechado em cada uma',
    itens: [
      'Levantamento do processo antes do orçamento',
      'Painel, cadastros e relatórios do seu jeito',
      'Entrega por etapas, você usa desde a primeira',
    ],
    cta: 'Conversar sobre o meu sistema',
    mensagem: mensagens.pacote('Sistema sob medida'),
  },
]
