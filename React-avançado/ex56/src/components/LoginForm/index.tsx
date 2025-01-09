import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input/intex";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useForm();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    // 2 e colocamos ela bem aqui
    event.preventDefault();
    setEmail("");
    console.log({ email, password });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Input
          type="email"
          register={register("email")} // e aqui pegamos o UseFormRegisterReturn  e se a gente utilizar  a maneira dois no input  precisamos deixar assim 
          //  register={register("email")} , agora se for a maneira mais versatil precisamos deixar assim  {...register("email")}
        />

        <Input type="password" register={register("password")} />
        <button>Entrar</button>
      </form>
    </div>
  );
};
