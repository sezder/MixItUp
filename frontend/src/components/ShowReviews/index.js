import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./ShowReviews.css";
import "../../index.css";

const ShowReviews = ({id,
  reviewRating,
  reviewBody,
  userId,
  user,
  cocktailId,
}) => {
  const currUser = useSelector((state) => state.session.user);
  const currUserId = currUser?.id;

  return (
    <div className="show_reviews_div">
      <div className="rating_user_div">
        <div className="profile_circle">
          <p>{user?.username.slice(0, 1)}</p>
        </div>
        <p id="username_review_card">{user?.username}</p>
        <p>Rating: {reviewRating}</p>
      </div>
      <p>{reviewBody}</p>
      {userId === currUserId && (
        <div className="edit_delete_review_div">
          <NavLink to={`/cocktails/${cocktailId}/reviews/${id}/edit`}>
            <button><i className="fas fa-edit"></i></button>
          </NavLink>
          <NavLink to={`/cocktails/${cocktailId}/reviews/delete`}>
            <button><i className="far fa-trash-alt"></i></button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ShowReviews;
