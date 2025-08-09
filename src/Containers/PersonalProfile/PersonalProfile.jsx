import './PersonalProfile.css';

function PersonalProfile() {
  const openResume = () => {
    window.open('/Palmer-Currie-Resume.pdf', '_blank');
  };

  return (
    <div className="profile-container background-gradient">
      <div className="content-container">
        <div className="left-column">
          <h1>Hi! I'm Palmer Currie</h1>
          <h2>Full-Stack Developer</h2>
          <p>
            I’m a third-year Computer Science student at the University of
            British Columbia and a passionate Full-Stack Web Developer
            specializing in React, TypeScript, and SQL. Outside of coding, I
            enjoy basketball, hockey, working out, and building creative
            projects. Check out my work or connect with me through the links in
            the header!
          </p>
        </div>
        <div className="right-column">
          <div className="profile-picture-container">
            <img
              src="/ProfilePicture.png"
              alt="profile-picture"
              className="profile-picture"
            />
          </div>
          <p className="location-text">📍Vancouver, Canada</p>
        </div>
      </div>

      <div className="resume-container">
        <p className="resume" onClick={openResume}>
          ➣ View Resume
        </p>
      </div>
    </div>
  );
}

export default PersonalProfile;
