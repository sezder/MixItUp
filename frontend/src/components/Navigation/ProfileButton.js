import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const openMenu = () => {
    if (showUserMenu) return;
    setShowUserMenu(true);
  };
  
  useEffect(() => {
    if (!showUserMenu) return;

    const closeMenu = () => {
      setShowUserMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showUserMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} id="profile_button">
        <i className="fas fa-user-circle fa-lg" />
      </button>
      {showUserMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout} className="nav_btn">Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
