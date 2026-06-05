import { AnimatePresence, motion } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { type Project } from '../data/projects'
import styles from './ProjectModal.module.css'

interface ProjectModalProps {
  project: Project
  open: boolean
  onClose: () => void
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
          >
            {/* Accent bar */}
            <div
              className={styles.accentBar}
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
            />

            <div className={styles.content}>
              {/* Header */}
              <div className={styles.header}>
                <div>
                  <h2 className={styles.name}>{project.name}</h2>
                  {project.license && (
                    <span className={styles.license}>{project.license}</span>
                  )}
                </div>
                <button className={styles.close} onClick={onClose} aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              {/* Description */}
              <p className={styles.description}>{project.description}</p>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.actions}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <ExternalLink size={16} />
                    Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
