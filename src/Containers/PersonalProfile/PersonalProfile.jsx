import "./PersonalProfile.css";
import SocialLink from "../../Components/SocialLink/SocialLink";

function PersonalProfile() {
  return (
    <div className="container">
      <div className="left-column">
        <h1>Hi! I'm Palmer Currie</h1>
        <h2>Full-Stack Developer</h2>
        <p> Third Year student studying at UBC.</p>
        <p> View Resume </p>
      </div>
      <div className="right-column">
        <img src="" alt="profile-picture" className="profile-picture" />
        <p>Vancouver, Canada</p>
      </div>
    </div>
  );
}

export default PersonalProfile;
