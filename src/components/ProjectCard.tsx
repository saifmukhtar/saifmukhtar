import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { type Project } from '../data/projects'
import ProjectModal from './ProjectModal'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  wide?: boolean
}

export default function ProjectCard({ project, wide = false }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -6, y: dx * 6 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <>
      <motion.div
        ref={cardRef}
        className={`${styles.card} ${wide ? styles.wide : ''}`}
        style={{
          '--accent': project.color,
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        } as React.CSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setModalOpen(true)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setModalOpen(true)}
        aria-label={`Open ${project.name}`}
      >
        {/* Color accent bar */}
        <div className={styles.accentBar} />

        {/* Content */}
        <div className={styles.body}>
          <div className={styles.header}>
            <h3 className={styles.name}>{project.name}</h3>
            <span className={styles.lang}>{project.language}</span>
          </div>
          <p className={styles.tagline}>{project.tagline}</p>
          <div className={styles.tags}>
            {project.tags.slice(0, wide ? 5 : 3).map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Click hint */}
        <div className={styles.hint}>View details →</div>
      </motion.div>

      <ProjectModal
        project={project}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
