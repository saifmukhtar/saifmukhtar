import { motion } from 'framer-motion'
import Page from '../components/Page'
import styles from './Research.module.css'

const mainPapers = [
  {
    title: 'The Kinetic Protocol: Vision Overview',
    type: 'Vision Paper · 2026',
    abstract: 'Introduces the overarching vision of the Kinetic Protocol — a decentralized, identity-centric service discovery network that resolves the namespace trilemma by substituting monetary fees with cryptographic time and non-parallelizable computation.',
    tags: ['Decentralization', 'Cryptography', 'VDF'],
    url: '/research/kinetic-vision',
  },
  {
    title: 'Core Consensus & Proof of Patience',
    type: 'Pillar I',
    abstract: 'Clockless front-running neutralization via Sequential VDF linking, dynamic difficulty anchored to a random beacon, and the Hybrid Lease System for namespace recycling.',
    tags: ['Consensus', 'VDF', 'Front-running'],
    url: 'https://github.com/saifmukhtar/kinetic/blob/main/whitepaper/kinetic-consensus.md',
  },
  {
    title: 'Threat Models & Attack Resistance',
    type: 'Pillar IV',
    abstract: 'Analysis of protocol resilience against Sybil generation, Eclipse attacks, localized routing poisoning, ASIC optimization advantages, and Byzantine fault conditions.',
    tags: ['Security', 'Attack Vectors', 'Cryptanalysis'],
    url: 'https://github.com/saifmukhtar/kinetic/blob/main/whitepaper/kinetic-security.md',
  },
]

const ietfDrafts = [
  {
    title: 'Kinetic Network Protocol',
    id: 'draft-mukhtar-kinetic-network-00',
    url: 'https://github.com/saifmukhtar/kinetic/blob/main/whitepaper/draft-mukhtar-kinetic-network-00.md',
  },
  {
    title: 'Kinetic Identity System',
    id: 'draft-mukhtar-kinetic-identity-00',
    url: 'https://github.com/saifmukhtar/kinetic/blob/main/whitepaper/draft-mukhtar-kinetic-identity-00.md',
  }
]

const keyIdeas = [
  { key: 'VDF Proof-of-Time', val: 'Time replaces money' },
  { key: 'Sybil resistance', val: 'Free for one, costly for thousands' },
  { key: 'No renewals', val: 'Claim once, own forever' },
  { key: 'No blockchain', val: 'Kademlia DHT + math' },
]

export default function Research() {
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column (Header + Papers) */}
          <div className={styles.leftColumn}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="eyebrow">Research & Whitepapers</p>
              <h1 className={styles.title}>The Kinetic Protocol</h1>
              <p className={styles.intro}>
                A naming system that swaps fees for computation. If you want one name, it's free. 
                If you're trying to grab thousands, you'll run out of CPU before you run out of ideas.
              </p>
            </motion.div>

            {/* Main papers */}
            <div className={styles.papers}>
              {mainPapers.map((paper, i) => (
                <motion.a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paper}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={styles.paperMeta}>
                    <span className={styles.paperType}>{paper.type}</span>
                    <span className={styles.paperArrow}>↗</span>
                  </div>
                  <h2 className={styles.paperTitle}>{paper.title}</h2>
                  <p className={styles.paperAbstract}>{paper.abstract}</p>
                  <div className={styles.paperTags}>
                    {paper.tags.map(t => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </motion.a>
              ))}

              <motion.a
                href="https://github.com/saifmukhtar/kinetic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <span className={styles.repoLabel}>View full repository</span>
                <span className={styles.repoHandle}>github.com/saifmukhtar/kinetic →</span>
              </motion.a>
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <span className={styles.sideTitle}>IETF Internet-Drafts</span>
                <div className={styles.drafts}>
                  {ietfDrafts.map(draft => (
                    <a
                      key={draft.id}
                      href={draft.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.draft}
                    >
                      <span className={styles.draftTitle}>{draft.title}</span>
                      <span className={styles.draftId}>{draft.id}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.sideCard}>
                <span className={styles.sideTitle}>Key ideas</span>
                <div className={styles.ideas}>
                  {keyIdeas.map(idea => (
                    <div key={idea.key} className={styles.idea}>
                      <span className={styles.ideaKey}>{idea.key}</span>
                      <span className={styles.ideaVal}>{idea.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.statusCard}>
                <div className={styles.statusDot} />
                <div>
                  <span className={styles.statusLabel}>Active Development</span>
                  <p className={styles.statusText}>
                    50-node testnet simulation running
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
