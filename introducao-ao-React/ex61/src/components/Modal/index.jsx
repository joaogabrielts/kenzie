import styles from "./style.module.css"

export const Modal = ({ children, setIsOpen }) => {
  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>Fechar</button>
        {children}
      </div>
    </div>
  );
};
