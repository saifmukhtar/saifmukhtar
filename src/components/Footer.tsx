import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Footer.module.css'

const COLLAPSED_H = 44
const EXPANDED_H  = 160

// Get commit hash from Vite env
const COMMIT_HASH = import.meta.env.VITE_COMMIT_HASH || 'unknown'

export default function Footer() {
  const year = new Date().getFullYear()
  const [expanded, setExpanded] = useState(false)
  const [time, setTime]         = useState('')
  const [repos, setRepos]       = useState<string[]>([])
  const [repoIndex, setRepoIndex] = useState(0)
  const [gravatar, setGravatar] = useState<any>(null)

  // Live IST clock
  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone:  'Asia/Kolkata',
          hour:      '2-digit',
          minute:    '2-digit',
          second:    '2-digit',
          hour12:    false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Fetch GitHub repos
  useEffect(() => {
    fetch('https://api.github.com/users/saifmukhtar/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const names = data.map((repo: any) => repo.name.toLowerCase())
          if (names.length > 0) {
            setRepos(names)
          }
        }
      })
      .catch(err => console.error('Failed to fetch repos:', err))
  }, [])

  // Cycle through repos
  useEffect(() => {
    if (repos.length <= 1) return
    const id = setInterval(() => {
      setRepoIndex(prev => (prev + 1) % repos.length)
    }, 3000)
    return () => clearInterval(id)
  }, [repos.length])

  // Fetch Gravatar profile
  useEffect(() => {
    fetch('https://en.gravatar.com/saifmukhtar.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.entry && data.entry[0]) {
          setGravatar(data.entry[0])
        }
      })
      .catch(err => console.error('Failed to fetch gravatar:', err))
  }, [])

  return (
    <motion.footer
      className={styles.footer}
      animate={{ height: expanded ? EXPANDED_H : COLLAPSED_H }}
      transition={{ type: 'spring', stiffness: 320, damping: 32, mass: 0.8 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* ── Expanded panel ──────────────────────────────── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className={styles.panelLeft}>
              <p className={styles.sig}>Towards the end —</p>
              <p className={styles.quote}>
                Software that doesn't spy on you.<br />
                Cryptography as a human right.
              </p>
            </div>

            <div className={styles.panelRight}>
              {gravatar ? (
                <div className={styles.profileCard}>
                  <img 
                    src={`${gravatar.thumbnailUrl}?s=120`} 
                    alt="Gravatar" 
                    className={styles.avatar} 
                  />
                  <div className={styles.profileInfo}>
                    <span className={styles.profileName}>@{gravatar.preferredUsername}</span>
                    <span className={styles.profileLocation}>{gravatar.currentLocation}</span>
                    <div className={styles.socials}>
                      {gravatar.accounts?.slice(0, 4).map((acc: any) => (
                        <a key={acc.domain} href={acc.url} target="_blank" rel="noopener noreferrer" title={acc.name}>
                          <img src={acc.iconUrl} alt={acc.name} className={styles.socialIcon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.statusRow}>
                    <span className={styles.statusDot} />
                    <span className={styles.statusLabel}>All systems operational</span>
                  </div>
                  <span className={styles.statusSub}>
                    saifmukhtar.dev · IST {time}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Always-visible slim bar ─────────────────────── */}
      <div className={styles.bar}>
        {/* Left: live status + commit + rotating repo */}
        <div className={styles.barLeft}>
          <span className={styles.barStatus}>
            <span className={styles.dotInline} />
            {COMMIT_HASH}
          </span>
          
          {repos.length > 0 && (
            <>
              <span className={styles.barDivider}>·</span>
              <span className={styles.repoContainer}>
                [
                <AnimatePresence mode="wait">
                  <motion.span
                    key={repoIndex}
                    className={styles.repoName}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {repos[repoIndex]}
                  </motion.span>
                </AnimatePresence>
                ]
              </span>
            </>
          )}

          <span className={styles.barDivider}>·</span>
          <span className={styles.barTime}>IST {time}</span>
        </div>

        {/* Right: legal + github */}
        <nav className={styles.barLinks} aria-label="Footer navigation">
          <Link to="/privacy"  className={styles.barLink}>Privacy</Link>
          <Link to="/terms"    className={styles.barLink}>Terms</Link>
          <Link to="/license"  className={styles.barLink}>License</Link>
          <a
            href="https://github.com/saifmukhtar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.barLink}
          >
            GitHub ↗
          </a>
          <span className={styles.barCopy}>© {year}</span>
        </nav>
      </div>
    </motion.footer>
  )
}
