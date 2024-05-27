import React from "react";
import resumeImage from "../../Images/resume .jpg";
import SocialLinks from "../Sociallinks/sociallinks";

import "./intro.css";

const Intro = () => {
  return (
    <div id="intro_section" className="my_intro">
      <div className="left_section">
        <h1 className="my_intro_name">
          Hello<span> I'm Poonam</span>
        </h1>
        <h2 className="my_intro_heading">Javascript Developer</h2>
        <p className="my_intro_para">
          "Welcome to my website. I'm passionate about creating visually
          stunning and user-friendly websites. With a strong background in HTML,
          CSS, and JavaScript, I have successfully translated design concepts
          into fully functional and responsive websites."
        </p>
        <p className="my_intro_find"> Find me on</p>
        <div className="my_intro_redirect">
          <SocialLinks />
        </div>
      </div>
      <div className="right_section">
        <img src={resumeImage} alt="Resume" />
      </div>
    </div>
  );
};

export default Intro;
