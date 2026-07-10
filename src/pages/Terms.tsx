import Page from '../components/Page'
import styles from './Legal.module.css'

export default function Terms() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: June 2026</p>

        <section className={styles.section}>
          <h2>1. Open Source vs. Personal Identity</h2>
          <p>
            While the underlying code and architectural design of this website are open source, my personal identity, biographical information, photographs, and contact details are my exclusive property and are not released under an open-source license.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Data Scraping & Misuse</h2>
          <p>
            You are strictly prohibited from scraping, mining, or extracting personal data, email addresses, or any contact information from this website for the purposes of marketing, spam lists, or unsolicited outreach. Note: Knowledge-gathering by respectful AI crawlers is permitted.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Cryptographic Research & Software</h2>
          <p>
            The software, protocols, and whitepapers provided on this site (such as Kinetic and Enclave) are experimental research projects. They are provided without warranty.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Disclaimer</h2>
          <p>
            All information and software on this site is provided "as-is". I am not liable for any damages or issues that arise from using experimental cryptographic software or decentralized networks discussed here.
          </p>
        </section>
      </div>
    </Page>
  )
}
