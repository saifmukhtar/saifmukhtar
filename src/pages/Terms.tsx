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
            By accessing and using this template, you accept these placeholder terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Intellectual Property</h2>
          <p>
            All original content in this template is provided as placeholder material.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Disclaimer</h2>
          <p>
            This template is provided as-is for demonstration purposes only.
          </p>
        </section>
      </div>
    </Page>
  )
}
