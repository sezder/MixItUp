import React from "react";
import {  NavLink } from "react-router-dom";
import "./ShowAllReviews.css";
import "../../index.css";

const ShowAllReviews = ({ reviewRating, reviewBody, cocktail, user }) => {
  const backgroundImageStyling = {
    backgroundImage: `url(${cocktail?.imageUrl})`,
  };

  return (
    <NavLink to={`/cocktails/${cocktail?.id}`}>
      <div className="show_reviews_div" id="home_show_reviews_div">
        <div
          className="show_reviews_img_container"
          style={backgroundImageStyling}
        ></div>
        <div className="home_reviews_content">
          <p id="home_username">{user?.username}</p>
          <p id="home_rating">Rating: {reviewRating}</p>
          <p>{reviewBody}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ShowAllReviews;
