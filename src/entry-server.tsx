// Usado só no build: gera o HTML de cada página (pré-renderização) e os dados estruturados (JSON-LD).
// Assim robôs que não executam JavaScript (buscadores e IAs) já recebem o texto do site.
import { renderToString } from 'react-dom/server'
import Home from './pages/Home'
import Sites from './pages/Sites'
import Automacao from './pages/Automacao'
import Sistemas from './pages/Sistemas'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'
import NotFound from './pages/NotFound'
import { perguntasSites } from './data/faq'
import { pacotesAutomacao, pacotesSistemas, pacotesSites, type Pacote } from './data/precos'
import { CNPJ, EMAIL, WHATSAPP_NUMBER } from './data/whatsapp'
import { links } from './data/links'

export const SITE = 'https://ezf-tech.com'

// Perfil da empresa no Google e redes. Mantenha em sync com o que o negócio realmente tem.
const GOOGLE_PERFIL = 'https://share.google/nsE8k2pHoZ9tKTPhj'
const INSTAGRAM = 'https://www.instagram.com/ezf.tech/'

export type PageKey = 'home' | 'sites' | 'automacao' | 'sistemas' | 'termos' | 'privacidade' | '404'

const pages = { home: Home, sites: Sites, automacao: Automacao, sistemas: Sistemas, termos: Termos, privacidade: Privacidade, '404': NotFound }

export const render = (page: PageKey) => {
  const Page = pages[page]
  return renderToString(<Page />)
}

const valor = (texto: string) => Number(texto.replace(/[^\d,]/g, '').replace(',', '.'))

const oferta = (p: Pacote) => ({
  '@type': 'Offer',
  name: p.nome,
  description: `${p.descricao} ${p.aPartirDe ? 'A partir de' : 'Valor:'} ${p.preco}. ${p.condicoes}.`,
  priceCurrency: 'BRL',
  priceSpecification: p.aPartirDe
    ? { '@type': 'PriceSpecification', minPrice: valor(p.preco), priceCurrency: 'BRL' }
    : { '@type': 'PriceSpecification', price: valor(p.preco), priceCurrency: 'BRL' },
  url: `${SITE}${pacotesSites.includes(p) ? '/sites/' : pacotesAutomacao.includes(p) ? '/automacao/' : '/sistemas/'}`,
})

const empresa = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#empresa`,
  name: 'ezf.tech',
  url: `${SITE}/`,
  description:
    'Sites, atendimento automático no WhatsApp e sistemas para pequenas e médias empresas, feitos e mantidos por Enzo Fernandes, desenvolvedor em São Paulo.',
  logo: `${SITE}/img/ezf-logo-dark.png`,
  image: `${SITE}/og.png`,
  telephone: `+${WHATSAPP_NUMBER}`,
  email: EMAIL,
  taxID: CNPJ,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: ['criação de sites', 'automação de atendimento no WhatsApp', 'sistemas sob medida', 'agendamento online'],
  founder: { '@type': 'Person', name: 'Enzo Fernandes', jobTitle: 'Desenvolvedor', url: `${SITE}/#sobre` },
  sameAs: [GOOGLE_PERFIL, INSTAGRAM, links.github],
  makesOffer: [...pacotesSites, ...pacotesAutomacao, ...pacotesSistemas].map(oferta),
}

const trilha = (nome: string, caminho: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: nome, item: `${SITE}${caminho}` },
  ],
})

// Dados estruturados de cada página. Só descreve o que está visível no site.
export const jsonld = (page: PageKey, caminho: string | null): object | null => {
  const site = { '@type': 'WebSite', '@id': `${SITE}/#site`, url: `${SITE}/`, name: 'ezf.tech', inLanguage: 'pt-BR', publisher: { '@id': `${SITE}/#empresa` } }
  if (page === 'home') return { '@context': 'https://schema.org', '@graph': [empresa, site] }
  const nomes: Partial<Record<PageKey, string>> = { sites: 'Sites', automacao: 'Automação', sistemas: 'Sistemas' }
  const nome = nomes[page]
  if (!nome || !caminho) return null
  const grafo: object[] = [trilha(nome, caminho)]
  if (page === 'sites') {
    grafo.push({
      '@type': 'FAQPage',
      mainEntity: perguntasSites.map((q) => ({ '@type': 'Question', name: q.title, acceptedAnswer: { '@type': 'Answer', text: q.text } })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': grafo }
}
