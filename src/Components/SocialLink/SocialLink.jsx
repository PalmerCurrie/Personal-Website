import "./SocialLink.css";

// Takes in Icon and Link, Produces a little card
// with icon that is clickable and sends to link in another
function SocialLink({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <div className="icon-container">{icon}</div>
    </a>
  );
}

export default SocialLink;
