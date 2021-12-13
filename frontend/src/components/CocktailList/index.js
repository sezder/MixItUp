import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../store/cocktail";
import "./CocktailList.css";
import CocktailDetail from "../CocktailDetail/index";

const CocktailList = () => {
  const dispatch = useDispatch();
  const cocktailsObj = useSelector((state) => state.cocktail);
  const cocktails = Object.values(cocktailsObj);
  
  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  return (
    <div className="cocktail_list_div">
      <section className="cards">
        {cocktails.map(({ id, name, description, imageUrl, recipeUrl }) => {
          return <CocktailDetail key={id} id={id} name={name} description={description} imageUrl={imageUrl} recipeUrl={recipeUrl} />;
        })}
      </section>
    </div>
  );
};

export default CocktailList;
