import Layout from '../components/Layout'
import { Button, Label } from '../components/ui'
import styles from './Service.module.css'

export default function NotFound() {
  return (
    <Layout page="404">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Label>erro 404</Label>
          <h1>Esta página não existe.</h1>
          <p>O link pode estar errado ou a página mudou de lugar.</p>
          <Button href="/">Voltar para a home</Button>
        </div>
      </section>
    </Layout>
  )
}
