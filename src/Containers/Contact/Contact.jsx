import SocialLink from '../../Components/SocialLink/SocialLink.jsx';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-social-container">
        <SocialLink
          icon={<img src="github.svg" alt="GitHub" />}
          link="https://github.com/PalmerCurrie"
          className="contact-social-link"
        />
        <SocialLink
          icon={<img src="linkedin.svg" alt="LinkedIn" />}
          link="https://www.linkedin.com/in/palmercurrie/"
          className="contact-social-link"
        />
        <SocialLink
          icon={<img src="email.svg" alt="Email" />}
          link="mailto:palmercurrie@gmail.com"
          className="contact-social-link"
        />
      </div>
      <p>
        Contact Me At:{' '}
        <a href="mailto:palmercurrie@gmail.com">palmercurrie@gmail.com</a> or{' '}
        <a
          href="https://linkedin.com/in/palmercurrie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/palmercurrie/
        </a>
      </p>
    </div>
  );
}

export default Contact;
