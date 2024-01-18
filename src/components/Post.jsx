import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/147081018?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Wagner Coche</strong>
            <span>Decsription description</span>
          </div>
        </div>
        <span>Públicado há 1h</span>
      </header>
    </article>
  )
}