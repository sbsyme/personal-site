import React from "react";
import "../stylesheets/AboutPage.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          <span>Software Engineer</span> currently working at <span>American Express</span>.
        </div>
        <div className="about-right">
          <p>
            I have a BSci(Hons) in Computer Science from the <span>University of St. Andrews</span>.{" "}
          </p>
          <p>
            I am primarily a Java engineer and have <span>5 years of industry experience</span> as well as
            an <span>Oracle Certified Professional: Java SE 11 Developer</span> certification. I have good experience with
            distributed system design and work well within the practices of CI/CD.
          </p>
          I am constantly looking to expand my skillset and am very interested in getting more familiar with the full stack of
          software development.
          <p>

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;