import "./Link.css";

// Takes in Icon and Link, Produces a little card
// with icon that is clickable and sends to link in another
function Link({ icon, link, text }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      <div className="container">
        <div className="link-icon-container">{icon} </div>
        <div className="link-text-container">{text}</div>
      </div>
    </a>
  );
}

export default Link;
