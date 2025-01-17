import { useContext } from "react";
import style from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";


export const TechCard = ({ tech }) => {
  const { postDelete, setEditingPost } = useContext(TechContext);

  return (
    <li className={style.li}>
      <div className={style.tech_info}>
        <h4> {tech.title}</h4>
        <p>{tech.status}</p>
      </div>

      <div className={style.div_icons}>
        <button className="material-icons" onClick={() => setEditingPost(tech)}>
          edit
        </button>
        <button
          className="material-icons"
          onClick={() => postDelete.mutate(tech.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};
