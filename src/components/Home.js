import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import EducationPage from "./Education";
import AboutPage from "./About";
import me from '../static/me.JPG';
import "../stylesheets/HomePage.css";
import ProjectPage from "./Projects";

const Home = () => {

  return (
    <>
      <div className="home-page-container">
        <div className="home-page-header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <div className="home-page-footer">
          <a
            href="https://github.com/sbsyme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/scott-brian-syme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;