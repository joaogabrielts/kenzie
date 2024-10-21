import styles from "./style.module.css";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydowm } from "../../hooks/useKeydowm";

export const Modal = ({ children, setIsOpen }) => {
  const modalRef = useOutclick(() => {
    setIsOpen(false);
  });

  const buttonRef = useKeydowm("Escape", (element) => {
    element.click();
  });

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(false)}
          className={styles.closeButton}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};
