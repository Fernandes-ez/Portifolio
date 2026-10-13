import { useEffect, useMemo } from 'react'
import Layout from '../components/Layout'
import { Button, Label } from '../components/ui'
import { mensagens, waDireto } from '../data/whatsapp'
import styles from './Service.module.css'

// Página de passagem: todo botão de WhatsApp do site passa por aqui antes de abrir a conversa. Ela existe para o
// Google Ads/Analytics contarem o pedido de contato ("solicitação recebida"). Depois de um instante, abre o WhatsApp.
const ATRASO_MS = 1500

export default function Obrigado() {
  // O destino é sempre wa.me do número do site: o parâmetro ?t= só muda o texto da mensagem.
  const destino = useMemo(() => {
    const texto = new URLSearchParams(location.search).get('t')?.slice(0, 500) || mensagens.geral
    return waDireto(texto)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => location.replace(destino), ATRASO_MS)
    return () => window.clearTimeout(id)
  }, [destino])

  return (
    <Layout page="obrigado">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy} role="status">
          <Label>solicitação recebida</Label>
          <h1>Abrindo o WhatsApp…</h1>
          <p>Se a conversa não abrir sozinha em alguns segundos, toque no botão abaixo.</p>
          <Button href={destino}>Abrir o WhatsApp agora</Button>
          <Button href="/" variant="secondary">
            Voltar para o site
          </Button>
        </div>
      </section>
    </Layout>
  )
}
