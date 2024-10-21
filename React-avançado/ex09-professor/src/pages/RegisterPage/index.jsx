import { useForm } from "react-hook-form";
import { useUserContext } from "../../providers/UserContext";
import Header from "../../components/Header";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const { userRegister } = useUserContext();
  
  const submit = async (formData) => {
    console.log("Dados enviados para o login:", formData);
    userRegister(formData);
  };
  console.log("oi");

  return (
    <>
    <Header/>
      <main>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            nome
            <input type="text" {...register("name")} />
          </label>
          <label>
            E-mail
            <input type="text" {...register("email")} />
          </label>
          <label>
            senha
            <input type="text" {...register("password")} />
          </label>
          <label>
            trabalho
            <input type="text" {...register("job")} />
          </label>
          <button>Enviar</button>
        </form>
      </main>
    </>
  );
};
