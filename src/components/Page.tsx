import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -10 },
}

export default function Page({ children }: PageProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="page-container"
    >
      {children}
    </motion.div>
  )
}
