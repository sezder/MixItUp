// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import DemoUser from "../DemoUser";
import Logo from "../Logo/index";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <DemoUser />
        <NavLink to="/signup" className="text_large">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <Logo />
        </li>
        <li id="home">
          <NavLink className="text_large" exact to="/home">
            HOME
          </NavLink>
        </li>
        <li id="explore_nav">
          <NavLink to="/cocktails" className="text_large">
            EXPLORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cocktails/new"
            className="text_large"
            id="submit_cocktail"
          >
            SUBMIT COCKTAIL
          </NavLink>
        </li>

        <li id="nav_plus_li">
          <NavLink to="/cocktails/new">
            <div id="nav_plus_div">
              <i className="fas fa-plus" id="nav_plus"></i>
            </div>
          </NavLink>
        </li>

        <li>{isLoaded && sessionLinks}</li>
        <div id="about_me_container">
          <div>
            <a href="https://github.com/sezder">
              <i className="fab fa-github fa-sm"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/shannon-e-zander/">
              <i className="fab fa-linkedin-in fa-sm"></i>
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
