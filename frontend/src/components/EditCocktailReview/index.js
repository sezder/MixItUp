import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateReview,
  getReviews,
} from "../../store/review";
import "./EditCocktailReview.css";



// {reviewRating, reviewBody, cocktailId, userId};

function EditCocktailReview() {
  const history = useHistory();
  const dispatch = useDispatch();

  let { cocktailId, reviewId } = useParams();
  reviewId = Number(reviewId);
  cocktailId = Number(cocktailId);

  useEffect(() => {
    dispatch(getReviews(cocktailId));
  }, [dispatch]);

  const review = useSelector((state) => state.review[reviewId]);
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  let [reviewRating, setReviewRating] = useState(review?.reviewRating || "");
  const [reviewBody, setReviewBody] = useState(review?.reviewBody || "");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (reviewRating > 5 || reviewRating <= 0)
      errors.push("Rate between 1 and 5 stars.");
    if (!reviewBody.length) errors.push("Provide a comment with your review.");
    setErrors(errors);
  }, [reviewRating, reviewBody]);

  if (user?.id!== review?.userId) return <Redirect to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    reviewRating = Number(reviewRating);
    const editedReview = {
      reviewId,
      reviewRating,
      reviewBody,
      cocktailId,
      userId,
    };

    console.log('editedReview payload', editedReview)

    const response = dispatch(updateReview(editedReview));
    if (response) {
      history.push(`/cocktails/${cocktailId}`);
    }
  };

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   const destroyReviewPayload = { userId, cocktailId };
  //   // console.log(destroyCocktailPayload);
  //   let destroyedReview = dispatch(destroyreview(destroyReviewPayload));
  //   if (destroyedReview) {
  //     history.push(`/cocktails/${cocktailId}`)
  //   }
  // };

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
          Update
        </button>
        {/* <button onClick={handleDelete} className="add_review_button">
            Delete
          </button> */}
      </form>
    </div>
  );
}

export default EditCocktailReview;
