import { Link } from "react-router";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;