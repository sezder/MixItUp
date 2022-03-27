import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import * as sessionActions from "../../store/session";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../Auth/LoginFormModal";
import DemoUser from "../Auth/DemoUser";
import Logo from "../Logo/index";
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  // controls the burger menu animation
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

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
            <p id="username">{sessionUser?.username}</p>
          </span>
          <li>
            <button onClick={logout} className="nav_btn">
              Log Out
            </button>
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
          <div id="about_div">
            <li onClick={() => window.open("https://github.com/sezder")}>
              <i className="fab fa-github fa-sm"></i>
            </li>
          </div>
          <div id="about_div">
            <li
              onClick={() =>
                window.open("https://www.linkedin.com/in/shannon-e-zander/")
              }
            >
              <i className="fab fa-linkedin-in fa-sm"></i>
            </li>
          </div>
          <button className="menu nav_btn" onClick={openMenu}>
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
          <motion.li
            transition={{ delay: 0.05 }}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <NavLink to="/cocktails" className="text_large">
              RECIPES
            </NavLink>
          </motion.li>

          <motion.li
            transition={{ delay: 0.1 }}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <NavLink to="/bars" className="text_large">
              BARS
            </NavLink>
          </motion.li>

          <motion.li
            transition={{ delay: 0.2 }}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <NavLink to="/about" className="text_large">
              ABOUT
            </NavLink>
          </motion.li>

          {sessionUser ? (
            <motion.li
              className="menu_user_div"
              transition={{ delay: 0.3 }}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <motion.div
                id="icon_name_container"
                transition={{ delay: 0.4 }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <div className="profile_circle">
                  <p>{sessionUser?.username.slice(0, 1)}</p>
                </div>
                <p>{sessionUser?.username}</p>
              </motion.div>
              <motion.li
                transition={{ delay: 0.5 }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <button onClick={logout} className="nav_btn">
                  Log Out
                </button>
              </motion.li>
            </motion.li>
          ) : (
            <>
              <motion.li
                transition={{ delay: 0.3 }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <LoginFormModal />
              </motion.li>
              <motion.li
                transition={{ delay: 0.4 }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <DemoUser />
              </motion.li>
              <motion.li
                transition={{ delay: 0.5 }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <NavLink to="/signup" className="text_large">
                  Sign Up
                </NavLink>
              </motion.li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
