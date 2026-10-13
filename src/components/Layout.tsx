import { useEffect, useState, type ReactNode } from 'react'
import { EMAIL, WHATSAPP_DISPLAY, wa } from '../data/whatsapp'
import styles from './Layout.module.css'

type Page = 'home' | 'sites' | 'automacao' | 'sistemas' | 'termos' | 'privacidade' | 'obrigado' | '404'

const links = [
  { href: '/sites/', label: 'Sites', page: 'sites' },
  { href: '/automacao/', label: 'Automação', page: 'automacao' },
  { href: '/sistemas/', label: 'Sistemas', page: 'sistemas' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#sobre', label: 'Sobre' },
]

function Logo({ height }: { height: number }) {
  return (
    <img
      src="/img/ezf-logo-dark.png"
      alt="ezf.tech"
      width={Math.round((887 / 207) * height)}
      height={height}
      className={styles.logo}
      style={{ height }}
    />
  )
}

export default function Layout({ page, children }: { page: Page; children: ReactNode }) {
  const [open, setOpen] = useState(false)

  // O conteúdo é montado pelo React depois do carregamento, então o navegador não acha a âncora (#como-funciona)
  // sozinho. Repete no load porque fontes e imagens ainda mudam a altura da página.
  useEffect(() => {
    if (!location.hash) return
    const go = () => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'instant' })
    go()
    if (document.readyState !== 'complete') window.addEventListener('load', go, { once: true })
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <a href="/" aria-label="ezf.tech, página inicial">
            <Logo height={30} />
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M2 1l14 12M16 1L2 13" /> : <path d="M0 1H18M0 7H18M0 13H18" />}
            </svg>
          </button>

          <nav id="menu" className={styles.nav} data-open={open} aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.page === page ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className={styles.cta} href={wa()} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <Logo height={22} />
          <p className="mono">
            <a href={wa()} target="_blank" rel="noreferrer">
              {WHATSAPP_DISPLAY}
            </a>
            <span aria-hidden="true"> · </span>
            <span>{EMAIL}</span>
            <span aria-hidden="true"> · </span>
            <span>São Paulo</span>
            <span aria-hidden="true"> · </span>
            <span>
              <a href="/termos/">Termos</a>
              {' · '}
              <a href="/privacidade/">Privacidade</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}
