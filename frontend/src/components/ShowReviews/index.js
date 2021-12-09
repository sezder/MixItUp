import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./ShowReviews.css";
import "../../index.css";

const ShowReviews = ({ reviewRating, reviewBody, userId }) => {
  //look up user by id. Get username and display. Display first name in circle as icon
  // lay comments out on a grid, taking up as much space as is needed for the content?
  return (
    <div className="show_reviews_div">
      <div className="rating_user_div">
      <div className="profile_circle">
      <p>{userId}</p>
      </div>
      <p>USERNAME</p>
      <p>Rating: {reviewRating}</p>
      </div>
      <p>{reviewBody}</p>
    </div>
  );
};

export default ShowReviews;
