import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkSocial from "./LinkSocial";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CardProps } from "../../types/card";

export default function CardProjects({image, className, title, description}: CardProps) {
  return (
    <div className={`h-full w-52 bg-light-200 bg-opacity-15 rounded-md p-2 flex flex-col gap-2 border-[1px] border-light-400 justify-between ${className}`}>
      <img src={image} alt="" className="w-full rounded-sm"/>
      <h3 className="text-center text-primary-500 font-bold">{title}</h3>
      <p className="text-xs">{description}</p>
      <LinkSocial
        title="GitHub"
        link="#"
        icon={<FontAwesomeIcon icon={faGithub} color="#111"/>} 
        className="p-2 rounded-sm bg-light-400 text-dark-800"
      />
    </div>
  )
}