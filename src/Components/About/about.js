import React, { useState } from "react";

import "./about.css";

const About = () => {
  const resumeUrl =
    "https://github.com/poonamendole-321/my-resume/blob/main/Poonam%20Endole.pdf"; // Replace with the actual URL or path to your resume file
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    console.log("Download button clicked");

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "Poonam Endole Resume.pdf";
    document.body.appendChild(link);

    console.log("About to trigger download");

    link.click();

    console.log("Download initiated");

    document.body.removeChild(link);

    console.log("Download link removed");

    setDownloaded(true);
  };

  return (
    <div id="about-section" className="about_container">
      <div className="about_heading">
        <h1>About Me</h1>
      </div>
      <div className="about_data">
        <div className="about_para">
          <p>
            Over the past 1 year, I’ve worked with startups to successfully help
            them reach their full potential and attract new customers.
          </p>
          <p>
            After completing my BCA, undertook an internship as a Software
            Developer intern at VgroomU. I then transitioned to a continued role
            as a Software Developer within the same organization.
          </p>
          <p>
            Presently, I'm part of the team Docbuddy, where I play an active
            role in contributing to software development projects. My role
            includes shaping web page design, creating reusable code, and
            optimizing loading times, I honed my skills in API integrations.
            These experiences have enabled me to contribute effectively to the
            world of software development, as I continue to explore innovative
            solutions and drive advancements in the field.
          </p>
        </div>
        <div className="download-button">
          {!downloaded ? (
            <button onClick={handleDownload}>Download My Resume</button>
          ) : (
            <p>Resume Downloaded!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
