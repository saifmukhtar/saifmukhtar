import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import { projects } from '../data/projects'
import CryptoWidget from '../components/CryptoWidget'
import styles from './Home.module.css'

const featured = projects.filter(p => p.featured)

const projectColors: Record<string, { border: string; bg: string; text: string }> = {
  kinetic:  { border: 'var(--amber)',  bg: 'var(--amber-soft)', text: 'var(--amber)' },
  enclave:  { border: 'var(--blue)',   bg: 'var(--blue-soft)',  text: 'var(--blue)'  },
  antimatter: { border: 'var(--teal)', bg: 'var(--teal-soft)', text: 'var(--teal)'  },
  'kinetic-client': { border: 'var(--slate)', bg: 'var(--slate-soft)', text: 'var(--slate)' },
  chromacard: { border: 'var(--rose)', bg: 'var(--rose-soft)', text: 'var(--rose)' },
}

function TypedText({ text, className }: { text: string; className?: string }) {
  const shouldReduce = useReducedMotion()
  if (shouldReduce) return <span className={className}>{text}</span>
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.022 } },
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden:  { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Home() {
  return (
    <Page>
      {/* ── Hero ────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className={styles.dot} />
            Aligarh, India
          </motion.div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine1}>
              <TypedText text="Hi, I'm Saif." />
            </span>
            <span className={`${styles.heroLine2} display`}>
              <TypedText text="I build things that" />
            </span>
            <span className={`${styles.heroLine3} display`}>
              <TypedText text="feel like they should" />
            </span>
            <span className={`${styles.heroLine4} display`}>
              <TypedText text="exist — but don't." />
            </span>
          </h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Rust · Kotlin · TypeScript · Python
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <a
              href="https://github.com/saifmukhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow"
            >
              GitHub <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <div className={styles.heroRight}>
          <CryptoWidget />
        </div>

        {/* Margin note */}
        <motion.div
          className={styles.marginNote}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <span className={styles.marginNoteText}>Towards the end —</span>
        </motion.div>
      </section>

      {/* ── Projects ────────────────────────────── */}
      <section className={styles.projects}>
        <div className={styles.projectsHead}>
          <p className="eyebrow">Currently building</p>
        </div>

        <div className={styles.projectsGrid}>
          {featured.map((project, i) => {
            const colors = projectColors[project.id] ?? projectColors['kinetic-client']
            
            const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
            }

            return (
              <motion.article
                key={project.id}
                className={`${styles.projectCard} ${i === 0 ? styles.projectCardMain : ''}`}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ '--project-color': colors.border, '--project-bg': colors.bg } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardLang} style={{ color: colors.text }}>
                    {project.language}
                  </span>
                  {project.license && (
                    <span className={styles.cardLicense}>{project.license}</span>
                  )}
                </div>

                <h2 className={styles.cardName}>{project.name}</h2>
                <p className={styles.cardTagline}>{project.tagline}</p>

                {i === 0 && (
                  <p className={styles.cardDesc}>{project.description}</p>
                )}

                <div className={styles.cardTags}>
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arrow"
                    >
                      GitHub <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arrow"
                    >
                      Docs <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.links.fdroid && (
                    <a
                      href={project.links.fdroid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arrow"
                    >
                      F-Droid <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className={styles.allProjects}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/projects" className="btn-ghost">
            All projects →
          </Link>
        </motion.div>
      </section>

      {/* ── Quick facts strip ───────────────────── */}
      <section className={styles.strip}>
        {[
          { label: 'Open source', value: '100%' },
          { label: 'Main language', value: 'Rust' },
          { label: 'Focus', value: 'Privacy · Crypto · P2P' },
          { label: 'Location', value: 'Aligarh, India' },
        ].map(({ label, value }, i) => (
          <motion.div
            key={label}
            className={styles.stripItem}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className={styles.stripLabel}>{label}</span>
            <span className={styles.stripValue}>{value}</span>
          </motion.div>
        ))}
      </section>
    </Page>
  )
}
