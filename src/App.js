import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import { useState, useEffect } from "react";

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

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="app-content">
        <PersonalProfile />
        <ProjectShowcase />
        <Contact />
      </div>
    </div>
  );
}

export default App;
