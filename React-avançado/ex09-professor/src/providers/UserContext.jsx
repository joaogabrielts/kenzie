import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");
      if (token && userId) {
        try {
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/dashboard")
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      }
    };
    loadUser();
  }, []);

 

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      console.log("cadastro efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
     console.log('Resposta do servidor:', data.data);


      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
     
      console.error('Erro ao fazer login:', error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);