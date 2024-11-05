import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import { useForm } from "react-hook-form";

export const PostCreateForm = () => {
    const { register, handleSubmit } = useForm();
  const { postCreate } = useContext(TodoContext);

  const submit = (formData) => {
   postCreate.mutate(formData);
  };

  return(
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Título" {...register("title")}/>
        <textarea placeholder="Conteúdo"  {...register("content")}/>
        <button type="submit">Cadastrar uma nota</button>
    </form>
  )
};
