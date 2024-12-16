import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import style from "./style.module.scss";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");

    const autoLogin = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        navigate("/");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
      } finally {
        setLoading(false);
      }
    };
    if (userId && token) {
      autoLogin();
    }
  }, []);

  const revalidateUser = async () => {
    const userId = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");

    if (!userId || !token) return;

    try {
      const { data } = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.error("Erro ao revalidar os dados do usuário:", error);
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/");
      toast.success(
        (t) => (
          <div className={style.customToast}>
            <div className={style.toastcontent}>
              <p>Login efetuado com sucesso!</p>
            </div>

            <button
              className={style.closeButton}
              onClick={() => toast.dismiss(t.id)}
            >
              X
            </button>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
        }
      );
      setErro(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setErro(true);
      toast.error(
        (t) => (
          <div className={`${style.customToast} ${style.error}`}>
            <div className={style.toastcontent}>
              <p>Error no login!</p>
            </div>
            <div>
              <button
                className={style.closeButton}
                onClick={() => toast.dismiss(t.id)}
              >
                X
              </button>
            </div>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
          iconTheme: {
            primary: "#f44336",
            secondary: "#ffffff",
          },
        }
      );
      console.log("Error no login", error);
    }
  };

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("/");

      toast.success(
        (t) => (
          <div className={style.customToast}>
            <div className={style.toastcontent}>
              <p>Conta criada com sucesso!</p>
            </div>

            <button
              className={style.closeButton}
              onClick={() => toast.dismiss(t.id)}
            >
              X
            </button>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
        }
      );
      setErro(false);
    } catch (error) {
      setErro(true);
      toast.error(
        (t) => (
          <div className={`${style.customToast} ${style.error}`}>
            <div className={style.toastcontent}>
              <p>Ops! Algo deu errado no cadastro.</p>
            </div>
            <div>
              <button
                className={style.closeButton}
                onClick={() => toast.dismiss(t.id)}
              >
                X
              </button>
            </div>
          </div>
        ),
        {
          duration: 5000,
          closeButton: false,
          iconTheme: {
            primary: "#f44336",
            secondary: "#ffffff",
          },
        }
      );

      console.error("Erro ao se cadastrar:", error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          userLogin,
          userRegister,
          userLogout,
          revalidateUser,
          loading,
          isOpen,
          setIsOpen,
          erro,
          setErro,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
