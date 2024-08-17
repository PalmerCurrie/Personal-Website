import "./ProjectShowcase.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import { ProjectData } from "./ProjectsData.js";

function ProjectShowcase({
  selectedProject,
  setSelectedProject,
  projectInformationRef,
}) {
  return (
    <div className="projects-container">
      {ProjectData.map((project, index) => (
        <ProjectCard
          project={project}
          index={index}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectInformationRef={projectInformationRef}
        />
      ))}
    </div>
  );
}

export default ProjectShowcase;
