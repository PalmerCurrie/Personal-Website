import { useEffect, useMemo, useState } from 'react';
import './Header.css';

const sunSVG = (
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
);

const moonSVG = (
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
);

function Header({
  theme,
  onToggleTheme,
  profileRef,
  experienceRef,
  projectsRef,
  contactRef,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showFullName, setShowFullName] = useState(false);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const progress = Math.min(window.scrollY / 300, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let timeout;

    if (scrollProgress <= 0.5 && windowWidth > 600) {
      timeout = setTimeout(() => {
        setShowFullName(true);
      }, 150);
    } else {
      setShowFullName(false);
    }

    return () => clearTimeout(timeout);
  }, [scrollProgress, windowWidth]);

  const headerStyle = useMemo(() => {
    return {
      width: `${Math.max(60, 100 - 66 * scrollProgress)}vw`,
      top: `${10 * scrollProgress}px`,
      height: `${5.5 - scrollProgress}vh`,
      borderRadius: `${scrollProgress * 100}px`,
      backgroundColor: theme
        ? `rgba(35, 36, 40, ${1 - 0.05 * scrollProgress})`
        : `rgba(241, 241, 241, ${1 - 0.05 * scrollProgress})`,
      border: theme
        ? `1px solid rgba(255, 255, 255, 0.08)`
        : `1px solid rgba(0, 0, 0, 0.1)`,
      transition:
        'width 0.4s ease, top 0.4s ease, height 0.4s ease, border-radius 0.4s ease, background-color 0.4s ease, border 0.4s ease',
      margin: '0 auto',
    };
  }, [scrollProgress, theme]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  function renderThemeButton() {
    return (
      <button onClick={() => onToggleTheme()}>
        {theme ? sunSVG : moonSVG}
      </button>
    );
  }

  return (
    <div className="header-container" style={headerStyle}>
      <div className="header-name-container">
        <h1 onClick={() => scrollToSection(profileRef)}>
          {windowWidth <= 600 || !showFullName ? 'PC' : 'Palmer Currie'}
        </h1>
      </div>

      <div className="nav-container">
        <p onClick={() => scrollToSection(profileRef)}> About </p>
        <p onClick={() => scrollToSection(experienceRef)}> Experience </p>
        <p onClick={() => scrollToSection(projectsRef)}> Projects </p>
        <p onClick={() => scrollToSection(contactRef)}> Contact </p>
      </div>

      <div className="theme-button-container">{renderThemeButton()}</div>
    </div>
  );
}

export default Header;
