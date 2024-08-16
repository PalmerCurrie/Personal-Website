import "./ProjectInformation.css";
import { useEffect, useState } from "react";
import Technology from "../../Components/Technology/Technology";
import Link from "../../Components/Link/Link";

function ProjectInformation({ project }) {
  const [mediaIndex, setMediaIndex] = useState(0);

  // Reset which picture to show when selectedProject changes
  useEffect(() => {
    setMediaIndex(0);
  }, [project]);

  const handleMoveRight = () => {
    let mediaListLength = project.mediaList.length - 1;
    if (mediaIndex >= mediaListLength) {
      setMediaIndex(0);
    } else {
      let nextMediaIndex = mediaIndex + 1;
      setMediaIndex(nextMediaIndex);
    }
  };

  const handleMoveLeft = () => {
    let mediaListLength = project.mediaList.length - 1;
    if (mediaIndex === 0) {
      setMediaIndex(mediaListLength);
    } else {
      let nextMediaIndex = mediaIndex - 1;
      setMediaIndex(nextMediaIndex);
    }
  };

  return (
    <div className="project-information-container background-gradient">
      <div className="image-container">
        <div onClick={handleMoveLeft} className="image-arrow left">
          <p>➣</p>
        </div>
        <img
          src={project.mediaList[mediaIndex].url || project.mediaList[0].url}
          alt={project.title}
          className="image"
        />
        <div onClick={handleMoveRight} className="image-arrow right">
          <p>➣</p>
        </div>
      </div>
      <div className="project-information">
        <div className="caption-container">
          <p className="caption">{project.mediaList[mediaIndex].caption}</p>
        </div>
        <div className="project-name-container">
          <h2>{project.title} </h2>
          <Link
            icon={<img src="web.svg" alt="Website" />}
            link={project.link}
            text="Website"
          />
          <Link
            icon={<img src="github.svg" alt="GitHub" />}
            link={project.githubLink}
            text="GitHub"
          />
        </div>
        <p> {project.longDescription} </p>
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <Technology text={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectInformation;
