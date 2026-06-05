import Page from '../components/Page'
import styles from './Legal.module.css'

export default function Terms() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: June 2026</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using saifmukhtar.dev, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Intellectual Property</h2>
          <p>
            All original content on this website, including essays, research summaries, and design elements, are the property of Saif Mukhtar unless otherwise noted. Open-source code repositories linked from this site are governed by their respective licenses (typically MIT or AGPL).
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Disclaimer</h2>
          <p>
            The information and research presented on this site are for educational and informational purposes. While every effort is made to ensure accuracy in physics and software engineering writings, the author assumes no responsibility for errors or omissions.
          </p>
        </section>
      </div>
    </Page>
  )
}
