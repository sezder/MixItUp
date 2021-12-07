import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCocktail,
  destroyCocktail,
  getCocktails,
} from "../../store/cocktail";
import "./EditCocktailForm.css";

function EditCocktailForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cocktailId } = useParams();
  // console.log(cocktailId);
  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktail = useSelector((state) => state.cocktail[cocktailId]);

  const [name, setName] = useState(cocktail?.name);
  const [description, setDescription] = useState(cocktail?.description);
  const [imageUrl, setImageUrl] = useState(cocktail?.imageUrl);
  const [recipeUrl, setRecipeUrl] = useState(cocktail?.recipeUrl);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Provide a name.");
    if (name.length > 255) errors.push("Name must be less than 255 characters");
    if (!description.length) errors.push("Provide a description.");
    // error handling for an imageUrl actually beign a link?
    if (!imageUrl.length) errors.push("Provide an image url.");
    setErrors(errors);
  }, [name, description, imageUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const editedCocktailPayload = {
      //payload
      name,
      description,
      imageUrl,
      recipeUrl,
    };

    let editedCocktail = dispatch(updateCocktail(editedCocktailPayload));

    if (editedCocktail) {
      history.push(`/cocktails/${cocktailId}`);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(destroyCocktail(cocktailId));
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit a Cocktail</h2>
        {/* ERRORS */}
        <ul className="errors">
          {errors.length > 0 &&
            errors.map((error) => <ul key={error}>{error}</ul>)}
        </ul>

        {/* NAME */}
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* DESCRIPTION */}
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* IMAGE URL */}
        <input
          placeholder="Image url"
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {/* RECIPE URL */}
        <input
          placeholder="Recipe url"
          type="text"
          name="recipeUrl"
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
        />

        {/* SUBMIT */}
        <button type="submit" disabled={errors.length > 0}>
          Update Cocktail
        </button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditCocktailForm;
