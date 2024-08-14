import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(false);

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
    <div className="App">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <PersonalProfile />
      <ProjectShowcase />
    </div>
  );
}

export default App;
