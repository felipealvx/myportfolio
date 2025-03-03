import { LinkSocialProps } from "../../types/links";

export default function LinkSocial({icon, title, className, link}: LinkSocialProps){
  return (
    <a href={link} className={`
    flex gap-3 items-center
    ${className || ""}`
    }>
      <p className="text-primary-500">{icon}</p>
      <p className="underline hover:text-primary-300 ease-in-out transition">{title}</p>
    </a>
  )
}