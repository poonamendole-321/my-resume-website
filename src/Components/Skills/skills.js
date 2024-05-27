import React, { useEffect } from "react";

import "./skills.css";

const skillsWithPercentages = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "JavaScript & TypeScript ", percentage: 70 },
  { name: "React js & Next js", percentage: 80 },
  { name: "Git & GitHub", percentage: 80 },
  { name: "Antd & Material ui", percentage: 75 },
  { name: "VS Code", percentage: 80 },
  { name: "Postman", percentage: 40 },
  { name: "java", percentage: 50 },
  { name: "jira", percentage: 60 },
];

const Skills = () => {
  useEffect(() => {
    const numberPercent = document.querySelectorAll(".countbar");
    const getPercent = Array.from(numberPercent);

    const progressBar = (item) => {
      const targetWidth = item.dataset.percentnumber;
      let currentWidth = 0;

      item.interval = setInterval(() => {
        if (currentWidth >= targetWidth) {
          clearInterval(item.interval);
        } else {
          currentWidth += 1;
          item.style.width = `${currentWidth}%`;
          item.querySelector("h3").textContent = `${currentWidth}%`;
        }
      }, 10);
    };

    getPercent.forEach((item) => {
      progressBar(item);
    });

    return () => {
      getPercent.forEach((item) => {
        clearInterval(item.interval);
      });
    };
  }, []);

  return (
    <div id="skills-section" className="skills_container">
      <h1>My Skills</h1>
      <div className="skills_grid">
        {skillsWithPercentages.map((skill, index) => (
          <div className="skills_section" key={index}>
            <p className="skills_title">{skill.name}</p>
            <div className="skills_bars">
              <div
                className="bar_wrapper countbar"
                style={{
                  width: "0%",
                  backgroundColor: "grey",
                  borderRadius: "10px",
                }}
                data-percentnumber={skill.percentage}
              >
                <h3>0%</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
