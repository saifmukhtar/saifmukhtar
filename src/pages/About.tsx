import { motion } from 'framer-motion'
import Page from '../components/Page'
import Avatar from '../components/Avatar'
import LiveStatus from '../components/LiveStatus'
import { skillGroups } from '../data/skills'
import styles from './About.module.css'

// Map skill name to element-style abbreviation
function toSymbol(skill: string): string {
  const map: Record<string, string> = {
    'Rust': 'Rs', 'TypeScript': 'Ts', 'Go': 'Go', 'Python': 'Py',
    'Kotlin': 'Kt', 'Bash': 'Sh', 'SQL': 'Sq', 'JavaScript': 'Js',
    'HTML': 'Ht', 'CSS': 'Cs',
    'Jetpack Compose': 'Jc', 'Material Design 3': 'M3', 'Android Keystore': 'AK',
    'WorkManager': 'Wm', 'Room': 'Rm', 'CameraX': 'Cx', 'Biometric API': 'Bi',
    'WebRTC': 'Wc', 'E2EE': 'E2', 'Signal Protocol': 'Si', 'libsignal': 'Ls',
    'STUN/TURN': 'St', 'WebSocket': 'Ws', 'AGPL': 'Ag', 'Zero-knowledge': 'Zk',
    'Supabase': 'Sb', 'PostgreSQL': 'Pg', 'Docker': 'Dk', 'Nginx': 'Nx',
    'Coturn': 'Co', 'Ntfy': 'Nt', 'Kong': 'Kg', 'Node.js': 'Nj',
    'React': 'Re', 'Next.js': 'Nxt', 'Vite': 'Vi', 'Tailwind CSS': 'Tw',
    'Framer Motion': 'Fm', 'Three.js': 'Th',
    'Numerical Simulation': 'NS', 'Graph Theory': 'GT', 'Causal Networks': 'CN',
    'Physics Engines': 'PE', 'Data Analysis': 'DA', 'Blender Pipeline': 'BP',
    'Git': 'Gi', 'GitHub Actions': 'GA', 'F-Droid': 'FD',
    'Gemini API': 'Gm', 'AI Studio': 'AS', 'VS Code': 'VS',
  }
  return map[skill] ?? skill.slice(0, 2)
}

// Row colors per category
const rowColors: Record<string, string> = {
  'Languages': 'var(--amber)',
  'Android & Mobile': 'var(--teal)',
  'Networking & Security': 'var(--blue)',
  'Backend & Infrastructure': 'var(--slate)',
  'Web & Frontend': 'var(--amber)',
  'Research & Simulation': 'var(--teal)',
  'Tools': 'var(--ink-muted)',
}

export default function About() {
  return (
    <Page>
      <div className={styles.container}>
        {/* ── Header ─────────────────────────── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <LiveStatus />
          <h1 className={styles.title}>Who am I</h1>
        </motion.div>

        {/* ── Profile split ───────────────────── */}
        <div className={styles.profileGrid}>
          {/* Photo */}
          <motion.div
            className={styles.photoWrap}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.photoFrame}>
              <Avatar size={280} className={styles.photo} />
            </div>
            <div className={styles.photoCaption}>
              <span>Saif Mukhtar</span>
              <span className={styles.photoCaptionSub}>Aligarh Muslim University</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className={styles.bio}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={styles.bioSig}>Towards the end —</p>

            <p className={styles.bioPara}>
              I'm Saif, from Aligarh, India. I spend most of my time building 
              software that I think should exist but somehow doesn't yet.
            </p>
            <p className={styles.bioPara}>
              Right now that means <strong>Kinetic</strong> — a way to register 
              internet names without paying anyone, ever. No blockchain, no fees, 
              just a lot of math running patiently on your CPU. Also{' '}
              <strong>Enclave</strong>, for private messaging that actually stays 
              private, and <strong>Antimatter</strong>, so I can check on my AI 
              coding agents from my phone.
            </p>
            <p className={styles.bioPara}>
              I like Rust, cryptography, physics, and software that doesn't spy on you.
            </p>

            {/* Index cards */}
            <div className={styles.cards}>
              {[
                { k: 'Currently building', v: 'Kinetic · Enclave · Antimatter' },
                { k: 'Primary language', v: 'Rust' },
                { k: 'Focus', v: 'Privacy · Cryptography · P2P' },
                { k: 'Location', v: 'Aligarh, India' },
                { k: 'Everything is', v: 'Open source' },
              ].map(({ k, v }, i) => (
                <motion.div
                  key={k}
                  className={styles.indexCard}
                  initial={{ opacity: 0, y: 8, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.6 : 0.8 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                  whileHover={{ rotate: 0, y: -2, transition: { duration: 0.15 } }}
                >
                  <span className={styles.indexKey}>{k}</span>
                  <span className={styles.indexVal}>{v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Periodic Table of Skills ─────────── */}
        <motion.div
          className={styles.tableSection}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-6)' }}>Skills</p>

          <div className={styles.bentoGrid}>
            {skillGroups.map((group, i) => {
              const color = rowColors[group.category] ?? 'var(--ink-muted)'
              return (
                <motion.div
                  key={group.category} 
                  className={styles.bentoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={styles.bentoHeader}>
                    <div className={styles.bentoDot} style={{ background: color }} />
                    <span className={styles.bentoCategory}>{group.category}</span>
                  </div>
                  
                  <div className={styles.bentoCells}>
                    {group.skills.map((skill, j) => (
                      <motion.div
                        key={skill}
                        className={styles.cell}
                        style={{ '--cell-color': color } as React.CSSProperties}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.2 + (j * 0.03) }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        title={skill}
                      >
                        <span className={styles.cellSymbol}>{toSymbol(skill)}</span>
                        <span className={styles.cellName}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Page>
  )
}
