import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { createReview } from "../../store/review";
import "./NewCocktailReview.css";

function NewCocktailReview({setCocktailComponent, userId, cocktailId}) {
  const dispatch = useDispatch();

  let [reviewRating, setReviewRating] = useState(0);
  const [reviewBody, setReviewBody] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (reviewRating > 5 || reviewRating <= 0)
      errors.push("Rate between 1 and 5 stars.");
    if (!reviewBody.length) errors.push("Provide a comment with your review.");
    setErrors(errors);
  }, [reviewRating, reviewBody]);

  const resetFields = () => {
    setReviewRating(0);
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
    setCocktailComponent("info")
  };

  const onStarClick = (nextValue, prevValue, name) => {
    return setReviewRating(nextValue);
  };

  return (
    <div className="checkin_div">
      <form onSubmit={handleSubmit} className="checkin_form">
        {/* ERRORS */}
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {/* REVIEW RATING */}
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={reviewRating}
          onStarClick={onStarClick}
          starColor="#232E2B"
          emptyStarColor="#d1c1ae"
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
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default NewCocktailReview;
