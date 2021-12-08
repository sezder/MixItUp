// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
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
        <NavLink to="/signup" className="text_large">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="text_large" exact to="/home">
            HOME
          </NavLink>
         
        </li>
        <li>
          <NavLink to="/cocktails" className="text_large">EXPLORE</NavLink>
        </li>
        <li>
          <NavLink to="/cocktails/new" className="text_large">SUBMIT COCKTAIL</NavLink>
        </li>
        <li>
        {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
