import React from "react";
import "./Education.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";


const  Education= () => {
  return (
    <Section title="Education">
    <div className="education-item">
      <h3 style={{color:"#FDE5D4"}}>B.E (CSE)</h3>
      <p style={{ color: '#D4EBF8' }}><strong>University:</strong> Anna University</p>
      <p style={{ color: '#F1F0E8' }}><strong>Institution:</strong> Park College of Engineering and Technology</p>
      <p style={{ color: '#D6EFD8' }}><strong>Percentage (CGPA):</strong> 7.2</p>
      <p style={{ color: '#EEF5FF' }}><strong>Year of Passing:</strong> 2021</p>
    </div>
  
   
  </Section>
  
  
  );
};

export default Education;
