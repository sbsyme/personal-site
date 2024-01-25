import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import SkillPage from "./SkillPage";
import EducationPage from "./EducationPage";
import './App.css';

export default function App() {

  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setShowBackToTopBtn(true);
    } else if (scrolled <= 500) {
      setShowBackToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
    <div className="app-section" id="home">
        <HomePage />
      </div>
      <div className="app-section" id="about">
        <AboutPage />
      </div>
      {/* <div className="app-section" id="skills">
        <SkillPage />
      </div> */}
      {/* <div className="app-section" id="projects">
        <ProjectPage />
      </div> */}
      <div className="app-section">
        <EducationPage />
      </div>
      {showBackToTopBtn && (
        <button className="btn-back-to-top" onClick={scrollToTop}>
          <span> Back to Top</span>
          <ArrowUpwardIcon />
        </button>
      )}
      </>
  );
}
