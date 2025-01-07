import React from "react";
import "./projects.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";


const Projects = () => {
  return (
    <Section title="Projects">
    <div className="projects-content">
      <div className="project-item">
        <h3 style={{color:"#D5FFD0"}}>Shopfloor Digitalization Application</h3>
        <p>A digital solution to reduce manual entries during production and machine maintenance, converting SOPs into digital forms for efficiency.</p>
      </div>
  
      <div className="project-item">
        <h3 style={{color:"#D5FFD0"}}>IntegraHub</h3>
        <p>Streamlines application integration using adapters like REST, Oracle, and MySQL, facilitating efficient and standardized data exchange.</p>
      </div>
  
      <div className="project-item">
        <h3 style={{color:"#D5FFD0"}}>Dealer Portal</h3>
        <p>A web portal that allows customers to place orders, track status, update payments, and automate accounts receivable processes.</p>
      </div>
  
      <div className="project-item">
        <h3 style={{color:"#D5FFD0"}}>Eprocurement</h3>
        <p>An integrated system to streamline Purchase Requisition and Purchase Order processes, accessible on both mobile and desktop platforms.</p>
      </div>
  
      <div className="project-item">
        <h3 style={{color:"#D5FFD0"}}>CRM – Customer Relationship Management</h3>
        <p>A comprehensive solution to enhance customer interactions, manage data, improve communication, and optimize engagement throughout the lifecycle.</p>
      </div>
    </div>
  </Section>
  
  );
};

export default Projects;
