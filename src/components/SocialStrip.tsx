import { Mail, MessageCircle } from 'lucide-react'
import GithubIcon from './GithubIcon'
import styles from './SocialStrip.module.css'

const MastodonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.258 13.84c-.308 1.583-2.76 3.317-5.577 3.654-1.47.175-2.916.337-4.461.266-2.524-.116-4.513-.603-4.513-.603 0 .246.015.48.046.697.332 2.517 2.498 2.667 4.55 2.734 2.07.068 3.912-.511 3.912-.511l.085 1.875s-1.45.776-4.032.919c-1.424.078-3.192-.036-5.25-.584C2.302 20.979 1.612 16.452 1.5 11.86c-.035-1.327-.013-2.578-.013-2.578 0-5.158 3.379-6.668 3.379-6.668C6.554 1.548 10.05 1.157 13.69 1.128h.088c3.64.029 7.138.42 8.824 1.486 0 0 3.379 1.51 3.379 6.668 0 0 .042 3.807-.723 4.558"/>
    <path d="M17.98 8.266v5.306h-2.107V8.46c0-1.086-.457-1.636-1.37-1.636-1.01 0-1.517.653-1.517 1.944v2.815h-2.095V8.768c0-1.291-.507-1.944-1.517-1.944-.913 0-1.37.55-1.37 1.636v5.112H5.897V8.266c0-1.085.276-1.947.83-2.582.57-.635 1.317-.962 2.244-.962 1.073 0 1.885.412 2.422 1.237l.522.876.522-.876c.537-.825 1.35-1.237 2.422-1.237.927 0 1.674.327 2.244.962.554.635.83 1.497.83 2.582z" fill="white"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)

const socials = [
  {
    icon: <GithubIcon size={16} />,
    label: '@saifmukhtar',
    href: 'https://github.com/saifmukhtar',
    title: 'GitHub',
  },
  {
    icon: <MastodonIcon />,
    label: '@saifmukhtar',
    href: 'https://mastodon.social/@saifmukhtar',
    title: 'Mastodon',
  },
  {
    icon: <InstagramIcon />,
    label: '@saifmukhtar',
    href: 'https://instagram.com/saifmukhtar',
    title: 'Instagram',
  },
  {
    icon: <XIcon />,
    label: '@saifmukhtar_',
    href: 'https://x.com/saifmukhtar_',
    title: 'X',
  },
  {
    icon: <Mail size={16} />,
    label: 'Email',
    href: 'mailto:saifmukhtar@saifmukhtar.dev',
    title: 'Email',
  },
  {
    icon: <MessageCircle size={16} />,
    label: 'WhatsApp',
    href: '#',
    onClick: (e: React.MouseEvent) => {
      e.preventDefault()
      const parts = ['https://wa.me/', '917', '644', '922', '091']
      window.open(parts.join(''), '_blank', 'noopener,noreferrer')
    },
    title: 'WhatsApp',
  },
]

export default function SocialStrip() {
  return (
    <div className={styles.strip}>
      {socials.map(({ icon, label, href, onClick, title }) => (
        <a
          key={title}
          href={href}
          onClick={onClick}
          target={href === '#' ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={styles.pill}
          title={title}
          aria-label={`${title}: ${label}`}
        >
          <span className={styles.icon}>{icon}</span>
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </div>
  )
}
