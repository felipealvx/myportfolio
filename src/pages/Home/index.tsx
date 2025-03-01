import App from "../App";
import Header from "../../components/Header";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HomeProps } from "../../types/home";
import LinkSocial from "../../components/UI/LinkSocial";

function Home() {

  return (
    <App className="__app">
      <Header />
      <main className="mainPage flex flex-row w-full h-full text-black-100 items-center justify-between">
        <Section
          className="w-[50%] text-xl flex flex-col gap-6 __section"
          title="Felipe Alves da Silva"
          subtitle="Desenvolvedor Mobile & Web Front-End"
          text={"Utilizo tecnologias como React Native, React, Node, Swift Typescript, Javascript e curto muito UI-UX."}>
            <div className="flex flex-wrap gap-6 __containerLinks">
              <LinkSocial 
                title="Github" 
                icon={<FontAwesomeIcon icon={faGithubSquare} size="2x"/>} 
                link="https://github.com/felipealvx"
                className="__link backdrop-blur-sm border-[1px] border-light-50 rounded-md p-2"
              />
              <LinkSocial 
                title="LinkedIn" 
                icon={<FontAwesomeIcon icon={faLinkedin} size="2x"/>} 
                link="https://www.linkedin.com/in/felipealvx/"
                className="__link backdrop-blur-sm border-[1px] border-light-50 rounded-md p-2"
              />
              <LinkSocial  
                title="Instagram" 
                icon={<FontAwesomeIcon icon={faInstagramSquare} size="2x"/>} 
                link="https://www.instagram.com/ofelipalves/"
                className="__link backdrop-blur-sm border-[1px] border-light-50 rounded-md p-2"
              />
            </div>
        </Section>
      </main>
    </App>
  );
}

function Section({children, title, subtitle, text, className}: HomeProps) {
  return (
    <section className={`
    ${className || ""}
    `}>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl underline text-primary-500">{title}</h2>
        <p className="text-sm text-light-600">{subtitle}</p>
      </div>
      <p className="w-[80%]">{text}</p>
      {children}
    </section>  
  )
}


export default Home;