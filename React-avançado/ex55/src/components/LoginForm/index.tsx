import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, TLoginFormValues } from "../loginFormSchema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    // associamos o zod aqui
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    //e associamos aqui tambem
    console.log(formData);
  };
  /*Além disso, é necessário a associação do mesmo tipo a função de envio, que pode ser realizada de duas formas diferentes:

const submit = async (data: TLoginFormValues) => {
   console.log(data);
};

const submit: SubmitHandler<TLoginFormValues> = async (data) => {
   console.log(data);
};

Ambas satisfazem os requisitos de tipagem, porém, o segundo exemplo que contém o tipo SubmitHandler, importado do react-hook-form, é o recomendado pela documentação do React Hook Form. */

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="email" {...register("email")} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <input type="password" {...register("password")} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <button>Entrar</button>
    </form>
  );
};
