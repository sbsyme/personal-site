import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
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
            <span>May'21 - Present</span>
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
            <span>Sep'19 - May'21</span>
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
            <span>Sept'15 - May'19</span>
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

export default EducationPage;