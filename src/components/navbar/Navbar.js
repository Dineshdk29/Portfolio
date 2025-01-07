import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="experience" spy={true} smooth={true} duration={500}>
            EXPERIENCE
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="education" spy={true} smooth={true} duration={500}>
            EDUCATION
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            PROJECTS
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
