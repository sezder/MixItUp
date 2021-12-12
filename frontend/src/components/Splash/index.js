import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Splash.css";
import "../../index.css";
import ProfileButton from "../Navigation/ProfileButton";
import DemoUser from "../DemoUser";
import LoginFormModal from "../LoginFormModal";
import BackgroundGif from "./looping_cocktail.mp4";
import Logo from "../Logo"

const Splash = () => {
  const sessionUser = useSelector((state) => state.session.user);



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
