// Todos os preços do site. Automação e sistemas ainda estão em validação: troque aqui e o site inteiro acompanha.
import { mensagens } from './whatsapp'

export type Pacote = {
  nome: string
  descricao: string
  preco: string
  // true mostra "a partir de" acima do preço; false volta ao valor fixo
  aPartirDe: boolean
  condicoes: string
  itens: string[]
  cta: string
  mensagem: string
  recomendado?: boolean
}

export const aPartirDe = {
  site: 'a partir de R$ 790',
  automacao: 'a partir de R$ 690',
  sistema: 'a partir de R$ 790',
}

export const pacotesSites: Pacote[] = [
  {
    nome: 'Página',
    descricao: 'Uma página com quem você é, seus serviços, fotos, mapa e WhatsApp.',
    preco: 'R$ 790',
    aPartirDe: true,
    condicoes: 'manutenção a partir de R$ 49/mês · ou a partir de 12x de R$ 115 sem entrada',
    itens: [
      'Página única com as seções do seu negócio',
      'Botão de WhatsApp',
      'Mapa e horário de funcionamento',
      'Domínio no seu nome',
    ],
    cta: 'Quero a Página',
    mensagem: mensagens.pacote('Página'),
  },
  {
    nome: 'Site',
    descricao: 'Para mostrar a empresa e os destaques com cara profissional.',
    preco: 'R$ 1.490',
    aPartirDe: true,
    condicoes: 'manutenção a partir de R$ 79/mês · ou a partir de 12x de R$ 204 sem entrada',
    itens: ['Início, coleções, sobre e contato', 'Até 20 itens em destaque', 'WhatsApp em cada item', 'Eu troco até 10 itens por mês'],
    cta: 'Quero o Site',
    mensagem: mensagens.pacote('Site'),
  },
  {
    nome: 'Catálogo',
    descricao: 'Para quem vende muitos produtos e quer atualizar sozinho.',
    preco: 'R$ 2.490',
    aPartirDe: true,
    condicoes: 'manutenção a partir de R$ 99/mês · ou a partir de 12x de R$ 307 sem entrada',
    itens: [
      'Todas as telas do Site',
      'Itens ilimitados, com filtros',
      'Página própria para cada item',
      'Painel no celular para cadastrar e marcar como esgotado',
      '1 treinamento',
    ],
    cta: 'Quero o Catálogo',
    mensagem: mensagens.pacote('Catálogo'),
    recomendado: true,
  },
]

// Opcional do Catálogo, mostrado abaixo da grade em /sites
export const implantacaoCatalogo = 'Quer que eu cadastre os produtos? Implantação dos primeiros 80 itens: + R$ 390.'

export const pacotesAutomacao: Pacote[] = [
  {
    nome: 'Automação simples',
    descricao: 'Um fluxo que tira uma tarefa repetida do seu dia.',
    preco: 'R$ 690',
    aPartirDe: true,
    condicoes: 'manutenção a partir de R$ 119/mês',
    itens: [
      'Lembrete de horário ou aviso de pagamento no WhatsApp',
      'Formulário caindo direto na planilha',
      'Ajustes e suporte inclusos na manutenção',
    ],
    cta: 'Quero automatizar uma tarefa',
    mensagem: mensagens.pacote('Automação simples'),
  },
  {
    nome: 'Automação completa',
    descricao: 'Vários sistemas conversando, com regras e IA, desenhados para a sua operação.',
    preco: 'R$ 1.690',
    aPartirDe: true,
    condicoes: 'manutenção a partir de R$ 199/mês',
    itens: [
      'Três ou mais integrações',
      'Levantamento do processo antes do orçamento',
      'Entrega por etapas, com preço fechado em cada uma',
    ],
    cta: 'Conversar sobre o meu caso',
    mensagem: mensagens.pacote('Automação completa'),
    recomendado: true,
  },
  {
    nome: 'Atendimento com IA no WhatsApp',
    descricao: 'Atendente com IA no WhatsApp, com CRM e sua equipe respondendo junto.',
    preco: 'R$ 197/mês',
    aPartirDe: true,
    condicoes: 'pela Puka · implantação assistida R$ 490 no plano mensal, grátis no anual',
    itens: [
      'IA configurada com as regras do seu negócio',
      'Triagem e passagem para a pessoa certa',
      'Painel com leads e histórico',
      '14 dias grátis para testar',
    ],
    cta: 'Quero testar a Puka',
    mensagem: mensagens.puka,
  },
]

// Página ainda sem referência visual: itens montados a partir do escopo do handoff, revisar.
export const pacotesSistemas: Pacote[] = [
  {
    nome: 'Agendamento online',
    descricao: 'Seus clientes marcam horário sozinhos, e você acompanha tudo num painel.',
    preco: 'R$ 790',
    aPartirDe: true,
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
    preco: 'R$ 3.900',
    aPartirDe: true,
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
