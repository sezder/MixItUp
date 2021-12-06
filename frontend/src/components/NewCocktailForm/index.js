import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCocktail } from '../../store/cocktail';
import "./NewCocktailForm.css";

function NewCocktailForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [recipeUrl, setRecipeUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Provide a name.");
    if (name.length > 100) errors.push("Name must be less than 100 characters");
    if (!description.length) errors.push("Provide a description.");
    // error handling for an imageUrl actually beign a link?
    if (!imageUrl.length) errors.push("Provide an image url.");
    setErrors(errors);
  }, [name, description, imageUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const payload = {
      name,
      description,
      imageUrl,
      recipeUrl,
    };

    let createdCocktail = dispatch(createCocktail(payload));

    if (createdCocktail) {
      history.push(`/cocktails/${createdCocktail.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Cocktail</h2>
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

      <input
        placeholder="Recipe url"
        type="text"
        name="recipeUrl"
        value={recipeUrl}
        onChange={(e) => setRecipeUrl(e.target.value)}
      />

      {/* SUBMIT */}
      <button type="submit" disabled={errors.length > 0}>
        Add Cocktail
      </button>
    </form>
  );
}

export default NewCocktailForm;
