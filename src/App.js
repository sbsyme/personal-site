import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Home from "./components/Home";
import './stylesheets/App.css';

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
        <Home />
      </div>

      {showBackToTopBtn && (
        <button className="btn-back-to-top" onClick={scrollToTop}>
          <span> Back to Top</span>
          <ArrowUpwardIcon />
        </button>
      )
      }
    </>
  );
}
