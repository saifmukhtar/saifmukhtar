import { motion } from 'framer-motion'
import { Mail, MessageCircle, ExternalLink } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import styles from './Contact.module.css'

const MastodonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.258 13.84c-.308 1.583-2.76 3.317-5.577 3.654-1.47.175-2.916.337-4.461.266-2.524-.116-4.513-.603-4.513-.603 0 .246.015.48.046.697.332 2.517 2.498 2.667 4.55 2.734 2.07.068 3.912-.511 3.912-.511l.085 1.875s-1.45.776-4.032.919c-1.424.078-3.192-.036-5.25-.584C2.302 20.979 1.612 16.452 1.5 11.86c-.035-1.327-.013-2.578-.013-2.578 0-5.158 3.379-6.668 3.379-6.668C6.554 1.548 10.05 1.157 13.69 1.128h.088c3.64.029 7.138.42 8.824 1.486 0 0 3.379 1.51 3.379 6.668 0 0 .042 3.807-.723 4.558"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const contacts = [
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'saifmukhtar20@gmail.com',
    sub: 'Primary',
    href: 'mailto:saifmukhtar20@gmail.com',
    color: '#E8855A',
  },
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'saifmukhtar@hcsn.tech',
    sub: 'Research',
    href: 'mailto:saifmukhtar@hcsn.tech',
    color: '#7BAB8C',
  },
  {
    icon: <GithubIcon size={22} />,
    title: 'GitHub',
    value: '@saifmukhtar',
    sub: 'Code & projects',
    href: 'https://github.com/saifmukhtar',
    color: '#2C2018',
  },
  {
    icon: <MastodonIcon />,
    title: 'Mastodon',
    value: '@saifmukhtar@mastodon.social',
    sub: 'Fediverse',
    href: 'https://mastodon.social/@saifmukhtar',
    color: '#6364FF',
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    value: '@saifmukhtar.dev',
    sub: '',
    href: 'https://instagram.com/saifmukhtar.dev',
    color: '#E1306C',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'WhatsApp',
    value: 'Send a message',
    sub: 'Direct',
    href: 'https://wa.me/917644922091',
    color: '#25D366',
  },
]

export default function Contact() {
  return (
    <Page>
      <div className="content-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Contact</span>
          <h1 className={styles.title}>Let's talk.</h1>
          <div className="divider" />
          <p className={styles.intro}>
            I'm available for research collaborations, interesting projects, and thoughtful conversations.
            Pick whatever feels most natural.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {contacts.map(({ icon, title, value, sub, href, color }, i) => (
            <motion.a
              key={`${title}-${value}`}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.tile}
              style={{ '--tile-color': color } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className={styles.tileIcon} style={{ color }}>
                {icon}
              </div>
              <div className={styles.tileBody}>
                <span className={styles.tileTitle}>{title}</span>
                {sub && <span className={styles.tileSub}>{sub}</span>}
                <p className={styles.tileValue}>{value}</p>
              </div>
              <ExternalLink size={14} className={styles.external} />
            </motion.a>
          ))}
        </div>

        <motion.div
          className={styles.moreLink}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/links">See all platforms and profiles →</Link>
        </motion.div>
      </div>
    </Page>
  )
}
