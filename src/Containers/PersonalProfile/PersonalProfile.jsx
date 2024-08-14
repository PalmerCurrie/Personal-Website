import "./PersonalProfile.css";

function PersonalProfile() {
  return (
    <div className="profile-container">
      <div className="left-column">
        <h1>Hi! I'm Palmer Currie</h1>
        <h2>Full-Stack Developer</h2>
        <p> Third Year student studying at UBC. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ligula ut dui cursus, at tincidunt lacus ornare. Nam fermentum sem sed velit volutpat, nec vulputate felis aliquet. Aenean ullamcorper orci ut nibh sodales, eget ullamcorper leo dignissim. Quisque sit amet libero in magna pellentesque varius. Vivamus at purus nec urna finibus bibendum.</p>
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
