import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import "./sociallinks.css";

const SocialLinks = () => {
  const redirectToGitHub = () => {
    window.location.href = "https://github.com/poonamendole-321";
  };

  const redirectToMail = () => {
    window.location.href = "mailto:poonammendole@gmail.com";
  };

  const redirectToLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/in/poonam-endole-47b5a6231/";
  };

  return (
    <div className="social-links">
      <FaGithub className="icon" onClick={redirectToGitHub} />
      <FaEnvelope className="icon" onClick={redirectToMail} />
      <FaLinkedin className="icon" onClick={redirectToLinkedIn} />
    </div>
  );
};

export default SocialLinks;
