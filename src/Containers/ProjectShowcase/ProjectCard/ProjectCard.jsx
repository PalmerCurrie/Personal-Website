import Technology from "../../../Components/Technology/Technology";
import "./ProjectCard.css";

function ProjectCard({
  project,
  selectedProject,
  setSelectedProject,
  projectInformationRef,
}) {
  if (!project || !selectedProject) {
    return null;
  }

  const isSelected = selectedProject.id === project.id;

  const handleProjectClick = () => {
    setSelectedProject(project);
    scrollToSection(projectInformationRef);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={handleProjectClick}
      className={`project-card-container ${
        isSelected ? "selected" : ""
      } background-gradient`}
    >
      <div className="project-image-container">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h2>{project.title} </h2>
        <p> {project.shortDescription} </p>
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <Technology text={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
