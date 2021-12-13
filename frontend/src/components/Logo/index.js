// frontend/src/components/Navigation/index.js
import React from "react";
import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/home" id="logo_a">
      <ul className="logo_container">
        <li id="logo">MIX</li>
        <div className="logo_dot"></div>
        <li id="logo">IT</li>
        <div className="logo_dot"></div>
        <li id="logo">UP</li>
      </ul>
    </NavLink>
  );
}

export default Logo;
