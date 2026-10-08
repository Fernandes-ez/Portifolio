import type { ReactNode } from 'react'
import type { Pacote } from '../data/precos'
import { wa } from '../data/whatsapp'
import styles from './ui.module.css'

const external = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

export function Button({
  href,
  variant = 'primary',
  block = false,
  children,
}: {
  href: string
  variant?: 'primary' | 'secondary'
  block?: boolean
  children: ReactNode
}) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]} ${block ? styles.block : ''}`} {...external(href)}>
      {children}
    </a>
  )
}

export function Label({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>
}

// Espaço reservado para foto/print que ainda não existe. Fica visível como placeholder de propósito.
export function Placeholder({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.placeholder} ${className}`}>{children}</div>
}

export function SectionHead({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className={styles.sectionHead}>
      <h2>{title}</h2>
      {aside && <span className="mono">{aside}</span>}
    </div>
  )
}

export function ServiceCard({
  media,
  label,
  title,
  text,
  price,
}: {
  media?: ReactNode
  label: string
  title: string
  text: string
  price?: string
}) {
  return (
    <article className={styles.card}>
      {media && <div className={styles.cardMedia}>{media}</div>}
      <div className={styles.cardBody}>
        <Label>{label}</Label>
        <h3>{title}</h3>
        <p>{text}</p>
        {price && <span className={styles.cardPrice}>{price}</span>}
      </div>
    </article>
  )
}

// Cartão curto (Puka, Tábua, itens de "o que dá para fazer")
export function MiniCard({ title, text, inline = false }: { title: string; text: string; inline?: boolean }) {
  return (
    <div className={`${styles.mini} ${inline ? styles.miniInline : ''}`}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  )
}

export function PackageCard({ pacote }: { pacote: Pacote }) {
  return (
    <article className={`${styles.package} ${pacote.recomendado ? styles.recommended : ''}`}>
      {pacote.recomendado && <span className={styles.badge}>recomendado</span>}
      <h3>{pacote.nome}</h3>
      <p className={styles.packageDesc}>{pacote.descricao}</p>
      <p className={styles.packagePrice}>{pacote.preco}</p>
      <p className={styles.packageTerms}>{pacote.condicoes}</p>
      <ul>
        {pacote.itens.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button href={wa(pacote.mensagem)} variant={pacote.recomendado ? 'primary' : 'secondary'} block>
        {pacote.cta}
      </Button>
    </article>
  )
}

export function PackageGrid({ pacotes }: { pacotes: Pacote[] }) {
  return (
    <div className={styles.packageGrid} data-count={pacotes.length}>
      {pacotes.map((p) => (
        <PackageCard key={p.nome} pacote={p} />
      ))}
    </div>
  )
}

// Seção clara: título + itens com borda superior de 2px
export function PaperSection({
  id,
  title,
  items,
  columns,
}: {
  id?: string
  title: string
  items: { label?: string; title: string; text: string }[]
  columns: 2 | 4
}) {
  return (
    <section id={id} className={styles.paper}>
      <div className="container">
        <h2>{title}</h2>
        <div className={styles.paperGrid} data-columns={columns}>
          {items.map((item) => (
            <div key={item.title} className={styles.paperItem}>
              {item.label && <span className={styles.paperLabel}>{item.label}</span>}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta({ title, text, cta, href }: { title: string; text?: string; cta: string; href: string }) {
  return (
    <section className="container">
      <div className={styles.final}>
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <Button href={href}>{cta}</Button>
      </div>
    </section>
  )
}
