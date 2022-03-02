import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { getCocktails } from "../../store/cocktail";
import CocktailDetails from "./CocktailDetails";
import NewCocktailReview from "../NewCocktailReview";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm.js";
import { destroyCocktail } from "../../store/cocktail";

const IndivCocktail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [cocktailComponent, setCocktailComponent] = useState("info");
  let { id: cocktailId } = useParams();
  cocktailId = Number(cocktailId);

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktail = cocktailsObj[cocktailId];

  const reviewsObj = useSelector((state) => state.review);
  const reviews = Object.values(reviewsObj);
  const numReviews = reviews.length;

  const findAvg = () => {
    let sum = 0;
    reviews.forEach((review) => {
      sum += review.reviewRating;
    });
    return Math.floor(sum / reviews.length);
  };

  let reviewRestriction = user ? (
    <NewCocktailReview
      setCocktailComponent={setCocktailComponent}
      userId={userId}
      cocktailId={cocktailId}
    />
  ) : (
    <>
      <button id="review_restric" onClick={() => setShowModal(true)}>
        Log in to leave a review.
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );

  const backgroundImageStyling = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100vw",
  };

  if (cocktail?.imageUrl !== undefined) {
    backgroundImageStyling["backgroundImage"] = `url(${cocktail?.imageUrl})`;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const cocktailPayload = { userId, cocktailId: cocktail?.id };
    const cocktailId = dispatch(destroyCocktail(cocktailPayload));
    if (cocktailId) {
      history.push("/cocktails");
    }
  };

  return (
    <div className="indiv_div">
      {/* Banner with cocktail image */}
      <div
        className="indiv_banner_container"
        style={backgroundImageStyling}
      ></div>
      <h1>{cocktail?.name}</h1>

      <main>
        {numReviews > 0 ? (
          <StarRatingComponent
            name="uneditableRatingAvg"
            starCount={5}
            value={findAvg()}
            starColor="#d1c1ae"
            emptyStarColor="#090C0B"
            editable={false}
            className="indivUneditableRating"
          />
        ) : (
          <br></br>
        )}

        <ul>
          <div>
            <p onClick={() => setCocktailComponent("info")}>
              <li>Info</li>
            </p>

            <span onClick={() => window.open(cocktail?.recipeUrl)}>
              <li>Recipe</li>
            </span>

            <p onClick={() => setCocktailComponent("review")}>
              <li>Review</li>
            </p>

            {/* If the current user is the creator of the bar, show edit/delete */}
            {cocktail?.userId === userId && (
              <>
                <NavLink to={`/cocktails/${cocktail?.id}/edit`}>
                  <i className="far fa-edit"></i>
                </NavLink>

                <i className="far fa-trash-alt" onClick={handleDelete}></i>
              </>
            )}
          </div>
        </ul>

        {cocktailComponent === "info" ? (
          <CocktailDetails
            cocktail={cocktail}
            user={user}
            userId={userId}
            cocktailId={cocktailId}
            numReviews={numReviews}
            reviewRestriction={reviewRestriction}
          />
        ) : (
          reviewRestriction
        )}
      </main>
    </div>
  );
};

export default IndivCocktail;
