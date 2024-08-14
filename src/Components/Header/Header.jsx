import "./Header.css";

function Header({ onToggleTheme }) {
  const handleThemeClick = () => {
    onToggleTheme();
  };

  return (
    <div className="header-container">
      <h1>Hello Header!</h1>
      <button onClick={handleThemeClick}>Toggle Dark Mode</button>
    </div>
  );
}

export default Header;
