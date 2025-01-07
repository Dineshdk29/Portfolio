import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>I'm Dinesh Kumar R</p>
            <p>I'm a FullStack Developer</p>
            <p>I'm working with React Js</p>
            <div className="typewriter">
              <p className="typewriter-start">I enjoy</p>
              <Typewriter
                options={{
                  strings: [
                    "Creating responsive websites",
                    "Implementing complex logic",
                    "Exploring new ideas",
                    "Collaborating with teams"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
              <p>.</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  );
};

export default About;
