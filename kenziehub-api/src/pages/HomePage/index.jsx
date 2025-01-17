import { useContext } from "react";
import { LoginView } from "./LoginView";
import { LogoutView } from "./LogoutView";
import { CreateModal } from "../../components/CreateTechModal";
import { EditTechModal } from "../../components/EditTechModal";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserTech";
import { TechContext } from "../../providers/TechContext";


export const HomePage = () => {
  const { user, isOpen} = useContext(UserContext);
  const { editingPost } = useContext(TechContext);

  
  

  return (
    <main className={style.main}>
      {user ? (
        <>

          <LoginView />
          {isOpen && <CreateModal />}

          {editingPost ? <EditTechModal /> : null}
        </>
      ) : (
        <LogoutView />
      )}
    </main>
  );
};

