import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <h1>
        <Link to="/">
        Kenzie
        </Link>
    </h1>
      <Link to="/login">Entrar</Link>
    </>
  );
};
