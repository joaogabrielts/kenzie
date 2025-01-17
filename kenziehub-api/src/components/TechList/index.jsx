import { useContext } from "react";
import { TechCard } from "../TechCard";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserTech";


export const TechList = () => {
  const { user, userLogout, setIsOpen } = useContext(UserContext);

  if (!user) return <p>Carregando...</p>;

  return (
    <section className={style.section}>
      <header>
        <h2>Kenzie Hub</h2>
        <button onClick={userLogout}>Sair</button>
      </header>
      <div className={style.divName}>
        <h2>Olá, {user?.name || "Usuário"}</h2>
        <p>{user?.course_module}</p>
      </div>
      <div className={style.divTecnologias}>
        <div>
          <h3>Tecnologia</h3>
          <button onClick={() => setIsOpen(true)}>+</button>
        </div>
      </div>
      <ul className={style.divUl}>
        {user?.techs?.length > 0 ? (
          user.techs.map((tech) => <TechCard tech={tech} key={tech.id} />)
        ) : (
          <p>Nenhuma tecnologia encontrada</p>
        )}
      </ul>
    </section>
  );
};
