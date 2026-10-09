export const WHATSAPP_NUMBER = '5511991084238'
export const WHATSAPP_DISPLAY = '(11) 99108-4238'
export const EMAIL = 'ezftech.contato@gmail.com'

export const mensagens = {
  geral: 'Oi, Enzo! Vim pelo site da ezf.tech.',
  orcamento: 'Oi, Enzo! Quero um orçamento.',
  prototipo: 'Oi, Enzo! Quero o protótipo grátis do meu site. Meu Instagram é: ',
  pacote: (nome: string) => `Oi, Enzo! Tenho interesse no pacote ${nome}.`,
  puka: 'Oi, Enzo! Quero testar o atendimento com IA da Puka.',
}

export const wa = (texto: string = mensagens.geral) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
