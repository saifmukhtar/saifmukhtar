import React from 'react'
import { motion } from 'framer-motion'
import Page from './Page'
import styles from './MdxLayout.module.css'

type MdxLayoutProps = {
  children: React.ReactNode
  meta?: {
    title: string
    type?: string
    date?: string
    abstract?: string
  }
}

export default function MdxLayout({ children, meta }: MdxLayoutProps) {
  return (
    <Page>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {meta && (
          <header className={styles.header}>
            <p className="eyebrow">{meta.type || 'Research'}</p>
            <h1 className={styles.title}>{meta.title}</h1>
            {meta.date && <p className={styles.date}>{meta.date}</p>}
            {meta.abstract && <p className={styles.abstract}>{meta.abstract}</p>}
          </header>
        )}
        <article className={styles.article}>
          {children}
        </article>
      </motion.div>
    </Page>
  )
}
