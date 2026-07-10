import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CryptoWidget.module.css'

export default function CryptoWidget() {
  const [input, setInput] = useState('')
  const [hash, setHash] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isExpanded && widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isExpanded])

  useEffect(() => {
    async function computeHash() {
      if (!input) {
        setHash('')
        return
      }
      const encoder = new TextEncoder()
      const data = encoder.encode(input)
      const hashBuffer = await crypto.subtle.digest('SHA-256', data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      setHash(hashHex)
    }
    computeHash()
  }, [input])

  return (
    <AnimatePresence mode="wait">
      {!isExpanded ? (
        <motion.button 
          key="minimized"
          className={styles.minimizedBtn}
          onClick={() => setIsExpanded(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          #
        </motion.button>
      ) : (
        <motion.div 
          ref={widgetRef}
          key="expanded"
          className={styles.widget}
          initial={{ opacity: 0, scale: 0.95, originX: 1, originY: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          layout
        >
          <div className={styles.header}>
            <span className={styles.title}>SHA-256 LIVE HASH</span>
            <div className={styles.headerRight}>
              <span className={styles.status}>🟢 ACTIVE</span>
              <button className={styles.closeBtn} onClick={() => setIsExpanded(false)} aria-label="Close widget">
                ×
              </button>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.inputGroup}>
              <span className={styles.prompt}>INPUT</span>
              <input 
                type="text" 
                className={styles.input} 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
              />
            </div>
            <AnimatePresence>
              {hash && (
                <motion.div 
                  className={styles.outputGroup}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className={styles.prompt}>HASH</span>
                  <div className={styles.output}>{hash}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
