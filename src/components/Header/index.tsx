import { Link } from "react-router";
import "./style.css";
import Icon from "../../assets/imgs/icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faHome, faListCheck } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={` 
      flex 
      w-full
      h-20 
      p-5
      items-center 
      rounded-md 
      border-[0.5px] 
      border-primary-500
      bg-gradient-to-r 
      from-primary-500
      from-10% 
      backdrop-blur-sm 
      `}>
      <img src={Icon} alt="Icon" className="h-20 absolute left-[-1px] rounded-md border-[1px] border-primary-400 " />
      <ul className="flex gap-8 items-center text-lg text-black-100 flex-wrap w-full justify-end">
        <li>
          <Link to="/" className="hover:text-primary-300 transition-all ease-in-out"><FontAwesomeIcon icon={faHome} /> Início</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-primary-300 transition-all ease-in-out"><FontAwesomeIcon icon={faListCheck} /> Projetos</Link>
        </li>
        <li>
          <Link to="/contacts" className="hover:text-primary-300 transition-all ease-in-out"><FontAwesomeIcon icon={faAddressBook} /> Contatos </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
