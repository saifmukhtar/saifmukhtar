import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import Page from '../components/Page'
import styles from './Research.module.css'

export default function Research() {
  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Research</span>
          <h1 className={styles.title}>HCSN Theory</h1>
          <div className="divider" />
          <p className={styles.intro}>
            Hierarchical Causal Structure Networks — a framework exploring whether spacetime,
            matter, and physical law can emerge from discrete, local rewrite rules applied to
            a causal network.
          </p>
        </motion.div>

        {/* Main paper card */}
        <motion.div
          className={styles.paperCard}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div className={styles.paperHeader}>
            <BookOpen size={20} color="var(--accent-blue)" />
            <span className={styles.paperType}>Preprint · 2025–2026</span>
          </div>
          <h2 className={styles.paperTitle}>
            Hierarchical Causal Structure Networks: A Framework for Emergent Spacetime and Matter
          </h2>
          <p className={styles.paperAbstract}>
            This work introduces HCSN as a discrete computational substrate from which continuous
            spacetime geometry and particle-like excitations emerge via local rewrite dynamics.
            The framework is explored through simulation (Python/Rust engines), topological
            diagnostics, and conservation analysis.
          </p>
          <div className={styles.paperMeta}>
            <span className="tag blue">Theoretical Physics</span>
            <span className="tag blue">Emergent Spacetime</span>
            <span className="tag blue">Causal Networks</span>
            <span className="tag blue">Simulation</span>
          </div>
          <div className={styles.paperLinks}>
            <a href="https://hcsn.tech" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={15} /> hcsn.tech
            </a>
            <a href="https://www.researchhub.com/user/saif-mukhtar" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              ResearchHub →
            </a>
            <a href="https://zenodo.org/search?q=hcsn" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Zenodo →
            </a>
          </div>
        </motion.div>

        {/* Quick fact cards */}
        <div className={styles.factGrid}>
          {[
            { label: 'Core Idea', text: 'Spacetime emerges from a hypergraph rewriting system — not assumed.' },
            { label: 'Method', text: 'Computational simulation of rewrite dynamics, topological diagnostics, conservation laws.' },
            { label: 'Status', text: 'Active research — theory evolves. All current documentation is at hcsn.tech.' },
            { label: 'YouTube', text: 'Visual explainers and simulation walkthroughs at @hcsn-theory.' },
          ].map(({ label, text }, i) => (
            <motion.div
              key={label}
              className={styles.factCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className={styles.factLabel}>{label}</span>
              <p className={styles.factText}>{text}</p>
            </motion.div>
          ))}
        </div>

        {/* YouTube link */}
        <motion.a
          href="https://youtube.com/@hcsn-theory"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ytCard}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.ytIcon}>▶</span>
          <div>
            <p className={styles.ytTitle}>Watch on YouTube</p>
            <p className={styles.ytHandle}>@hcsn-theory</p>
          </div>
          <ExternalLink size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
        </motion.a>

      </div>
    </Page>
  )
}
