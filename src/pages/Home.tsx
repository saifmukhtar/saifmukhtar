import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Page from '../components/Page'
import Avatar from '../components/Avatar'
import SocialStrip from '../components/SocialStrip'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import styles from './Home.module.css'

const featured = projects.filter(p => p.featured)

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
}

export default function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className={styles.avatarWrap}>
            <Avatar size={148} />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className={styles.headline}>
            Crafting elegant systems —<br />
            <em>uncovering emergent physics.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className={styles.subtext}>
            Independent Researcher & Software Engineer.<br />
            Exploring causality, graph dynamics, and complex networks.
          </motion.p>

          {/* Social strip */}
          <motion.div variants={itemVariants}>
            <SocialStrip />
          </motion.div>

          {/* Scroll hint */}
          <motion.div variants={itemVariants} className={styles.scrollHint}>
            <span className={styles.scrollDot} />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredHeader}>
            <span className="section-label">Featured Work</span>
            <Link to="/projects" className={styles.viewAll}>
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className={styles.cards}>
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}

