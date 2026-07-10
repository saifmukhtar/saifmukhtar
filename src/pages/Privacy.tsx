import Page from '../components/Page'
import styles from './Legal.module.css'

export default function Privacy() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: June 2026</p>

        <section className={styles.section}>
          <h2>1. Data Sovereignty & Philosophy</h2>
          <p>
            This template keeps privacy copy intentionally generic.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. No Tracking or Cookies</h2>
          <p>
            This template does not include tracking scripts or analytics by default.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Information Collection</h2>
          <p>
            Standard hosting logs may still exist depending on where the site is deployed.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. External Links</h2>
          <p>
            External links may lead to third-party websites with their own policies.
          </p>
        </section>
      </div>
    </Page>
  )
}
