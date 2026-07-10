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
            I build software that doesn't spy on you. This website follows that exact same philosophy. Your data is your own, and I have absolutely no interest in collecting it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. No Tracking or Cookies</h2>
          <p>
            This website does not use cookies, Google Analytics, tracking pixels, or any other form of user surveillance. Your visit here is completely private.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Information Collection</h2>
          <p>
            If you contact me via email or any encrypted messaging protocol (like Enclave or Signal), I will only use the information you provide to reply to you. I do not store, sell, or process personal data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Open Source Transparency</h2>
          <p>
            The entire source code of this website is publicly available on GitHub. You can verify exactly how it works and confirm the absence of any data collection mechanisms.
          </p>
        </section>
      </div>
    </Page>
  )
}
