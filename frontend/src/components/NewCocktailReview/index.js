import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import "./NewCocktailReview.css";
// import { getReviews } from "../../store/review";

// {reviewRating, reviewBody, cocktailId, userId};

function NewCocktailReview() {
  const history = useHistory();
  const paramsObj = useParams();
  const cocktailId = Number(paramsObj?.id);
  const dispatch = useDispatch();

  let [reviewRating, setReviewRating] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  useEffect(() => {
    const errors = [];
    if (reviewRating > 5 || reviewRating <= 0)
      errors.push("Rate between 1 and 5 stars.");
    if (!reviewBody.length) errors.push("Provide a comment with your review.");
    setErrors(errors);
  }, [reviewRating, reviewBody]);

  const resetFields = () => {
    setReviewRating("");
    setReviewBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    reviewRating = Number(reviewRating);
    const newReview = {
      reviewRating,
      reviewBody,
      cocktailId,
      userId,
    };

    dispatch(createReview(newReview));
    resetFields();

  };

  return (
    <div className="add_review_div">
      <h2 className="text_large">Leave a Review</h2>

      <form onSubmit={handleSubmit} className="add_review_form">
        {/* ERRORS */}
        <ul className="errors">
          {errors.length > 0 &&
            errors.map((error) => <li key={error}>{error}</li>)}
        </ul>

        {/* REVIEW RATING */}
        <input
          type="number"
          name="reviewRating"
          value={reviewRating}
          onChange={(e) => setReviewRating(e.target.value)}
        />

        {/* REVIEW BODY */}
        <textarea
          placeholder="Leave a comment..."
          type="text"
          name="reviewBody"
          value={reviewBody}
          onChange={(e) => setReviewBody(e.target.value)}
        />

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={errors.length > 0}
          className="add_review_button"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewCocktailReview;
