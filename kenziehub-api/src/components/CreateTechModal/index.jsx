import { useContext } from "react";
import { useKeydowm } from "../../hooks/useKeydowm";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserTech";
import { TechContext } from "../../providers/TechContext";


export const CreateModal = () => {
  const {  setIsOpen } = useContext(UserContext);
  const { postCreate } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    setIsOpen(false);
    postCreate.mutate(formData);
  };

  const buttonRef = useKeydowm("Escape", (element) => {
    element.click();
  });

  return (
    <div role="dialog" className={style.dialog}>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>Cadastrar Tecnologia</h2>
          <button ref={buttonRef} onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={style.formGroup}>
            <label>Nome</label>
            <input type="text" {...register("title")} />
          </div>
          <div className={style.formGroup}>
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado </option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  );
};
