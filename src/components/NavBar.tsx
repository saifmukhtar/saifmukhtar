import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './NavBar.module.css'

const GRAVATAR_HASH = 'eb2a79eb705870858f7a965d555075c8d77f0f0beb8ce020f7e496d2ea31e909'

const NAV_LINKS = [
  { path: '/',          label: 'Home'     },
  { path: '/projects',  label: 'Projects' },
  { path: '/research',  label: 'Research' },
  { path: '/about',     label: 'About'    },
  { path: '/links',     label: 'Links'    },
  { path: '/contact',   label: 'Contact'  },
]

export default function NavBar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [hovered,     setHovered]     = useState<string | null>(null)
  const [bubble,      setBubble]      = useState({ left: 0, width: 0, ready: false })

  const location   = useLocation()
  const pillRef    = useRef<HTMLDivElement>(null)
  const linkRefs   = useRef<Map<string, HTMLAnchorElement | null>>(new Map())

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile on nav
  useEffect(() => { setMobileOpen(false) }, [location])

  // which path drives the bubble — hover takes priority over active
  const activePath = NAV_LINKS.find(l =>
    l.path === '/' ? location.pathname === '/' : location.pathname.startsWith(l.path)
  )?.path ?? '/'

  const targetPath = hovered ?? activePath

  // reposition bubble whenever the target changes or on resize
  useEffect(() => {
    function measure() {
      const el        = linkRefs.current.get(targetPath)
      const container = pillRef.current
      if (!el || !container) return
      const cRect = container.getBoundingClientRect()
      const eRect = el.getBoundingClientRect()
      setBubble({
        left:  eRect.left - cRect.left,
        width: eRect.width,
        ready: true,
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [targetPath])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* ── Logo ── */}
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <img
                src={`https://1.gravatar.com/avatar/${GRAVATAR_HASH}?size=64&d=mp&r=g`}
                alt="Saif Mukhtar"
                className={styles.logoAvatar}
              />
            </span>
            <span className={styles.logoName}>saifmukhtar</span>
          </NavLink>

          {/* ── Desktop pill nav ── */}
          <div
            className={styles.pill}
            ref={pillRef}
            onMouseLeave={() => setHovered(null)}
          >
            {/* sliding bubble */}
            {bubble.ready && (
              <motion.div
                className={styles.bubble}
                animate={{ left: bubble.left, width: bubble.width }}
                transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
              />
            )}

            {NAV_LINKS.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                ref={el => { linkRefs.current.set(path, el) }}
                className={({ isActive }) =>
                  `${styles.pillLink} ${isActive ? styles.pillLinkActive : ''}`
                }
                onMouseEnter={() => setHovered(path)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.menuLine} ${mobileOpen ? styles.menuLineOpen : ''}`} />
            <span className={`${styles.menuLine} ${mobileOpen ? styles.menuLineOpen : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {NAV_LINKS.map(({ path, label }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
                    }
                  >
                    <span className={styles.drawerNum}>{String(i + 1).padStart(2, '0')}</span>
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
