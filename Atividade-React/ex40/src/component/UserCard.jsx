import styles from "../Styles/styles.module.css"

export const Card = ({name,email,status}) => {
    return (<section className={`${styles.user} ${status ? styles.active: ""}`}>
        
          <h1>Olá, {name}</h1>
          <p>{email}</p>
      
    </section>
    )
}