import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header onToggleTheme={toggleDarkMode} />
      <PersonalProfile />
      <ProjectShowcase />
    </div>
  );
}

export default App;
