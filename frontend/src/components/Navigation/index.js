import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import DemoUser from "../DemoUser";
import Logo from "../Logo/index";
import "./Navigation.css";
import * as sessionActions from "../../store/session";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li className="med_session">
          <ProfileButton user={sessionUser} />
        </li>

        <div className="large_session">
          <span>
            <div className="profile_circle">
              <p>{sessionUser?.username.slice(0, 1)}</p>
            </div>
            <p>{sessionUser?.username}</p>
          </span>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <div className="logged_out_session_links">
        <LoginFormModal />
        <DemoUser />
        <NavLink to="/signup" className="text_large">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <nav>
      {/* For tablet and above screen sizes */}
      <ul className="horizontal_nav">
        <Logo />
        <li>
          <NavLink to="/cocktails" className="text_large">
            RECIPES
          </NavLink>
        </li>
        <li>
          <NavLink to="/bars" className="text_large">
            BARS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text_large">
            ABOUT
          </NavLink>
        </li>

        {/* Tablet size session info */}
        {isLoaded && sessionLinks}

        {/* Desktop size session info */}

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
          <button className="menu" onClick={openMenu}>
            {!showMenu ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times fa-lg"></i>
            )}
          </button>
        </div>
      </ul>

      {/* Burger menu */}
      {showMenu && (
        <ul className="menu_dropdown">
          <li>
            <NavLink to="/cocktails" className="text_large">
              RECIPES
            </NavLink>
          </li>
          <li>
            <NavLink to="/bars" className="text_large">
              BARS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text_large">
              ABOUT
            </NavLink>
          </li>

          {sessionUser ? (
            <li className="menu_user_div">
              <div id="icon_name_container">
                <div className="profile_circle">
                  <p>{sessionUser?.username.slice(0, 1)}</p>
                </div>
                <p>{sessionUser?.username}</p>
              </div>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </li>
          ) : (
            <>
              <LoginFormModal />
              <DemoUser />
              <NavLink to="/signup" className="text_large">
                Sign Up
              </NavLink>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
