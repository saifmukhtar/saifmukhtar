import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Page from '../components/Page'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Just open mailto for now (no backend)
    const form = formRef.current!
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const subj = (form.elements.namedItem('subject') as HTMLInputElement).value
    const msg  = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    window.location.href = `mailto:saifmukhtar20@gmail.com?subject=${encodeURIComponent(subj || `Message from ${name}`)}&body=${encodeURIComponent(msg)}`
    setStatus('sent')
  }

  return (
    <Page>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Contact</p>
          <h1 className={styles.title}>Say hello</h1>
          <p className={styles.subtitle}>
            I'm reachable by email or on GitHub. No pitches please.
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Form */}
          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input id="name" name="name" type="text" className={styles.input} placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" className={styles.input} placeholder="What's this about?" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea id="message" name="message" className={styles.textarea} placeholder="..." rows={6} required />
            </div>
            <button type="submit" className={styles.submit}>
              {status === 'sent' ? '✓ Opening mail app' : 'Send message'}
            </button>
          </motion.form>

          {/* Right column — contact options */}
          <motion.div
            className={styles.options}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {[
              {
                label: 'Email',
                value: 'saifmukhtar20@gmail.com',
                href: 'mailto:saifmukhtar20@gmail.com',
                sub: 'Primary',
              },
              {
                label: 'GitHub',
                value: '@saifmukhtar',
                href: 'https://github.com/saifmukhtar',
                sub: 'Code & projects',
              },
              {
                label: 'X (Twitter)',
                value: '@saifmukhtar_',
                href: 'https://x.com/saifmukhtar_',
                sub: 'Verified',
              },
              {
                label: 'Mastodon',
                value: '@saifmukhtar@mastodon.social',
                href: 'https://mastodon.social/@saifmukhtar',
                sub: 'Fediverse',
              },
              {
                label: 'WhatsApp',
                value: 'saifmukhtar',
                href: 'https://wa.me/saifmukhtar',
                sub: 'Direct',
              },
            ].map(({ label, value, href, sub }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.option}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <div className={styles.optionLeft}>
                  <span className={styles.optionLabel}>{label}</span>
                  <span className={styles.optionValue}>{value}</span>
                </div>
                <span className={styles.optionSub}>{sub} →</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </Page>
  )
}
