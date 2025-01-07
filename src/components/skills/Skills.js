import React, { useRef } from "react";
import IsVisible from "react-is-visible";
import { Fade } from "react-reveal";
// import { skills } from "/src/data/skills.json";
// import { useContainerDimensions } from "../../hooks";

const Skills = () => {
  const skillsWrapper = useRef();
//   const { width } = useContainerDimensions(skillsWrapper);

  return (
    <Fade duration={1000}>
      <div style={{ position: "relative", width: "100%", maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: "1s opacity ease-in-out",
                      transform: `translateX(0)`,
                      opacity: 1
                    }
                  : {}
              }
            >
            <h2>Skills</h2>

<h3>Languages</h3>
<p>JavaScript</p>
<p>Java(Basics)</p>

<h3>Frameworks</h3>
<p>React.js</p>
<p>Spring Boot(Basics)</p>

<h3>Databases</h3>
<p>MySQL (Basics)</p>

            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  );
};

export default Skills;
