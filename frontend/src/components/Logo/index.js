import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

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
