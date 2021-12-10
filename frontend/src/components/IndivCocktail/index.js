import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  useEffect(() => {
    dispatch(getCocktails());
    dispatch(getReviews(id));
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const indivCocktail = cocktailsObj[id];

  const reviewsObj = useSelector((state) => state.review);
  // console.log(reviewsObj, 'reviews Obj')
  // const userObj = reviewsObj?.User;
  // console.log(userObj, 'userobj')
  const reviews = Object.values(reviewsObj);

  let reviewRestriction;
  if (userId) {
    reviewRestriction = <NewCocktailReview />;
  } else {
    reviewRestriction = (
      <> 
      <button onClick={() => setShowModal(true)}>Log in to leave a review.</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
    );
  }

  return (
    <div className="indiv_container">
      {/* Content for this cocktail */}
      <div className="curr_cocktail_div">
        {/* Image */}
        <div className="indiv_img_container">
          <img src={indivCocktail?.imageUrl}></img>
        </div>

        <div className="curr_cocktail_details">
          <h2>{indivCocktail?.name}</h2>
          <p>{indivCocktail?.description}</p>
          <a href={indivCocktail?.recipeUrl}>
            <button>Try It Out</button>
          </a>
          {/* If userid matches cocktail.userId, render two buttons */}
          {userId === indivCocktail?.userId && (
            <NavLink to={`/cocktails/${id}/edit`}>
              <button>Edit</button>
            </NavLink>
          )}
        </div>
      </div>
      <div className="explore_cocktails_div">
        <p>STILL THIRSTY?</p>
        <p>Check these out</p>
        <p>EXPLORE COMPONENT</p>
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
