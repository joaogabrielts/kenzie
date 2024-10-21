import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="header">
      <nav >
        <Link to="/">Login</Link>
        <Link to="/register">Cadastre-se</Link>
      </nav>
    </header>
  );
};

export default Header;
