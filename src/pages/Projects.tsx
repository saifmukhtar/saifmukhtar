import { motion } from 'framer-motion'
import Page from '../components/Page'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  if (projects.length === 0) {
    return (
      <Page>
        <div className="content-wrap" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1rem' }}>Data Unavailable</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Projects are currently being indexed. Please check back soon.</p>
        </div>
      </Page>
    )
  }

  return (
    <Page>
      <div className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Work</span>
          <h1 className={styles.title}>Things I've built.</h1>
          <div className="divider" />
          <p className={styles.intro}>
            A mix of privacy-first Android apps, physics simulation engines, and a few quieter
            experiments. Click any card to learn more.
          </p>
        </motion.div>

        {/* Featured — bento wide */}
        <div className={styles.bentoGrid}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <ProjectCard project={project} wide />
            </motion.div>
          ))}
        </div>

        {/* Rest */}
        <div className={styles.grid}>
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  )
}
