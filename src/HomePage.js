import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "./Navbar";
import me from './me.JPG';
import "./HomePage.css";

const HomePage = () => {

    return (
        <>
        <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div className="home-page-text">
          <p>
            Hi, this is<span> Scott Syme</span>.
          </p>
          <span>Welcome to my site.</span>
        </div>
        <div className="avatar-container">
         <img src={me} alt="Me" className="avatar"/>
        </div>

      </div>
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

export default HomePage;