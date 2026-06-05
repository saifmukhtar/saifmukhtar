import { motion } from 'framer-motion'
import { Copy, ExternalLink } from 'lucide-react'
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
      <Copy size={12} />
      {copied && <span className={styles.copiedLabel}>Copied!</span>}
    </button>
  )
}

export default function Publications() {
  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Publications</span>
          <h1 className={styles.title}>Research output.</h1>
          <div className="divider" />
        </motion.div>

        {/* ORCID Badge */}
        <motion.a
          href="https://orcid.org/0009-0004-1698-5729"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.orcidBadge}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -3 }}
        >
          <div className={styles.orcidIcon}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#A6CE39">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.297 0 3.944-1.544 3.944-3.722 0-2.178-1.647-3.722-3.944-3.722h-2.297z"/>
            </svg>
          </div>
          <div>
            <p className={styles.orcidLabel}>ORCID</p>
            <p className={styles.orcidId}>0009-0004-1698-5729</p>
          </div>
          <ExternalLink size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
        </motion.a>

        {/* Paper */}
        <motion.div
          className={styles.paper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          <div className={styles.paperMeta}>
            <span className="tag blue">Preprint</span>
            <span className="tag">Theoretical Physics</span>
            <span className="tag">2025–2026</span>
          </div>
          <h2 className={styles.paperTitle}>
            Hierarchical Causal Structure Networks: A Framework for Emergent Spacetime and Matter
          </h2>
          <p className={styles.paperAuthors}>Saif Mukhtar · HCSN Research Group</p>

          <div className={styles.doiSection}>
            <span className={styles.doiLabel}>ResearchHub</span>
            <CopyChip text="researchhub.com/user/saif-mukhtar" />
          </div>
          <div className={styles.doiSection}>
            <span className={styles.doiLabel}>Zenodo</span>
            <CopyChip text="zenodo.org/search?q=hcsn" />
          </div>

          <div className={styles.actions}>
            <a href="https://www.researchhub.com/user/saif-mukhtar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={14} /> Read on ResearchHub
            </a>
            <a href="https://zenodo.org/search?q=hcsn" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Zenodo →
            </a>
          </div>
        </motion.div>
      </div>
    </Page>
  )
}
