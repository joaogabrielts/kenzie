import styles from "./style.module.scss";

export const Example = () => {
   
    return(
        <header className={styles.header}>
            Header
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    ) 
}