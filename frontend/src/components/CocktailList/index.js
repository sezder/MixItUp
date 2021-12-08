import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./CocktailList.css";
import CocktailDetail from "../CocktailDetail/index";

const CocktailList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktails = Object.values(cocktailsObj);


  return (
    <div className="cocktail_list_div">
      <h1>Cocktails</h1>
      <section className="cards">
        {cocktails.map(({ id, name, description, imageUrl, recipeUrl }) => {
          return <CocktailDetail key={id} id={id} name={name} description={description} imageUrl={imageUrl} recipeUrl={recipeUrl} />;
        })}
      </section>
    </div>
  );
};

export default CocktailList;
