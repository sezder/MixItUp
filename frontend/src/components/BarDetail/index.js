import React from "react";
import { NavLink } from "react-router-dom";
import "./BarDetail.css";

const BarDetail = ({
  id,
  name,
  description,
  location,
  imageUrl,
  menuUrl,
  reservationUrl,
  setBarComponent,
}) => {
  const backgroundImageStyling = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="bar_container">
      <NavLink to={`/bars/${id}`} onClick={() => setBarComponent("info")}>
        <div className="bar_img_container" style={backgroundImageStyling}></div>
      </NavLink>
      <div className="bar_content">
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{description}</p>
        <div className="bar_card_button_container">
          <NavLink to={`/bars/${id}`} onClick={() => setBarComponent("info")}>
            <button>
              <i className="fas fa-info fa-lg"></i>
            </button>
          </NavLink>

          <span onClick={() => window.open(menuUrl)}>
            <button>
              <i className="fas fa-utensils fa-lg"></i>
            </button>
          </span>

          <span onClick={() => window.open(reservationUrl)}>
            <button>
              <i className="fas fa-calendar-day fa-lg"></i>
            </button>
          </span>
          <NavLink
            to={`/bars/${id}`}
            onClick={() => setBarComponent("checkin")}
          >
            <button>
              <i className="fas fa-check fa-lg"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BarDetail;
