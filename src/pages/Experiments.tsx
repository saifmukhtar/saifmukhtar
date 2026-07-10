import { motion } from 'framer-motion'
import Page from '../components/Page'
import styles from './Experiments.module.css'

export default function Experiments() {
  return (
    <Page>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Experiments</p>
          <h1 className={styles.title}>The lab</h1>
          <p className={styles.sub}>
            Small things I build to figure out bigger things. No guarantees.
          </p>
        </motion.div>

        <motion.div
          className={styles.empty}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span className={styles.emptyLabel}>The lab is quiet right now.</span>
          <p className={styles.emptyText}>Check back later — things get built here too.</p>
        </motion.div>
      </div>
    </Page>
  )
}
