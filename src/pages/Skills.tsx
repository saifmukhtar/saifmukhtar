import { motion } from 'framer-motion'
import Page from '../components/Page'
import { skillGroups } from '../data/skills'
import styles from './Skills.module.css'

function toSymbol(skill: string): string {
  const map: Record<string, string> = {
    'Rust': 'Rs', 'TypeScript': 'Ts', 'Go': 'Go', 'Python': 'Py',
    'Kotlin': 'Kt', 'Bash': 'Sh', 'SQL': 'Sq', 'JavaScript': 'Js',
    'HTML': 'Ht', 'CSS': 'Cs', 'Jetpack Compose': 'Jc', 'Material Design 3': 'M3',
    'Android Keystore': 'AK', 'WorkManager': 'Wm', 'Room': 'Rm', 'CameraX': 'Cx',
    'Biometric API': 'Bi', 'WebRTC': 'Wc', 'E2EE': 'E2', 'Signal Protocol': 'Si',
    'libsignal': 'Ls', 'STUN/TURN': 'St', 'WebSocket': 'Ws', 'AGPL': 'Ag',
    'Zero-knowledge': 'Zk', 'Supabase': 'Sb', 'PostgreSQL': 'Pg', 'Docker': 'Dk',
    'Nginx': 'Nx', 'Coturn': 'Co', 'Ntfy': 'Nt', 'Kong': 'Kg', 'Node.js': 'Nj',
    'React': 'Re', 'Next.js': 'Nxt', 'Vite': 'Vi', 'Tailwind CSS': 'Tw',
    'Framer Motion': 'Fm', 'Three.js': 'Th', 'Numerical Simulation': 'NS',
    'Graph Theory': 'GT', 'Causal Networks': 'CN', 'Physics Engines': 'PE',
    'Data Analysis': 'DA', 'Blender Pipeline': 'BP', 'Git': 'Gi',
    'GitHub Actions': 'GA', 'F-Droid': 'FD', 'Gemini API': 'Gm',
    'AI Studio': 'AS', 'VS Code': 'VS',
  }
  return map[skill] ?? skill.slice(0, 2)
}

const rowColors: Record<string, string> = {
  'Languages': 'var(--amber)',
  'Android & Mobile': 'var(--teal)',
  'Networking & Security': 'var(--blue)',
  'Backend & Infrastructure': 'var(--slate)',
  'Web & Frontend': 'var(--amber)',
  'Research & Simulation': 'var(--teal)',
  'Tools': 'var(--ink-muted)',
}

export default function Skills() {
  return (
    <Page>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Skills</p>
          <h1 className={styles.title}>Tech I use</h1>
        </motion.div>

        <div className={styles.table}>
          {skillGroups.map((group, gi) => {
            const color = rowColors[group.category] ?? 'var(--ink-muted)'
            return (
              <motion.div
                key={group.category}
                className={styles.row}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.07 }}
              >
                <span className={styles.rowLabel} style={{ color }}>
                  {group.category}
                </span>
                <div className={styles.cells}>
                  {group.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      className={styles.cell}
                      style={{ '--cell-color': color } as React.CSSProperties}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.22, delay: j * 0.03 }}
                      whileHover={{ scale: 1.08, rotate: -1 }}
                      title={skill}
                    >
                      <span className={styles.symbol}>{toSymbol(skill)}</span>
                      <span className={styles.name}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Page>
  )
}
