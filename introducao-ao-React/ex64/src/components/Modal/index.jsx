import { useEffect, useRef } from "react";
import styles from "./style.module.css";

export const Modal = ({ children, setIsOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
      console.log(event.target);
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);


  const buttonRef = useRef(null)

  useEffect(() => {
    const handleKeydowm = (event) => {
      console.log(event.key);
      if(event.key === "Escape"){
        buttonRef.current?.click()
      }
    }
    
    window.addEventListener("keydown",handleKeydowm);

    return () => {
      window.removeEventListener("keydown",handleKeydowm); 
    }
  },[])
  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <button ref={buttonRef} onClick={() => setIsOpen(false)} className={styles.closeButton}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};
