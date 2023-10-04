import React, { useEffect } from "react";

import "./skills.css";

const skillsWithPercentages = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "TypeScript", percentage: 75 },
  { name: "JavaScript", percentage: 80 },
  { name: "Git", percentage: 60 },
  { name: "GitHub", percentage: 70 },
  { name: "React", percentage: 80 },
  { name: "Next js", percentage: 70 },
  { name: "Antd", percentage: 50 },
  { name: "Material ui", percentage: 60 },
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
