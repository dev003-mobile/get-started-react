import styles from "./Sidebar.module.css"
import { PencilSimple } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=20&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/147081018?v=4"/>
        <strong>Wagner Coche</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimple size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}