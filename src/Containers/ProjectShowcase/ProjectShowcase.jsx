import "./ProjectShowcase.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import { ProjectData } from "./ProjectsData.js";
import { useState } from "react";

function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(ProjectData[0]);

  return (
    <div className="project-showcase">
      <h1>Projects</h1>
      <div className="projects-container">
        {ProjectData.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>
      <ProjectCard />
    </div>
  );
}

export default ProjectShowcase;
