import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCocktails } from "../../store/cocktail";
import "./Home.css";
import CocktailList from "../CocktailList";

const Home = () => {
  return (
    <div>
      <div className="home_cocktail_list">
      <CocktailList />
      </div>
    </div>
  );
};

export default Home;
