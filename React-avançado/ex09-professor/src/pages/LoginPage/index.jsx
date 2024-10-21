import { useForm } from "react-hook-form";
import { useUserContext } from "../../providers/UserContext";
import Header from "../../components/Header";

export const LoginPage = () => {
  const { userLogin } = useUserContext();

  const { register, handleSubmit } = useForm();

  const submit = async (formData) => {
    await  userLogin(formData);
  };
  return (
    <>
    <Header/>
        <main>
        <h1>Faça login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            E-mail
            <input type="text" {...register("email")} />
          </label>
          <label>
            senha
            <input type="password" {...register("password")} />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
};
