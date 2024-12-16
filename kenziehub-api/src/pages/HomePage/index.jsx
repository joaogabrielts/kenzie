import { useContext } from "react";
import { UserContext } from "../../providers/UserTechContext";
import { LoginView } from "./LoginView";
import { LogoutView } from "./LogoutView";
import { CreateModal } from "../../components/CreateTechModal";
import { PostContext } from "../../providers/PostTech";
import { EditTechModal } from "../../components/EditTechModal";
import style from "./style.module.scss";


export const HomePage = () => {
  const { user, isOpen} = useContext(UserContext);
  const { editingPost } = useContext(PostContext);

  
  

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

