export const WHATSAPP_NUMBER = '5511991084238'
export const WHATSAPP_DISPLAY = '(11) 99108-4238'
export const EMAIL = 'ezftech.contato@gmail.com'

export const mensagens = {
  geral: 'Oi, Enzo! Vim pelo site da ezf.tech.',
  orcamento: 'Oi, Enzo! Quero um orçamento.',
  prototipo: 'Oi, Enzo! Quero o protótipo grátis do meu site. Meu Instagram é: ',
  pacoteSite: (nome: string) => `Oi, Enzo! Tenho interesse no pacote ${nome}.`,
  pacote: (nome: string) => `Oi, Enzo! Tenho interesse em ${nome}.`,
}

export const wa = (texto: string = mensagens.geral) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
