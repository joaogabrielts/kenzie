import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import { useForm } from "react-hook-form";

export const EditList = () => {
  const { listUpdate, editingPost} = useContext(TodoContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: editingPost.title,
      content: editingPost.content,
    },
  });

  const submit = (formData) => {
    listUpdate.mutate(formData)
  };

  return(
    <div>
        <h2>Editando nota</h2>
        <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Título" {...register("title")}/>
        <textarea placeholder="Conteúdo"  {...register("content")}/>
        <button type="submit">Editar nota</button>
        </form>
    </div>
  )
};
