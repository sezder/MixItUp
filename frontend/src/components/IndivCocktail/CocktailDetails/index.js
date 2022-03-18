import React, { useEffect } from "react";
import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import EditCocktailReview from "../../EditCocktailReview";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../store/review";
import "../../IndivBar/BarDetails/BarDetails.css";

const BarDetails = ({ cocktail, userId, cocktailId, numReviews, reviewRestriction }) => {
  const dispatch = useDispatch();
  const [showEditReview, setShowEditReview] = useState(null);

  let reviewsObj = useSelector((state) => state.review);
  let reviews = Object.values(reviewsObj);

  useEffect(() => {
    dispatch(getReviews(cocktailId));
  }, [dispatch, cocktailId]);
  

  return (
    <div className="bar_details">
      <br/>
      <p id="bar_descrip">{cocktail?.description}</p>

      {numReviews > 0 ? (
        <span>
          <h2>{`See what people have to say about ${cocktail?.name}`} </h2>
          {reviews?.length > 0 &&
            reviews.map((review) => {
              const owned = review?.userId === userId;
              const user = review.User;
              return owned && showEditReview === review.id ? (
                <EditCocktailReview
                  cocktailId={cocktailId}
                  setShowEditReview={setShowEditReview}
                  key={`editReview:${review?.id}`}
                  review={review}
                  user={user}
                />
              ) : (
                <div key={`review:${review.id}`} className="checkin_div">
                  <div id="user_info">
                    <div>
                      <div className="profile_circle">
                        <p>{user && user.username.slice(0, 1)}</p>
                      </div>
                      <p>{user && user.username}</p>
                    </div>
                    <div>
                      <StarRatingComponent
                        name="uneditableRating"
                        starCount={5}
                        value={review?.reviewRating}
                        starColor="#465d57"
                        emptyStarColor="#d1c1ae"
                        editable={false}
                      />

                      {owned && (
                        <i
                          className="fas fa-edit"
                          onClick={() => {
                            setShowEditReview(review?.id);
                          }}
                        ></i>
                      )}
                    </div>
                  </div>
                  <p id="checkin_content">{review?.reviewBody}</p>
                </div>
              );
            })}
        </span>
      ) : (
        <span>
          <h2>Be the first to leave a review.</h2>
          {reviewRestriction}
        </span>
      )}
    </div>
  );
};

export default BarDetails;
