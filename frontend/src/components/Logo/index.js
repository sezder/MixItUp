// frontend/src/components/Navigation/index.js
import React from "react";
import "./Logo.css";

function Logo() {
  return (
      <ul className="logo_container">
        <li id="logo">MIX</li>
        <div className="logo_dot"></div>
        <li id="logo">IT</li>
        <div className="logo_dot"></div>
        <li id="logo">UP</li>
      </ul>
  );
}

export default Logo;
