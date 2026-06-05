import styles from './Avatar.module.css'

interface AvatarProps {
  size?: number
}

export default function Avatar({ size = 160 }: AvatarProps) {
  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      {/* Halo glow ring */}
      <div className={styles.halo} />

      {/* SVG Lissajous Knot */}
      <svg
        className={styles.rose}
        viewBox="-55 -55 110 110"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="knotGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--accent-blue)" stopOpacity="0.9" />
            <stop offset="55%"  stopColor="var(--accent-peach)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent-rose)" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--accent-peach-pale)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-peach)" stopOpacity="0.6" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lissajous curve: a=3, b=2 */}
        <g filter="url(#glow)" className={styles.outerKnot}>
          {Array.from({ length: 200 }).map((_, i) => {
            const t1 = (i / 200) * Math.PI * 2
            const t2 = ((i + 1) / 200) * Math.PI * 2
            // Parametric Lissajous equations
            const x1 = 40 * Math.sin(3 * t1 + Math.PI / 2)
            const y1 = 40 * Math.sin(2 * t1)
            const x2 = 40 * Math.sin(3 * t2 + Math.PI / 2)
            const y2 = 40 * Math.sin(2 * t2)

            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="url(#knotGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={0.8 + 0.2 * Math.sin(t1 * 2)}
              />
            )
          })}
        </g>

        {/* Middle ring */}
        <circle cx="0" cy="0" r="22" fill="none"
          stroke="url(#knotGrad)" strokeWidth="1.5" opacity="0.5" />

        {/* Inner filled circle */}
        <circle cx="0" cy="0" r="8" fill="url(#innerGrad)" opacity="0.85" />

        {/* Center dot */}
        <circle cx="0" cy="0" r="2" fill="var(--accent-blue)" opacity="0.9" />
      </svg>

      {/* Orbit ring */}
      <div className={styles.orbit} />
    </div>
  )
}
