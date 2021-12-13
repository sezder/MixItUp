import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./CocktailDetail.css";
import "../../index.css";

const CocktailDetail = ({ id, name, description, imageUrl, recipeUrl }) => {
  const dispatch = useDispatch();
  // const history = useHistory()

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktails = Object.values(cocktailsObj);

  return (
    <div className="card">
      <a href={`/cocktails/${id}`} id="card_link">
        <div className="card_img_container">
          <img src={imageUrl} className="card_img_container"></img>
        </div>
        <div className="card_content">
          <h2 className="card_title text_large">{name}</h2>
          <p className="card_info text_small">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default CocktailDetail;
