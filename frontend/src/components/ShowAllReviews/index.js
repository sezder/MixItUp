import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { destroyReview } from "../../store/review";
import "./ShowAllReviews.css";
import "../../index.css";

const ShowAllReviews = ({
  id: reviewId,
  reviewRating,
  reviewBody,
  cocktailId,
  userId,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const currUser = useSelector((state) => state.session.user);
  // const currUserId = currUser?.id;

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   const destroyReviewPayload = { userId, cocktailId, reviewId };
  //   let destroyedReview = dispatch(destroyReview(destroyReviewPayload));
  //   if (destroyedReview) {
  //     history.push(`/cocktails/${cocktailId}`);
  //   }
  // };

  return (
    <div className="show_reviews_div">
      <p>Rating: {reviewRating}</p>
      <p>{reviewBody}</p>
    </div>
  );
};

export default ShowAllReviews;
