import App from "../App";
import Header from "../../components/Header";
import LinkSocial from "../../components/UI/LinkSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation, faDeviantart, faDribbbleSquare, faFigma, faGit, faGithubSquare, faInstagramSquare, faJsSquare, faLinkedin, faLinux, faNodeJs, faReact, faSwift } from "@fortawesome/free-brands-svg-icons";
import Skill from "../../components/UI/Skill";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import Gif from "../../assets/gifs/boy.gif";
import "./style.css"

function Contacts() {
  return (
    <App>
      <Header />
      <section className="__section flex flex-col gap-6 py-4 relative w-2/3">
        <div>
          <h2 className="text-lg">Sobre Mim:</h2>
          <p className="font-light text-sm">
            Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará e 
            Cursando Desenvolvimento IOS pelo IFCE - Residência em TIC Capacita Brasil. 
            Sou Desenvolvedor Front-End FullStack e tenho conhecimento em tecnologias como React, React Native,
            Node, TypeScript e SwiftUI. Possuo grande afinidade com UI design e busco sempre implementá-la nos
            meus projetos.
          </p>
        </div>
        <div>
          <h2>Tecnologias:</h2>
          <div className="flex gap-4 flex-wrap">
            <Skill 
              title="React"
              icon={<FontAwesomeIcon icon={faReact}/>}
            />
            <Skill 
              title="React Native"
              icon={<FontAwesomeIcon icon={faReact}/>}
            />
            <Skill 
              title="NodeJS"
              icon={<FontAwesomeIcon icon={faNodeJs}/>}
            />
            <Skill 
              title="Typescript/Javascript"
              icon={<FontAwesomeIcon icon={faJsSquare}/>}
            />
            <Skill 
              title="Swift"
              icon={<FontAwesomeIcon icon={faSwift}/>}
            />
            <Skill 
              title="Figma"
              icon={<FontAwesomeIcon icon={faFigma}/>}
            />
            <Skill 
              title="Git"
              icon={<FontAwesomeIcon icon={faGit}/>}
            />
          </div>
        </div>
        <div>
          <h2>Outras Skills & Hobbies:</h2>
          <div className="flex gap-4">
            <Skill 
              title="Linux"
              icon={<FontAwesomeIcon icon={faLinux}/>}
            />
            <Skill 
              title="Ilustração & Desenho"
              icon={<FontAwesomeIcon icon={faSquarePen}/>}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Contatos:</h2>
          <div className="flex gap-6 flex-wrap __containerLinks">
            <LinkSocial 
              title="GitHub"
              link="https://github.com/felipealvx"
              icon={<FontAwesomeIcon icon={faGithubSquare} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400 "
            />
            <LinkSocial 
              title="LinkedIn"
              link="https://www.linkedin.com/in/felipealvx/"
              icon={<FontAwesomeIcon icon={faLinkedin} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400 "
            />
            <LinkSocial 
              title="Instagram"
              link="https://instagram.com/ofelipalves"
              icon={<FontAwesomeIcon icon={faInstagramSquare} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400"
            />
            <LinkSocial 
              title="Dribbble"
              link="https://dribbble.com/Alvxx"
              icon={<FontAwesomeIcon icon={faDribbbleSquare} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400"
            />
            <LinkSocial 
              title="DeviantArt"
              link="https://www.deviantart.com/felipealvx"
              icon={<FontAwesomeIcon icon={faDeviantart} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400"
            />
            <LinkSocial 
              title="Artstation"
              link="https://www.deviantart.com/felipealvx"
              icon={<FontAwesomeIcon icon={faArtstation} size="2x"/>}
              className="__link p-2 border rounded-md border-light-400"
            />
          </div>
        </div>
      </section>
      <div className="w-full flex flex-col items-end justify-end">
          <h2>Até Breve!</h2>
          <img src={Gif} alt="Gif em tonalidade laranja (estético)" className="rounded-md h-48"/>
        </div>
    </App>
  );
}

export default Contacts;
