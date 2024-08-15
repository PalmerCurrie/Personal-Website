import "./ProjectShowcase.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import { ProjectData } from "./ProjectsData.js";

function ProjectShowcase({ selectedProject, setSelectedProject }) {
  return (
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
  );
}

export default ProjectShowcase;
