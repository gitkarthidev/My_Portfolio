import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";

const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      {data.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Projects;
