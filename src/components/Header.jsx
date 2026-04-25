import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav container">
        <h2>URBAN THREADS</h2>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;