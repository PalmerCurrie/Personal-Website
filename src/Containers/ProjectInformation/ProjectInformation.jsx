import "./ProjectInformation.css";
import { useState } from "react";

function ProjectInformation({ project }) {
  const [mediaIndex, setMediaIndex] = useState(0);

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
    if (mediaIndex == 0) {
      setMediaIndex(mediaListLength);
    } else {
      let nextMediaIndex = mediaIndex - 1;
      setMediaIndex(nextMediaIndex);
    }
  };

  return (
    <div className="project-information-container">
      <div className="image-container">
        <div onClick={handleMoveLeft}> ⇦ </div>
        <img
          src={project.mediaList[mediaIndex].url}
          alt={project.title}
          className="image"
        />
        <div onClick={handleMoveRight}> ➣ </div>
      </div>
      <div className="project-information">
        <h2>{project.title} </h2>
        <p> {project.longDescription} </p>
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

export default ProjectInformation;
