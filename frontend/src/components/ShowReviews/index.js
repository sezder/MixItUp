import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { destroyReview } from "../../store/review";
import "./ShowReviews.css";
import "../../index.css";

const ShowReviews = ({
  id: reviewId,
  reviewRating,
  reviewBody,
  userId,
  user,
  cocktailId,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currUser = useSelector((state) => state.session.user);
  const currUserId = currUser?.id;

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyReviewPayload = { userId, cocktailId, reviewId };
    let destroyedReview = dispatch(destroyReview(destroyReviewPayload));
    if (destroyedReview) {
      history.push(`/cocktails/${cocktailId}`);
    }
  };

  return (
    <div className="show_reviews_div">
      <div className="rating_user_div">
        {/* TROUBLESHOOT LATER */}
        {/* <div className="profile_circle">
          <p>{user?.username.slice(0, 1)}</p>
        </div> */}
        {/* <p id="username_review_card">{user?.username}</p> */}
        <p>Rating: {reviewRating}</p>
      </div>
      <p>{reviewBody}</p>
      {userId === currUserId && (
        <div className="edit_delete_review_div">
          <NavLink to={`/cocktails/${cocktailId}/reviews/${reviewId}/edit`}>
            <button>
              <i className="fas fa-edit"></i>
            </button>
          </NavLink>
          <button onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowReviews;
