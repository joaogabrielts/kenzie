import { useContext } from "react";
import { useKeydowm } from "../../hooks/useKeydowm";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostTech";
import style from "./style.module.scss";

export const EditTechModal = () => {
  const { postUpdate, editingPost, setEditingPost } = useContext(PostContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editingPost?.title || "",

      status: editingPost?.status || "Primeiro módulo",
    },
  });
 

  const submit = (formData) => {
    
    postUpdate.mutate(formData);
  };

  const buttonRef = useKeydowm("Escape", (element) => {
    element.click();
  });

  return (
    <div role="dialog" className={style.dialog}>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>Tecnologia Detalhes</h2>
          <button ref={buttonRef} onClick={() => setEditingPost(null)}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={style.formGroup}>
            <label>Nome do projeto</label>
            <input type="text" {...register("title")}  placeholder="Material UI"/>
          </div>
          <div className={style.formGroup}>
            <label> Status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermadiário">Intermadiário</option>
              <option value="Avançado">Avançado </option>
            </select>
          </div>
          <button type="submit">Salvar alterações </button>
        </form>
      </div>
    </div>
  );
};
