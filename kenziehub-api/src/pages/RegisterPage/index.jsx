import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserTech";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { userRegister } = useContext(UserContext);

  const password = watch("password");

  return (
    <section className={style.section}>
      <div className={style.div_to_go_back}>
        <h1>Kenzie Hub</h1>
        <button>
          <Link to="/" className={style.link}>
            voltar
          </Link>
        </button>
      </div>

      <form onSubmit={handleSubmit(userRegister)}>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa </p>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password", { required: "senha é obrigatória" })}
          />
        </div>
        <div>
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "As senhas não coincidem.",
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div>
          <label>Bio</label>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
        </div>
        <div>
          <label>Contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
        </div>
        <div>
          <label>Selecionar Módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
        </div>
        <button type="submit">Cadastrar-se</button>
      </form>
    </section>
  );
};
