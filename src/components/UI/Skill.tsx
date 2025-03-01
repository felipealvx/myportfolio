import { SkillProps } from "../../types/skills";
import "../styles/skill.css"

export default function Skill({title, icon}: SkillProps){
  return (
    <div className="text-5xl flex text-light-50 flex-col p-2 rounded-sm __skill">
      {icon}
      <p className="text-xs text-center __titleSkill">{title}</p>
    </div>
  )
} 