import { Navigate, Route, Routes } from "react-router-dom";
import { useUserContext } from "./providers/UserContext";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  const { user } = useUserContext();
  return (
    <Routes>
     

    <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
    <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <RegisterPage />} />
    <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />
    {/* Adicionando uma rota para lidar com 404 */}
    <Route path="*" element={<h1>Página não encontrada</h1>} />
  </Routes>
);
}

export default App;
