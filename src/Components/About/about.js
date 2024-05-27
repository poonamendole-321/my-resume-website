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
            Over the past year, I've had the privilege of collaborating with
            startups, contributing significantly to their growth and success in
            acquiring new customers. My journey has been enriched by hands-on
            experience and learning opportunities at Vgroomu, complemented by a
            solid foundation laid through my BCA degree.
          </p>

          <p>
            My aim is to utilize my educational background and practical
            experience to excel in a dynamic and growth-oriented role. I thrive
            on innovation and am eager to continue learning and driving positive
            outcomes for both the organization and myself.I am enthusiastic
            about applying my knowledge and skills to tackle new challenges and
            projects. Collaborating with talented colleagues excites me, and I
            am committed to achieving shared success through dedication,
            adaptability, and a passion for continuous learning.
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
