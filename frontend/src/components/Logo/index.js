// frontend/src/components/Navigation/index.js
import React from "react";
import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" id="logo_a">
      <ul className="logo_container">
        <span id="logo">MIX</span>
        <div className="logo_dot"></div>
        <span id="logo">IT</span>
        <div className="logo_dot"></div>
        <span id="logo">UP</span>
      </ul>
    </NavLink>
  );
}

export default Logo;
