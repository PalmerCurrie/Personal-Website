import { useState } from 'react';
import './Header.css';

function Header({
  theme,
  onToggleTheme,
  profileRef,
  experienceRef,
  projectsRef,
  contactRef,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  function renderThemeButton() {
    return (
      <button onClick={() => onToggleTheme()}>
        {theme ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>
    );
  }

  return (
    <div className="header-container">
      <div className="header-name-container">
        <h1 onClick={() => scrollToSection(profileRef)}>Palmer Currie</h1>
      </div>

      <div className="nav-container">
        <div className={`header-link-container ${isOpen ? 'open' : ''}`}>
          <p onClick={() => scrollToSection(profileRef)}> About </p>
          <p onClick={() => scrollToSection(experienceRef)}> Experience </p>
          <p onClick={() => scrollToSection(projectsRef)}> Projects </p>
          <p onClick={() => scrollToSection(contactRef)}> Contact </p>
        </div>
        {/* Mobile v */}
        <div
          className="nav-toggle"
          onClick={() => setIsOpen((current) => !current)}
        >
          &#9776;
        </div>
      </div>

      <div className="theme-button-container">{renderThemeButton()}</div>
    </div>
  );
}

export default Header;
