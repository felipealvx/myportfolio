import App from "../App";
import Header from "../../components/Header";
import "./style.css";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type appProps = {
  children?: ReactNode
  title?: string
  subtitle?: string
  text?: string
  icon?: ReactNode
  className?: string
  link?: string
}

function Home() {

  return (
    <App>
      <Header />
      <main className="flex w-full h-full text-black-100 items-center relative">
        <Section
          className="w-[50%] text-xl flex flex-col gap-2 absolute top-40"
          title="Felipe Alves da Silva"
          subtitle="Desenvolvedor Mobile & Web Front-End"
          text={"Utilizo tecnologias como React Native, React, Node, Swift Typescript, Javascript e curto muito UI-UX."}>
            <div className="flex gap-10">
              <LinkSocial 
                title="Github" 
                icon={<FontAwesomeIcon icon={faGithubSquare} size="2x"/>} 
                link="https://github.com/felipealvx"
              />
              <LinkSocial 
                title="LinkedIn" 
                icon={<FontAwesomeIcon icon={faLinkedin} size="2x"/>} 
                link="https://github.com/felipealvx"
              />
              <LinkSocial  
                title="Instagram" 
                icon={<FontAwesomeIcon icon={faInstagram} size="2x"/>} 
                link="https://github.com/felipealvx"
              />
            </div>
        </Section>
        <SkillIcons />
      </main>
    </App>
  );
}

function Section({children, title, subtitle, text, className}: appProps) {
  return (
    <section className={`
    ${className || ""}
    `}>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl underline text-green-100">{title}</h2>
        <p className="text-sm text-black-500">{subtitle}</p>
      </div>
      <p>{text}</p>
      {children}
    </section>  
  )
}

function LinkSocial({icon, title, className, link}: appProps){
  return (
    <a href={link} className={`
    flex gap-4 items-center
    text-green-100
    p-2 
    link__social
    ${className || ""}`
    }>
      {icon}
      <p className="underline text-sm">{title}</p>
    </a>
  )
}

function SkillIcons() {
  return (
    <div>
      
    </div>
  )
}


export default Home;
