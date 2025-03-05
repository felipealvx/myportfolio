import App from "../App";
import Header from "../../components/Header";
import "./style.css"
import ProjectCard from "../../components/UI/Card";
import { projects } from "../../data/projects";

function About() {
  return (
    <App>
      <Header />
      <div className="mainPage h-full w-full flex flex-col">
        <div className="flex flex-col gap-2 py-4 w-full __containerProjects">
          <h2>Projetos:</h2>
          <div className="flex gap-4 flex-wrap justify-between .__containerProjects">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>  
        <p className="text-xs text-center">Felipe Alves da Silva - Projects</p>      
      </div>
    </App>
  );
}

export default About;
