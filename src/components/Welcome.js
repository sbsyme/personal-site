import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "./Navbar";
import me from '../static/me.JPG';
import "../stylesheets/Home.css";

const Welcome = () => {

    return (
        <>
            <div className="home-page">
                <div className="home-page-text">
                    <p>
                        Welcome to <span>Scott Syme's</span> website.
                    </p>
                </div>
                <div className="avatar-container">
                    <img src={me} alt="Me" className="avatar" />
                </div>

            </div>
        </>
    );
}

export default Welcome;