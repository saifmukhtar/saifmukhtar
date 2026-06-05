import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <span className={styles.name}>Saif Mukhtar</span>
            <span className={styles.tagline}>Emergent Physics & Sovereign Software</span>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Explore</span>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/research">Research</Link>
            </div>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Connect</span>
              <Link to="/contact">Contact</Link>
              <Link to="/links">All Links</Link>
              <a href="https://github.com/saifmukhtar" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottomSection}>
          <span className={styles.copyright}>&copy; {currentYear} Saif Mukhtar. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/license">License</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
