import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./IndivCocktail.css";
import "../../index.css";

const IndivCocktail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  console.log(cocktailsObj);
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
        </div>
      </div>
      <div className="explore_cocktails_div">
        <p>STILL THIRSTY?</p>
        <p>Check these out</p>
        <p>EXPLORE COMPONENT</p>
      </div>

      <div className="review_container">
        REVIEW COMPONENT
      </div>
    </div>
  );
};

export default IndivCocktail;
