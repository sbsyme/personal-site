import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>ski</span>lls
        </div>
        <div id="tags">
          <ul>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">html</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;