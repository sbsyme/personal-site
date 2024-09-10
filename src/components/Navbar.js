import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../stylesheets/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="home" spy={true} smooth={true} duration={500}>
          scottsy.me
        </Link>
      </div>
      <div className="navbar-right-menubar">
      </div>
      <div className="navbar-right-options">
        <Link to="/">
          home
        </Link>
        <Link to="/projects">
          projects
        </Link>
        <Link to="/education">
          education
        </Link>
        <Link to="/about">
          about
        </Link>
      </div>
    </div>
  );
};

export default Navbar;