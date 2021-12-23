import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import { getAllReviews } from "../../store/reviewFeed"; //F
import "./CocktailList.css";
import CocktailDetail from "../CocktailDetail/index";

const CocktailList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
    dispatch(getAllReviews()); //F
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktails = Object.values(cocktailsObj);

  //F
  const reviewFeed = useSelector((state) => state.reviewFeed);

  return (
    <div className="cocktail_list_div">
      <section className="cards">
        {cocktails.map(({ id, name, description, imageUrl, recipeUrl }) => {
          // PROBLEM: The THUNK only fetches 15 most recent. Need a THUNK/API call that'll get legit every single review
          let reviewRatings = [];
          for (let key in reviewFeed) {
            let indivReview = reviewFeed[key];
            if (indivReview.cocktailId == id) {
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
