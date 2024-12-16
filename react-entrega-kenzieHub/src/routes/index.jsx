import { Route, Routes } from "react-router-dom";

import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { useContext } from "react";
import { UserContext } from "../providers/UserTechContext";
import { Toaster } from "react-hot-toast";
import style from "./style.module.scss";

export const RoutesMain = () => {
  const { erro } = useContext(UserContext);
  
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000, 
          className: `${style.customToast} ${
            erro ? style.customToastError : ""
          }`, 
          iconTheme: {
            primary: "#4CAF50", 
            secondary: "#fff", 
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
