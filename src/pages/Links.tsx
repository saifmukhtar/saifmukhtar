import { motion, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import Page from '../components/Page'
import { links, LinkItem } from '../data/links'
import styles from './Links.module.css'

const CARD_W = 220
const CARD_H = 110

// ── Single card with its own motion values + bounce logic ──────────────────
function BounceCard({
  link,
  index,
  initX,
  initY,
  bounds,
}: {
  link: LinkItem
  index: number
  initX: number
  initY: number
  bounds: { w: number; h: number }
}) {
  const x = useMotionValue(initX)
  const y = useMotionValue(initY)
  const dragging = useRef(false)

  // Re-seed position when bounds resolve from 0
  useEffect(() => {
    if (bounds.w === 0) return
    x.set(initX)
    y.set(initY)
  }, [bounds.w, bounds.h]) // eslint-disable-line

  const handleDragEnd = useCallback(
    (_: unknown, info: { velocity: { x: number; y: number } }) => {
      const maxX = bounds.w - CARD_W
      const maxY = bounds.h - CARD_H

      const curX = x.get()
      const curY = y.get()
      const vx = info.velocity.x
      const vy = info.velocity.y

      // Clamp to valid area
      const clampedX = Math.max(0, Math.min(maxX, curX))
      const clampedY = Math.max(0, Math.min(maxY, curY))

      // Was the card actually thrown against a wall?
      const hitLeft   = curX < 0   && vx < 0
      const hitRight  = curX > maxX && vx > 0
      const hitTop    = curY < 0   && vy < 0
      const hitBottom = curY > maxY && vy > 0

      const OVERSHOOT = 28  // px it presses into the wall before bouncing back

      if (hitLeft || hitRight) {
        const peak = hitLeft ? -OVERSHOOT : maxX + OVERSHOOT
        // [clamped → press into wall → bounce back to wall edge] then stop
        animate(x, [clampedX, peak, clampedX], {
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],   // custom cubic: fast in, hard stop
          times: [0, 0.35, 1],
        })
      } else {
        animate(x, clampedX, { duration: 0.2, ease: 'easeOut' })
      }

      if (hitTop || hitBottom) {
        const peak = hitTop ? -OVERSHOOT : maxY + OVERSHOOT
        animate(y, [clampedY, peak, clampedY], {
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.35, 1],
        })
      } else {
        animate(y, clampedY, { duration: 0.2, ease: 'easeOut' })
      }

      setTimeout(() => { dragging.current = false }, 150)
    },
    [bounds, x, y]
  )

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left:   0,
        top:    0,
        right:  Math.max(0, bounds.w - CARD_W),
        bottom: Math.max(0, bounds.h - CARD_H),
      }}
      style={{ x, y, width: CARD_W }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.06, type: 'spring', stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.04, zIndex: 50, boxShadow: '0 28px 56px -12px rgba(0,0,0,0.18)', borderColor: link.color }}
      whileDrag={{ scale: 1.06, zIndex: 100, boxShadow: '0 32px 64px -16px rgba(0,0,0,0.22)', cursor: 'grabbing' }}
      onDragStart={() => { dragging.current = true }}
      onDragEnd={handleDragEnd}
      onClickCapture={(e) => {
        if (dragging.current) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
    >
      {/* Color stripe */}
      <div className={styles.stripe} style={{ backgroundColor: link.color }} />

      <div className={styles.cardBody}>
        <span className={styles.category}>{link.category}</span>
        <h2 className={styles.label}>{link.label}</h2>
        <p className={styles.handle}>{link.handle}</p>
      </div>
    </motion.a>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Links() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ w: 0, h: 0 })

  useEffect(() => {
    function measure() {
      if (!canvasRef.current) return
      const r = canvasRef.current.getBoundingClientRect()
      setBounds({ w: r.width, h: r.height })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Grid-based scatter: divide the canvas into equal cells,
  // place each card near the center of its cell with a small random jitter.
  const positions = useMemo(() => {
    const count = links.length
    const cols  = Math.ceil(Math.sqrt(count))          // e.g. 4 for 13 items
    const rows  = Math.ceil(count / cols)

    // We compute positions in fractional [0,1] space; they get converted
    // to pixels inside BounceCard once bounds are known.
    return links.map((_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const cellW = 1 / cols
      const cellH = 1 / rows

      // Center of this cell, jittered ±20% of cell size
      const jx = (Math.random() - 0.5) * cellW * 0.4
      const jy = (Math.random() - 0.5) * cellH * 0.4

      return {
        fx: (col + 0.5) * cellW + jx,
        fy: (row + 0.5) * cellH + jy,
      }
    })
  }, [])

  return (
    <Page>
      <div className={styles.scene}>
        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Links</p>
          <h1 className={styles.title}>Elsewhere</h1>
          <p className={styles.sub}>Drag the cards around. Click to open.</p>
        </motion.div>

        {/* ── Physics canvas ── */}
        <div className={styles.canvas} ref={canvasRef}>
          {bounds.w > 0 && links.map((link, i) => (
            <BounceCard
              key={link.id}
              link={link}
              index={i}
              bounds={bounds}
              initX={Math.max(0, Math.min(bounds.w - CARD_W, positions[i].fx * bounds.w - CARD_W / 2))}
              initY={Math.max(0, Math.min(bounds.h - CARD_H, positions[i].fy * bounds.h - CARD_H / 2))}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}
