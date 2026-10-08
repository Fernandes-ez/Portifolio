import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'

// Cada HTML diz qual página montar em <body data-page="...">; o import dinâmico mantém um bundle por página.
const pages = {
  home: () => import('./pages/Home'),
  sites: () => import('./pages/Sites'),
  automacao: () => import('./pages/Automacao'),
  sistemas: () => import('./pages/Sistemas'),
  '404': () => import('./pages/NotFound'),
}

const key = (document.body.dataset.page ?? 'home') as keyof typeof pages

pages[key]().then(({ default: Page }) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
})
