import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import styles from './Experiments.module.css'

const experiments = [
  {
    name: 'Valentine',
    description: 'A small, sentimental web experience. Built on a quiet evening. Sometimes the best experiments are personal.',
    github: 'https://github.com/saifmukhtar/valentine',
    tags: ['JavaScript', 'Vite'],
    color: '#D47A9A',
  },
  {
    name: 'Date2Partner',
    description: 'An AI-assisted dating app experiment exploring how Gemini API can make connection feel more intentional.',
    github: 'https://github.com/saifmukhtar/date2partner',
    tags: ['Kotlin', 'Gemini API'],
    color: '#E8A55A',
  },
]

export default function Experiments() {
  if (experiments.length === 0) {
    return (
      <Page>
        <div className="content-wrap" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1rem' }}>No Experiments Yet</h2>
          <p style={{ color: 'var(--text-secondary)' }}>The lab is quiet. Check back soon.</p>
        </div>
      </Page>
    )
  }

  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Experiments</span>
          <h1 className={styles.title}>Quieter work.</h1>
          <div className="divider" />
          <p className={styles.intro}>
            Not every project needs to scale. Some things are worth building just to see if they work —
            or because they feel right on a particular evening.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {experiments.map(({ name, description, github, tags, color }, i) => (
            <motion.div
              key={name}
              className={styles.card}
              style={{ '--accent': color } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.accentBar} />
              <div className={styles.body}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.desc}>{description}</p>
                <div className={styles.tags}>
                  {tags.map(t => <span key={t} className="tag rose">{t}</span>)}
                </div>
                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}

          {/* More coming card */}
          <motion.div
            className={`${styles.card} ${styles.comingSoon}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <div className={styles.body}>
              <h2 className={styles.name} style={{ color: 'var(--text-muted)' }}>More to come.</h2>
              <p className={styles.desc}>
                Some experiments live on paper before they make it into code. Watch this space.
              </p>
              <Link to="/links" className={styles.link}>All projects on GitHub →</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Page>
  )
}
