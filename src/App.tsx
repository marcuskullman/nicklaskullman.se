import styles from "./app.module.scss"

export default function App() {
  return (
    <div className={styles.app}>
      <p>
        Design and development of websites, identities, books, packaging, films,
        etc.
        <br />
        Stockholm, Östermalm &mdash; working worldwide. <br />
        <a href="mailto:nicklas@nicklaskullman.se" className={styles.link}>
          nicklas(at)nicklaskullman.se
        </a>
      </p>
    </div>
  )
}
