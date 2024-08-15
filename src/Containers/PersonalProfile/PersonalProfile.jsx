import "./PersonalProfile.css";

function PersonalProfile() {
  return (
    <div className="profile-container">
      <div className="left-column">
        <h1>Hi! I'm Palmer Currie</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          {" "}
          Third Year student studying at the University of British Columbia
          majoring in Computer Science. Full-Stack Web Developer, specializing
          in React, JavaScript, and SQL. I love playing and watching sports such
          as basketball and hockey, working out, and creating! Feel free to
          checkout some of my projects, or reach out to me through the links in
          the header!
        </p>
        <p className="resume">➣ View Resume </p>
      </div>
      <div className="right-column">
        <div className="profile-picture-container">
          <img src="" alt="profile-picture" className="profile-picture" />
        </div>
        <p className="location-text">📍Vancouver, Canada</p>
      </div>
    </div>
  );
}

export default PersonalProfile;
