import { Link } from "react-router";
import "./style.css";
import Icon from "../../assets/svgs/icon.svg";

function Header() {
  return (
    <header className="header 
      flex 
      h-20 
      p-5 
      items-center 
      justify-between
      rounded-md 
      border-[0.5px] 
      border-green-300 
      bg-gradient-to-r
      from-green-300
      from-10%
      ">

      <img src={Icon} alt="Icon" className="h-10" />
      <ul className="flex items-center gap-10 text-lg text-black-100">
        <li>
          <Link to="/" className="hover:bg-green-950 ease-in-out p-2 ">Início</Link>
        </li>
        <li>
          <Link to="/about">Projetos</Link>
        </li>
        <li>
          <Link to="/contacts">Contatos</Link>
        </li>
      </ul>

    </header>
  );
}

export default Header;
