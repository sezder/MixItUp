import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./CocktailList.css";

const CocktailList = () => {
  const dispatch = useDispatch();
  // const history = useHistory()
  const cocktails = useSelector((state) => state.cocktails);

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  return (
    <div>
      <h1>Cocktails</h1>
      {/* Iterate through the cocktails and render a CocktailDetail component for each */}
      {/* <ol></ol> */}
      <p>{cocktails, 'cocktails'}</p>

      {/* Switch */}
    </div>
  );
};

export default CocktailList;
