import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import ExperienceCard from "../experiencecard/ExperienceCard";
import experienceData from "../../data/experience.json";

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="experience-content">
       <h3>
      FocusR Consultancy and Technologies (P) Ltd, Chennai</h3>
      <h4>
      Full Stack Developer
     
      </h4>
      <h5>
      March 2022– Present
      </h5>
      </div>
    </Section>
  );
};

export default Experience;
