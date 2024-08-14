import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProjectShowcase from "./Containers/ProjectShowcase/ProjectShowcase.jsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <PersonalProfile />
      <ProjectShowcase />
    </div>
  );
}

export default App;
