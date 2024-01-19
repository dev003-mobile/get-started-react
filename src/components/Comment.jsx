import { Avatar } from "./Avatar";
import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comments}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/147081018?v=4"/>
      <div>
        <div className={styles.infoComment}>
          <div className={styles.header}>
            <div>
              <div>
                <strong className={styles.authorName}>Devo Lane </strong>
                <strong className={styles.isYou}>(Você)</strong>
              </div>
              <span>Cerca de 2h</span>
            </div>
            <Trash className={styles.trash} size={24}/>
          </div>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <div className={styles.reaction}>
          <ThumbsUp className={styles.thumbsUp} size={20} />
          <span>Aplaudir • 03</span>
        </div>
      </div>
    </div>  
  )
}