import "./Header.css";
import SocialLink from "../SocialLink/SocialLink";

function Header({ theme, onToggleTheme }) {
  const handleThemeClick = () => {
    onToggleTheme();
  };

  return (
    <div className="header-container">
      <div className="name-container">
        <p>Palmer Currie</p>
      </div>
      <div className="social-container">
        {/* SocialLink takes in Icon and Link */}
        <SocialLink
          icon={<img src="github.svg" alt="GitHub" />}
          link="https://github.com/PalmerCurrie"
        />
        <SocialLink
          icon={<img src="linkedin.svg" alt="LinkedIn" />}
          link="https://www.linkedin.com/in/palmercurrie/"
        />
        <SocialLink
          icon={<img src="email.svg" alt="Email" />}
          link="mailto:palmercurrie@gmail.com"
        />
      </div>
      <div className="nav-container">
        <button onClick={handleThemeClick}>
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
              style={{ transform: "scaleX(-1)" }} // flip moon
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
        <p> Home </p>
        <p> Projects </p>
        <p> Contact </p>
      </div>
    </div>
  );
}

export default Header;
