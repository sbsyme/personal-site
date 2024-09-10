import React from "react";
import "./ProjectPage.css";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>E-commerce</p>
          <p>Spotify Stats</p>
          <p>
            <a href="https://www.codinn.dev/article/ecommerce-website-in-reactjs">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;