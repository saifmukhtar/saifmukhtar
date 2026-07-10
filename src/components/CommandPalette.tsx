import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CommandPalette.module.css'

type Command = {
  id: string
  title: string
  action: () => void
  icon?: string
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const commands: Command[] = [
    { id: 'home', title: 'Go to Home', action: () => navigate('/') },
    { id: 'projects', title: 'Go to Projects', action: () => navigate('/projects') },
    { id: 'about', title: 'Go to About', action: () => navigate('/about') },
    { id: 'contact', title: 'Go to Contact', action: () => navigate('/contact') },
    { id: 'github', title: 'Open GitHub', action: () => window.open('https://github.com/saifmukhtar', '_blank') },
    { id: 'email', title: 'Copy Email Address', action: () => {
      navigator.clipboard.writeText('saifmukhtar20@gmail.com')
      alert('Email copied to clipboard!')
    } },
  ]

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action()
        setOpen(false)
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.inputWrapper}>
              <span className={styles.prompt}>&gt;</span>
              <input
                ref={inputRef}
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
              />
            </div>
            <div className={styles.list}>
              {filtered.length === 0 ? (
                <div className={styles.empty}>No results found.</div>
              ) : (
                filtered.map((cmd, idx) => (
                  <div
                    key={cmd.id}
                    className={`${styles.item} ${idx === selectedIndex ? styles.selected : ''}`}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => {
                      cmd.action()
                      setOpen(false)
                    }}
                  >
                    {cmd.title}
                  </div>
                ))
              )}
            </div>
            <div className={styles.footer}>
              <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
              <span><kbd>Enter</kbd> to select</span>
              <span><kbd>Esc</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
