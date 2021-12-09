import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./IndivCocktail.css";
import "../../index.css";
import NewCocktailReview from "../NewCocktailReview";

const IndivCocktail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const indivCocktail = cocktailsObj[id];

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
          {}
        </div>
      </div>
      <div className="explore_cocktails_div">
        <p>STILL THIRSTY?</p>
        <p>Check these out</p>
        <p>EXPLORE COMPONENT</p>
      </div>

      <div className="review_container">
        <NewCocktailReview/>
        </div>
    </div>
  );
};

export default IndivCocktail;
