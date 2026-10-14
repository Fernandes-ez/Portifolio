// Perguntas frequentes do site. Ficam aqui para a página e os dados estruturados (JSON-LD) usarem o mesmo texto.
export type Pergunta = { title: string; text: string }

export const perguntasSites: Pergunta[] = [
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
