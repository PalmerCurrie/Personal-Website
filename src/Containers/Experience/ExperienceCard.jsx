import { useEffect, useRef, useState } from 'react';
import './Experience.css';

export default function ExperienceCard({
  index,
  imageSrc,
  title,
  company,
  date,
  details,
  isOpen,
  onToggle,
}) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="experience-card-wrapper">
      <div className="experience-card" onClick={() => onToggle(index)}>
        <div className="experience-image-container">
          {imageSrc && (
            <img
              src={imageSrc.toString()}
              alt={company}
              className="job-image"
            />
          )}
        </div>

        <div className="job-information">
          <p className="job-title">{title}</p>
          <p className="company">{company}</p>
        </div>

        <div className="job-date">
          <p>{date}</p>
        </div>
      </div>

      <div
        className="dropdown-content"
        style={{
          height: `${height}px`,
        }}
      >
        <div ref={contentRef} className="dropdown-inner">
          <ul>
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
