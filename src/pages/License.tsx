import Page from '../components/Page'
import styles from './Legal.module.css'

export default function License() {
  return (
    <Page>
      <div className={styles.container}>
        <h1 className={styles.title}>CC BY-NC 4.0</h1>
        <p className={styles.lastUpdated}>Copyright (c) 2026 Saif Mukhtar</p>

        <section className={styles.section}>
          <p>
            This website and its source code are licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
          </p>
          <br />
          <p>
            <strong>You are free to:</strong><br />
            <strong>Share</strong> — copy and redistribute the material in any medium or format.<br />
            <strong>Adapt</strong> — remix, transform, and build upon the material.
          </p>
          <br />
          <p>
            <strong>Under the following terms:</strong><br />
            <strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.<br />
            <strong>NonCommercial</strong> — You may not use the material for commercial purposes.
          </p>
          <br />
          <p>
            To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
          </p>
        </section>
      </div>
    </Page>
  )
}
