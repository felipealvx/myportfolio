import React from "react";
import { Project } from "../../types/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type ProjectProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="__project w-80 shadow-lg bg-light-200 bg-opacity-15 rounded-md p-2 flex flex-col gap-2 border backdrop-blur-sm border-primary-400 justify-between ">
      <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{project.title}</h2>
      <p className="text-dark-400">{project.description}</p>
      <div className="flex gap-2 mt-2 justify-between">
        {project.stacks.map((stack, index) => (
          <span key={index} className="bg-primary-400 text-sm px-2 py-1 rounded text-dark-800">
            {stack}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" className="bg-light-100 p-3 rounded-sm text-dark-800 hover:underline flex items-center justify-between hover:bg-primary-300 transition-all">
        Ver no GitHub
        <FontAwesomeIcon icon={faGithub}/>
      </a>
    </div>
  );
};

export default ProjectCard;
