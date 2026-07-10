import Page from '../components/Page'
import styles from './Legal.module.css'

export default function Terms() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: June 2026</p>

        <section className={styles.section}>
          <h2>1. Open Source Usage</h2>
          <p>
            Everything I build and host here is open source. You are completely free to read, use, fork, and study the code as permitted by the respective repository licenses (typically MIT or AGPL).
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Cryptographic Research & Software</h2>
          <p>
            The software, protocols, and whitepapers provided on this site (such as Kinetic and Enclave) are experimental research projects. They are provided without warranty.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Disclaimer</h2>
          <p>
            All information and software on this site is provided "as-is". I am not liable for any damages or issues that arise from using experimental cryptographic software or decentralized networks discussed here.
          </p>
        </section>
      </div>
    </Page>
  )
}
