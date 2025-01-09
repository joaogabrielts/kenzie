import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, TLoginFormValues } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormListContext } from "../../providers/TodoContext";
import { IForm } from "../../dataBase";
import { v4 as uuidv4 } from 'uuid';


export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const { addFormToCart } = useContext(FormListContext);

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    const newFormItem: IForm = {
        id: uuidv4(),
        ...formData
    }
    addFormToCart(newFormItem);
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Texto1:</label>
        <input type="text" {...register("text")} />
      </div>
      <div>
        <label>Texto2:</label>
        <textarea placeholder="Description" {...register("textarea")} />
      </div>
      <button>Enviar</button>
    </form>
  );
};
