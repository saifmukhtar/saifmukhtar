import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './NavBar.module.css'

const ALL_NAV = [
  { path: '/',              label: 'Home' },
  { path: '/about',         label: 'About' },
  { path: '/projects',      label: 'Projects' },
  { path: '/research',      label: 'Research' },
  { path: '/skills',        label: 'Skills' },
  { path: '/publications',  label: 'Publications' },
  { path: '/experiments',   label: 'Experiments' },
  { path: '/contact',       label: 'Contact' },
  { path: '/links',         label: 'Links' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <motion.div
        className={styles.pill}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
      >
        <NavLink to="/" className={styles.logoMark} aria-label="Home">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2 C6 2 2 6 2 11 C2 16 6 20 11 20 C16 20 20 16 20 11 C20 8 18 5.5 15 4"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <circle cx="11" cy="11" r="2.5" fill="currentColor" opacity="0.6"/>
          </svg>
        </NavLink>

        <div className={styles.divider} />

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {/* We render the list twice to create an infinite loop effect */}
            {[...ALL_NAV, ...ALL_NAV].map(({ path, label }, i) => (
              <NavLink
                key={`${path}-${i}`}
                to={path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

