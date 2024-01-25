import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

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
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>
          </div>
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
      </div>
    </div>
  );
};

export default Navbar;