import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './LiveStatus.module.css'

type GithubEvent = {
  type: string
  repo: { name: string }
  created_at: string
}

export default function LiveStatus() {
  const [event, setEvent] = useState<GithubEvent | null>(null)
  
  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const res = await fetch('https://api.github.com/users/saifmukhtar/events/public')
        if (!res.ok) return
        const data: GithubEvent[] = await res.json()
        const latestPush = data.find(e => e.type === 'PushEvent') || data[0]
        if (latestPush) {
          setEvent(latestPush)
        }
      } catch (e) {
        console.error("Failed to fetch GitHub activity", e)
      }
    }
    fetchGitHubActivity()
  }, [])

  if (!event) return null

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime()
    const minutes = Math.floor(diff / 60000)
    if (minutes < 1) return 'just now'
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  const action = event.type === 'PushEvent' ? 'pushing to' : 'active in'

  return (
    <div className={styles.widget}>
      <div className={styles.dotContainer}>
        <div className={styles.dotPing} />
        <div className={styles.dot} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>Live Telemetry</span>
        <span className={styles.divider}>//</span>
        <span className={styles.text}>
          Last seen {action} <strong>{event.repo.name}</strong> {timeAgo(event.created_at)}
        </span>
      </div>
    </div>
  )
}
