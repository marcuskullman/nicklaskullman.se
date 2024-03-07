import styles from "./app.module.scss"

export default function App() {
  return (
    <div className={styles.app}>
      <p>
        Centered on new ideas and bespoke solutions for websites, identities,
        books, packaging, etc.
        <br />
        Based in Stockholm, Östermalm.{" "}
        <a href="mailto:nicklas@nicklaskullman.se" className={styles.link}>
          nicklas(at)nicklaskullman.se
        </a>
      </p>
    </div>
  )
}
