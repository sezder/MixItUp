import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCocktails } from "../../store/cocktail";
import { getAllReviews } from "../../store/review"; //F
import "./CocktailList.css";
import CocktailDetail from "../CocktailDetail/index";

const CocktailList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
    dispatch(getAllReviews());
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktails = Object.values(cocktailsObj);

  const reviewFeed = useSelector((state) => state.review);

  return (
    <div className="cocktail_list_div">
      <div className="submit_new_bar">
        <h2>Want to add a new cocktail?</h2>
        <NavLink to="/cocktails/new">
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </NavLink>
      </div>
      <section className="cards">
        {cocktails.map(({ id, name, description, imageUrl, recipeUrl }) => {
          let reviewRatings = [];
          for (let key in reviewFeed) {
            let indivReview = reviewFeed[key];
            if (indivReview.cocktailId === id) {
              reviewRatings.push(indivReview.reviewRating);
            }
          }

          let avgRating;
          if (reviewRatings.length) {
            avgRating = Math.floor(
              reviewRatings.reduce((sum, cv) => {
                return sum + cv;
              }, 0) / reviewRatings.length
            );
          } else avgRating = 0;

          return (
            <CocktailDetail
              key={id}
              id={id}
              name={name}
              description={description}
              imageUrl={imageUrl}
              recipeUrl={recipeUrl}
              avgRating={avgRating}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CocktailList;
