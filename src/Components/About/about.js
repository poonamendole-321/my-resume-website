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
            After completing my BCA, I commenced a fulfilling journey with an
            internship as a Software Developer at VgroomU. This experience
            seamlessly transitioned into a continued role within the same
            organization until October 2023
          </p>
          <p>
            In this role, I collaborated across teams to deliver high-quality
            projects promptly. I focused on creating visually appealing,
            user-friendly websites, prioritizing a seamless user experience.
            Proactively incorporating client feedback, I led design revisions
            that significantly improved overall satisfaction.
          </p>
          <p>
            Now, I am eager to explore new opportunities as a Frontend Developer
            , leveraging my skills to drive advancements in the field.
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
