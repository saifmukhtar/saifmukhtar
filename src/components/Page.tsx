import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
