import React, { useState } from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className={`greeting`}>
          <Fade bottom distance="40px">
            <img className="profile" />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Dinesh Kumar R</span>.{" "}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer...",
                ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: "<",
                  delay: 100
                }}
              />
            </h1>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: "fill", cursor: "pointer" }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
