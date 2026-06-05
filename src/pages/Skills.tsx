import { motion } from 'framer-motion'
import Page from '../components/Page'
import { skillGroups } from '../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Stack</span>
          <h1 className={styles.title}>What I work with.</h1>
          <div className="divider" />
          <p className={styles.intro}>
            Tools, languages, and frameworks I've used across my projects. No skill bars or
            percentages — those don't mean anything. Just honest tags.
          </p>
        </motion.div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h2 className={styles.category}>{group.category}</h2>
              <div className={styles.tags}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={`tag ${gi % 2 === 1 ? 'blue' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  )
}
