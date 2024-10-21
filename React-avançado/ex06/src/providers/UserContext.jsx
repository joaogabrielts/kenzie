import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

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
      const { data } = api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID")
    setUser(null)
    navigate("/")
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
