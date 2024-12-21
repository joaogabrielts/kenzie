import Home from "../Home";
import Cart from "../pages";
import Login from "../Login";
import Dashboard from "../Dashboard";
//import CustomRoute from "./route"; // Importa o componente customizado
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route isPrivate path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;


/*

//import { Routes } from "react-router-dom";
import Home from "../Home";
import Cart from "../pages";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Route from "./route.js";
import { Switch } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
       <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route  isPrivate path="/dashboard" element={<Dashboard />} /> 
    </Switch>
   
  );
};

export default AppRoutes;


 <Routes>
    
    </Routes>
 */
