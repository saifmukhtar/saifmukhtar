import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Page from '../components/Page'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <Page>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Topology Disconnected</h2>
          <p className={styles.description}>
            The node you are looking for does not exist in the current causal graph. 
            It may have been moved, deleted, or never existed.
          </p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            Return to Root
          </Link>
        </motion.div>
      </div>
    </Page>
  )
}
