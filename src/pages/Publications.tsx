import { motion } from 'framer-motion'
import { useState } from 'react'
import Page from '../components/Page'
import styles from './Publications.module.css'

function CopyChip({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button className={styles.copyChip} onClick={copy}>
      <span className={styles.chipText}>{text}</span>
      <span className={styles.chipIcon}>{copied ? '✓' : '⎘'}</span>
    </button>
  )
}

export default function Publications() {
  return (
    <Page>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Publications</p>
          <h1 className={styles.title}>Research output</h1>
        </motion.div>

        {/* ORCID */}
        <motion.a
          href="https://orcid.org/0000-0002-8193-108X"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.orcid}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className={styles.orcidBadge}>ORCID</div>
          <div className={styles.orcidInfo}>
            <span className={styles.orcidName}>Saif Mukhtar</span>
            <span className={styles.orcidId}>0000-0002-8193-108X ↗</span>
          </div>
        </motion.a>

        {/* Paper */}
        <motion.div
          className={styles.paper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          <div className={styles.paperMeta}>
            <span className="chip">Cryptography</span>
            <span className="chip">VDF</span>
            <span className="chip">2026</span>
          </div>
          <h2 className={styles.paperTitle}>
            The Kinetic Protocol: A Naming System Secured by Computation and Time
          </h2>
          <p className={styles.paperAuthors}>Saif Mukhtar · Independent Research</p>

          <div className={styles.refs}>
            <div className={styles.ref}>
              <span className={styles.refLabel}>GitHub</span>
              <CopyChip text="github.com/saifmukhtar/kinetic/whitepaper" />
            </div>
            <div className={styles.ref}>
              <span className={styles.refLabel}>Documentation</span>
              <CopyChip text="kinetic.saifmukhtar.dev" />
            </div>
          </div>

          <div className={styles.actions}>
            <a href="https://github.com/saifmukhtar/kinetic/tree/main/whitepaper" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Read Whitepapers
            </a>
            <a href="https://kinetic.saifmukhtar.dev" target="_blank" rel="noopener noreferrer" className="btn-arrow">
              Documentation →
            </a>
          </div>
        </motion.div>
      </div>
    </Page>
  )
}
