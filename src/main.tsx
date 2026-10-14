import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'

// Cada HTML diz qual página montar em <body data-page="...">; o import dinâmico mantém um bundle por página.
const pages = {
  home: () => import('./pages/Home'),
  sites: () => import('./pages/Sites'),
  automacao: () => import('./pages/Automacao'),
  sistemas: () => import('./pages/Sistemas'),
  termos: () => import('./pages/Termos'),
  privacidade: () => import('./pages/Privacidade'),
  obrigado: () => import('./pages/Obrigado'),
  '404': () => import('./pages/NotFound'),
}

const key = (document.body.dataset.page ?? 'home') as keyof typeof pages

pages[key]().then(({ default: Page }) => {
  const root = document.getElementById('root')!
  const app = (
    <StrictMode>
      <Page />
    </StrictMode>
  )
  // Páginas pré-renderizadas no build já têm conteúdo: o React só "assume". As demais (e o modo dev) montam do zero.
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
})
