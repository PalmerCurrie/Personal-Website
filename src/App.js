import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";

import { useEffect, useRef, useState } from "react";
import ExperienceContainer from "./Containers/Experience/ExperienceContainer.jsx";
import ProjectInformation from "./Containers/ProjectInformation/ProjectInformation.jsx";
import { ProjectData } from "./Containers/ProjectShowcase/ProjectsData.js";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const [selectedProject, setSelectedProject] = useState(ProjectData[0]);

  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const projectInformationRef = useRef(null);

  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        profileRef={profileRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="app-content">
        <div ref={profileRef} className="ref-container">
          <PersonalProfile />
        </div>
        <div ref={experienceRef} className="section-header">
          <h2>Technical Experience</h2>
          <ExperienceContainer />
        </div>
        <div ref={projectsRef} className="section-header">
          <h2>Projects</h2>
        </div>
        <ProjectShowcase
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectInformationRef={projectInformationRef}
        />
        <div ref={projectInformationRef} className="ref-container">
          <ProjectInformation project={selectedProject} />
        </div>
        <div ref={contactRef} className="ref-container">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
