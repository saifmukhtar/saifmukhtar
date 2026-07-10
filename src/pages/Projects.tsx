import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Page from '../components/Page'
import { projects, Project } from '../data/projects'
import styles from './Projects.module.css'

const ALL = 'All'
const langs = [ALL, ...Array.from(new Set(
  projects.flatMap(p => p.tags.filter(t =>
    ['Rust', 'Kotlin', 'Flutter', 'Python', 'TypeScript'].includes(t)
  ))
))]

const colors: Record<string, { border: string; bg: string }> = {
  kinetic:          { border: 'var(--amber)', bg: 'var(--amber-soft)' },
  enclave:          { border: 'var(--blue)',  bg: 'var(--blue-soft)'  },
  antimatter:       { border: 'var(--teal)',  bg: 'var(--teal-soft)'  },
  'kinetic-client': { border: 'var(--slate)', bg: 'var(--slate-soft)' },
}

function DossierCard({ project, index }: { project: Project; index: number }) {
  const c = colors[project.id] ?? { border: 'var(--ink)', bg: 'var(--bg-subtle)' }
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--c-border': c.border, '--c-bg': c.bg } as React.CSSProperties}
    >
      {/* Animated border perimeter on hover */}
      <motion.div
        className={styles.perimeterBorder}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />

      <div className={styles.cardHeader}>
        <span className={styles.fileId}>
          FILE-{String(projects.indexOf(project) + 1).padStart(3, '0')}
        </span>
        <span className={styles.status}>
          <span className={styles.statusDot} />
          ACTIVE
        </span>
      </div>

      <h2 className={styles.cardName}>{project.name}</h2>
      <p className={styles.cardTagline}>{project.tagline}</p>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.cardTags}>
        {project.tags.map(tag => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.cardLang}>{project.language}</span>
        {project.license && <span className={styles.cardLicense}>{project.license}</span>}
        <div className={styles.cardLinks}>
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-arrow">
              GitHub →
            </a>
          )}
          {project.links.website && (
            <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="btn-arrow">
              Docs ↗
            </a>
          )}
          {project.links.fdroid && (
            <a href={project.links.fdroid} target="_blank" rel="noopener noreferrer" className="btn-arrow">
              F-Droid ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)

  const visible = filter === ALL
    ? projects
    : projects.filter(p => p.tags.includes(filter))

  return (
    <Page>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Projects</p>
          <h1 className={styles.title}>What I build</h1>
        </motion.div>

        {/* Filter strip */}
        <div className={styles.filters}>
          {langs.map(lang => (
            <button
              key={lang}
              className={`${styles.filterBtn} ${filter === lang ? styles.filterActive : ''}`}
              onClick={() => setFilter(lang)}
            >
              {filter === lang && <span className={styles.filterCheck}>✓</span>}
              {lang}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <DossierCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Page>
  )
}
