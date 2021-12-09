import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./ShowReviews.css";
import "../../index.css";

const ShowReviews = ({ reviewRating, reviewBody, userId, user }) => {
  const currUser = useSelector((state) => state.session.user);
  const currUserId = currUser.id;

  console.log(user, "user obj");
  return (
    <div className="show_reviews_div">
      <div className="rating_user_div">
        <div className="profile_circle">
          <p>{user.username.slice(0, 1)}</p>
        </div>
        <p id="username_review_card">{user.username}</p>
        <p>Rating: {reviewRating}</p>
      </div>
      <p>{reviewBody}</p>
    </div>
  );
};

export default ShowReviews;
