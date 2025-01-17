import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserTech";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { userLogin } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(false)

  const passwordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  return (
    <section className={style.section}>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(userLogin)}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input placeholder="E-mail" type="email" {...register("email")} />
        </div>
        <div className={style.div_Password}>
          <label>Senha</label>
          <input
            placeholder="Senha"
            type={passwordVisible ? "text" : "password"}
            {...register("password")}
          />
          <button onClick={passwordVisibility}>  <span className="material-icons">
          {passwordVisible ? "visibility_off" : "visibility"}
        </span></button>

        </div>
        <div>
          <button>Entrar</button>
        </div>

        <p>Ainda não possui uma conta?</p>

        <Link to="/register" className={style.link}>
          Cadastre-se
        </Link>
      </form>
    </section>
  );
};
