import { motion } from 'framer-motion'
import Page from '../components/Page'
import Avatar from '../components/Avatar'
import SocialStrip from '../components/SocialStrip'
import { skillGroups } from '../data/skills'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function About() {
  return (
    <Page>
      <div className="content-wrap">

        {/* Header */}
        <motion.div className={styles.header} {...fadeUp()}>
          <span className="section-label">About</span>
          <h1 className={styles.title}>A little about me.</h1>
          <div className="divider" />
        </motion.div>

        {/* Two-column */}
        <div className={styles.grid}>

          {/* Left — avatar + identity */}
          <motion.div className={styles.left} {...fadeUp(0.1)}>
            <Avatar size={120} />
            <div className={styles.identity}>
              <h2 className={styles.fullName}>Saif Mukhtar</h2>
              <p className={styles.location}>Aligarh, India</p>
              <p className={styles.institution}>Aligarh Muslim University</p>
            </div>
            <SocialStrip />
          </motion.div>

          {/* Right — bio */}
          <motion.div className={styles.right} {...fadeUp(0.18)}>
            <div className={styles.bio}>
              <p>
                Hi! I'm Saif. I'm an independent developer and researcher based in Aligarh, India. 
                I love building elegant systems, experimenting with new technologies, and crafting software 
                that feels right. For me, coding isn't just about logic—it's about expression and design.
              </p>
              <p>
                When I'm not deep into code, you can find me exploring theoretical physics, diving into open-source 
                projects, or just learning something new. I'm fascinated by the idea of emergent complexity—how 
                simple rules can create intricate, beautiful systems. That curiosity drives almost everything I do.
              </p>
              <p>
                I believe software should respect the people who use it, which is why I'm a huge advocate for 
                privacy and open-source ecosystems. I'm always up for a good conversation about tech, design, 
                or physics, so feel free to reach out!
              </p>
            </div>

            {/* Quick facts */}
            <div className={styles.facts}>
              {[
                { label: 'Currently building', value: 'Enclave, HCSN Engine' },
                { label: 'Primary languages', value: 'Rust · TypeScript · Python · Kotlin' },
                { label: 'Vibe', value: 'Curious, builder, open-source advocate' },
                { label: 'Interests', value: 'Privacy software · Physics · Design' },
                { label: 'Contact', value: 'saifmukhtar20@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label} className={styles.fact}>
                  <span className={styles.factLabel}>{label}</span>
                  <span className={styles.factValue}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick skills preview */}
        <motion.div className={styles.skillsPreview} {...fadeUp(0.25)}>
          <span className="section-label">What I work with</span>
          <div className={styles.tagCloud}>
            {skillGroups.slice(0, 3).flatMap(g => g.skills).map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </Page>
  )
}

