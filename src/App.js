import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";
import Contact from "./Containers/Contact/Contact.jsx";

import { ProjectData } from "./Containers/ProjectShowcase/ProjectsData.js";
import { useState, useEffect } from "react";
import ProjectInformation from "./Containers/ProjectInformation/ProjectInformation.jsx";

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

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="app-content">
        <PersonalProfile />
        <ProjectShowcase
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <ProjectInformation project={selectedProject} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
