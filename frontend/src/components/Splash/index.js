import React from "react";
import "./Splash.css";
import "../../index.css";
import BackgroundGif from "./looping_cocktail.mp4";
import Logo from "../Logo"

const Splash = () => {
  return (
    <div className="splash_container">
        <video muted autoplay="autoplay" loop>
          <source src={BackgroundGif} type="video/mp4" />
        </video>

        <a href="https://vine.co/v/5JEQYtUjtgI" id="credit_link">
          <div id="gif_credit">
            <p>GIF by The Videobook</p>
          </div>
        </a>
      <div className="splash_nav_container">
        <div className="splash_nav">
          <Logo />
          <p className="text_large">Discover your new favorite drink.</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
