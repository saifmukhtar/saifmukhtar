import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Page from '../components/Page'
import { links } from '../data/links'
import styles from './Links.module.css'

const categories: Array<{ key: string; label: string; description: string }> = [
  { key: 'code',     label: 'Code & Projects',      description: 'GitHub, GitLab, repositories' },
  { key: 'research', label: 'Research & Academic',   description: 'Papers, ORCID, YouTube, hcsn.tech' },
  { key: 'social',   label: 'Social',                description: 'Mastodon, Instagram, X, WhatsApp' },
  { key: 'email',    label: 'Email',                 description: 'All inboxes' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
}

export default function Links() {
  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Connections</span>
          <h1 className={styles.title}>Everything, everywhere.</h1>
          <div className="divider" />
          <p className={styles.intro}>
            Every platform I'm on, every project I've published — all in one place.
          </p>
        </motion.div>

        {categories.map(({ key, label, description }, ci) => {
          const categoryLinks = links.filter(l => l.category === key)
          return (
            <div key={key} className={styles.section}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
              >
                <h2 className={styles.sectionTitle}>{label}</h2>
                <span className={styles.sectionDesc}>{description}</span>
              </motion.div>

              <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
              >
                {categoryLinks.map(link => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={styles.card}
                    style={{ '--link-color': link.color } as React.CSSProperties}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    aria-label={`${link.label}: ${link.handle}`}
                  >
                    <div className={styles.cardAccent} />
                    <div className={styles.cardBody}>
                      <div className={styles.cardTop}>
                        <span className={styles.platform}>{link.label}</span>
                        <ExternalLink size={13} className={styles.ext} />
                      </div>
                      <p className={styles.handle}>{link.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
    </Page>
  )
}
