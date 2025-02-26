import { Link } from "react-router";
import "./style.css";
import Icon from "../../assets/svgs/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faHome, faListCheck } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={`header 
      flex 
      h-20 
      p-5 
      items-center 
      justify-between
      rounded-md 
      border-[0.5px] 
      border-primary-500
      bg-gradient-to-r 
      from-primary-500
      from-10% 
      backdrop-blur-sm 
      `}>

      <img src={Icon} alt="Icon" className="h-10" />
      <ul className="flex gap-5 items-center text-lg text-black-100 flex-wrap">
        <li>
          <Link to="/" className="link__"><FontAwesomeIcon icon={faHome} /> Início</Link>
        </li>
        <li>
          <Link to="/about" className="link__"><FontAwesomeIcon icon={faListCheck} /> Projetos</Link>
        </li>
        <li>
          <Link to="/contacts" className="link__"><FontAwesomeIcon icon={faAddressBook} /> Contatos </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
