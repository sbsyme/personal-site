import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../stylesheets/Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Engineer I</p>
          <p>American Express</p>
          <p>
            <span>May 2021 - Present</span>
            <a href="/">
              <LocationOnIcon />
              London, UK / Remote
            </a>
          </p>
        </div>
        <div className="education">
          <p>Technology Graduate Engineer</p>
          <p>American Express</p>
          <p>
            <span>Sep 2019 - May 2021</span>
            <a href="/">
              <LocationOnIcon />
              Burgess Hill, UK
            </a>
          </p>
        </div>
        <div className="education">
          <p>First Foundry Analyst</p>
          <p>American Express</p>
          <p>
            <span>June 2017 - Aug 2017</span>
            <a href="/">
              <LocationOnIcon />
              Burgess Hill, UK
            </a>
          </p>
        </div>
        <div className="education">
          <p>BSci(Hons) Computer Science</p>
          <p>University of St. Andrews</p>
          <p>
            <span>Sept 2015 - May 2019</span>
            <a href="/">
              <LocationOnIcon />
              St. Andrews, UK
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;