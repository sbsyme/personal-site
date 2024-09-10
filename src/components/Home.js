import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Education from "./Education";
import AboutPage from "./About";
import "../stylesheets/Home.css";
import Projects from "./Projects";

const Home = () => {

  return (
    <>
      <div className="home-page-container">
        <div className="home-page-header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
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