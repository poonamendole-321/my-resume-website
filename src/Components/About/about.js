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
           Over the past year, I've collaborated with startups, playing a key
            role in helping them realize their full potential and attract new
            customers.
          </p>
          <p>
            After completing my BCA, I pursued an internship as a Software
            Developer intern at VgroomU. Following the internship, I
            transitioned into a continued role as a Software Developer within
            the same organization. However, as of October, I have concluded my
            tenure at VgroomU and am currently in the process of exploring new
            opportunities as a fresh graduate.
          </p>
          <p>
            My responsibilities encompass shaping web page design, crafting
            reusable code, and optimizing loading times. I am enthusiastic about
            leveraging my experiences to contribute effectively to innovative
            solutions and drive advancements in the industry.
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
