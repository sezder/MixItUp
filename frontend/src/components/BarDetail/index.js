import React from "react";
// import { useDispatch, useSelector } from "react-redux";
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
  mapsUrl,
  userId,
}) => {
  const backgroundImageStyling = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="bar_container">
      <NavLink to={`/bars/${id}`}>
        <div className="bar_img_container" style={backgroundImageStyling}></div>
      </NavLink>
      <div className="bar_content">
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{description}</p>
        <div className="bar_card_button_container">
          <NavLink to={`/bars/${id}`}>
            <button>
              <i class="fas fa-info fa-lg"></i>
            </button>
          </NavLink>
          <a href={menuUrl}>
            <button>
              <i class="fas fa-utensils fa-lg"></i>
            </button>
          </a>
          <a href={mapsUrl}>
            <button>
              <i className="fas fa-map-marked fa-lg"></i>
            </button>
          </a>
          <a href={reservationUrl}>
            <button>
              <i className="fas fa-calendar-day fa-lg"></i>
            </button>
          </a>
          <NavLink to={`/bars/${id}/checkin`}>
            <button>
              <i class="fas fa-check fa-lg"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BarDetail;
