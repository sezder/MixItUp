import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getCocktails } from "../../store/cocktail";
import { getAllReviews } from "../../store/review";
import "./Home.css";
import CocktailList from "../CocktailList";
import ShowAllReviews from "../ShowAllReviews";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const allReviewsObj = useSelector((state) => state.review);
  const allReviews = Object.values(allReviewsObj);

  return (
    <div className="home_cocktails_reviews">
      <div className="home_cocktail_list">
        <CocktailList />
      </div>
      <div className="review_feed_div">
      {/* <h1 className="text_large">See what people are saying</h1> */}
      {allReviews.map(
        ({ id, reviewRating, reviewBody, Cocktail, User }) => {
          return (
            <ShowAllReviews
              key={id}
              id={id}
              reviewRating={reviewRating}
              reviewBody={reviewBody}
              cocktail={Cocktail}
              user={User}
            />
          );
        }
      )}
      </div>
    </div>
  );
};

export default Home;
