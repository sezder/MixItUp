import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { getCocktails } from "../../store/cocktail";
import { getReviews } from "../../store/review";
import "./IndivCocktail.css";
import "../../index.css";
import NewCocktailReview from "../NewCocktailReview";
import ShowReviews from "../ShowReviews";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm.js";

const IndivCocktail = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCocktails());
    dispatch(getReviews(id));
  }, [dispatch, id]);

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  const cocktailsObj = useSelector((state) => state.cocktail);
  const indivCocktail = cocktailsObj[id];

  const reviewsObj = useSelector((state) => state.review);
  const reviews = Object.values(reviewsObj);

  const findAvg = () => {
    let sum = 0;
    reviews.forEach((review) => {
      sum += review.reviewRating;
    });
    return Math.floor(sum / reviews.length);
  };

  let reviewRestriction;
  if (userId) {
    reviewRestriction = <NewCocktailReview />;
  } else {
    reviewRestriction = (
      <>
        <button onClick={() => setShowModal(true)}>
          Log in to leave a review.
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }

  return (
    <div>
      <div className="curr_cocktail_div">
        {/* Image */}
        <div className="indiv_img_container">
          <img src={indivCocktail?.imageUrl} alt={indivCocktail?.name}></img>
        </div>

        <div className="curr_cocktail_details">
          <h2>{indivCocktail?.name}</h2>
          <StarRatingComponent
            name="uneditableRatingAvg"
            starCount={5}
            value={findAvg()}
            starColor="#d1c1ae"
            emptyStarColor="#090C0B"
            editable={false}
          />
          <p>{indivCocktail?.description}</p>
          <a href={indivCocktail?.recipeUrl}>
            <button>Try It Out</button>
          </a>
          {userId === indivCocktail?.userId && (
            <NavLink to={`/cocktails/${id}/edit`}>
              <button>Edit</button>
            </NavLink>
          )}
        </div>
      </div>

      <div className="review_container">{reviewRestriction}</div>

      <div className="reviews_container">
        {reviews.map(({ id, reviewRating, reviewBody, userId, User }) => {
          return (
            <ShowReviews
              key={id}
              id={id}
              reviewRating={reviewRating}
              reviewBody={reviewBody}
              userId={userId}
              user={User}
              cocktailId={indivCocktail?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndivCocktail;
