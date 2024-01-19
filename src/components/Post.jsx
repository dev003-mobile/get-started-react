import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/147081018?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Wagner Coche</strong>
            <span>Mobile Developer</span>
          </div>
        </div>
        <time title="2024-01-18 21:24" dateTime="2024-01-18 21:24">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">👉 jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Nossa, adorei amigo! Parabéns"
        />
        <footer>
          <button>Publicar</button>
        </footer>
      </form>

      <div>
        <Comment />
        {/* <Comment /> */}
        {/* <Comment /> */}
      </div>
    </article>
  )
}