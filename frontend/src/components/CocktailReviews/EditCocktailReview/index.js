import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { destroyReview, getReviews, updateReview } from "../../../store/review";

function EditCocktailReview({ setShowEditReview, review, user, cocktailId }) {
  const dispatch = useDispatch();
  let [reviewRating, setReviewRating] = useState(review?.reviewRating || 0);
  const [reviewBody, setReviewBody] = useState(review?.reviewBody || "");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (reviewRating > 5 || reviewRating <= 0)
      errors.push("Rate between 1 and 5 stars.");
    if (!reviewBody.length) errors.push("Provide a comment with your review.");
    setErrors(errors);
  }, [reviewRating, reviewBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    reviewRating = Number(reviewRating);
    const editedReview = {
      reviewId: review?.id,
      reviewRating,
      reviewBody,
      cocktailId,
      userId: user?.id,
    };

    dispatch(updateReview(editedReview)).then(() => {
      dispatch(getReviews(cocktailId));
    });

    setShowEditReview(null);
  };

  const handleDelete = () => {
    const deleteReviewPayload = { userId: user?.id, reviewId: review?.id, cocktailId };
    dispatch(destroyReview(deleteReviewPayload));
    setShowEditReview(null);
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
            {errors.length > 0 &&
              errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        )}

        {/* REVIEW RATING */}
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={reviewRating}
          onStarClick={onStarClick}
          starColor="#465d57"
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
        <div>
          <button
            type="submit"
            disabled={errors.length > 0}
            className="add_btn"
          >
            <i className="fas fa-check"></i>
          </button>

          <button onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCocktailReview;
