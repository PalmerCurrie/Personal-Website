import "./ProjectCard.css";

function ProjectCard({ project, selectedProject, setSelectedProject }) {
  if (!project || !selectedProject) {
    return null;
  }

  const isSelected = selectedProject.id === project.id;

  const handleProjectClick = () => {
    setSelectedProject(project);
  };

  return (
    <div
      onClick={handleProjectClick}
      className={`project-card-container ${isSelected ? "selected" : ""}`}
    >
      <div className="project-image">
        <img src={project.thumbnail} />
      </div>
      <div className="project-content">
        <h2>{project.title} </h2>
        <p> {project.shortDescription} </p>
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <div key={index} className="technology">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
