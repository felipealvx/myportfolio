import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkSocial from "./LinkSocial";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Imagem from "../../assets/imgs/icon.jpg"

export default function CardProjects() {
  return (
    <div className="h-full w-52 bg-light-200 bg-opacity-15 rounded-md p-2 flex flex-col gap-2 border-[1px] border-light-400">
      <img src={Imagem} alt="" className="w-full rounded-sm"/>
      <h3 className="text-center text-primary-500 font-bold">PokeNative</h3>
      <p className="text-xs">Aplicativo feito utilizando React Native e a API PokeAPI.</p>
      <LinkSocial
        title="GitHub"
        link="#"
        icon={<FontAwesomeIcon icon={faGithub} />} 
        className="p-2 rounded-sm bg-light-400 text-dark-800"
      />
    </div>
  )
}