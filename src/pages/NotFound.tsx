import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const glitchLines = [
  "FATAL EXCEPTION: NULL POINTER DEREFERENCE.",
  "TRACE ABORTED. NODE DISCONNECTED FROM CLUSTER.",
  "REALITY MATRIX UNSPOOLING...",
  "ERROR 404: The construct you seek has collapsed."
]

export default function NotFound() {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showAction, setShowAction] = useState(false)
  
  useEffect(() => {
    if (lineIndex >= glitchLines.length) {
      setTimeout(() => setShowAction(true), 800)
      return
    }

    const currentLine = glitchLines[lineIndex]
    
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentLine[charIndex])
        setCharIndex(c => c + 1)
      }, Math.random() * 40 + 20) // Random terminal typing speed
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setText(prev => prev + '\n')
        setLineIndex(l => l + 1)
        setCharIndex(0)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [lineIndex, charIndex])

  return (
    <div className={styles.terminalContainer}>
       <div className={styles.glitchOverlay} />
       <div className={styles.terminal}>
         <pre className={styles.typewriter}>
            {text}
            <span className={styles.cursor}>_</span>
         </pre>
         {showAction && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             className={styles.actions}
           >
             <p className={styles.rebootText}>&gt; SYSTEM HALTED. REBOOT RECOMMENDED.</p>
             <Link to="/" className={styles.rebootBtn}>[ INITIATE REBOOT ]</Link>
           </motion.div>
         )}
       </div>
    </div>
  )
}
