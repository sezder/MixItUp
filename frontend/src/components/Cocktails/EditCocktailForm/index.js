import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  updateCocktail,
  destroyCocktail,
  getCocktails,
} from "../../../store/cocktail";

function EditCocktailForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cocktailId } = useParams();

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const cocktail = useSelector((state) => state.cocktail[cocktailId]);
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;


  const [name, setName] = useState(cocktail?.name || "");
  const [description, setDescription] = useState(cocktail?.description || "");
  const [imageUrl, setImageUrl] = useState(cocktail?.imageUrl || "");
  const [recipeUrl, setRecipeUrl] = useState(cocktail?.recipeUrl || "");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (cocktail) {
      setName(cocktail.name);
      setDescription(cocktail.description);
      setImageUrl(cocktail.imageUrl);
      setRecipeUrl(cocktail.recipeUrl);
    }
  }, [cocktail]);

  useEffect(() => {
    const errors = [];
    if (!name?.length) errors.push("Provide a name.");
    if (name?.length > 255)
      errors.push("Name must be less than 255 characters");
    if (!description?.length) errors.push("Provide a description.");
    if (!imageUrl?.length) errors.push("Provide an image url.");
    if (!recipeUrl?.length) errors.push("Provide a recipe url.");
    setErrors(errors);
  }, [name, description, imageUrl, recipeUrl]);

  if (user?.id!== cocktail?.userId) return <Redirect to="/cocktails" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const editedCocktailPayload = {
      cocktailId,
      name,
      description,
      imageUrl,
      recipeUrl,
      userId
    };

    let editedCocktail = dispatch(updateCocktail(editedCocktailPayload));

    if (editedCocktail) {
      history.push(`/cocktails/${cocktailId}`);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyCocktailPayload = { userId, cocktailId };
    let destroyedCocktail = dispatch(destroyCocktail(destroyCocktailPayload));
    if (destroyedCocktail) {
      history.push("/cocktails");
    }
  };

  return (
    <div className="form_page_div">
      <div className="form_img_div">
        <div className="background_image"></div>
        <img src={imageUrl} alt="Several colorful cocktails aligned on a table"></img>
        <div className="bg_text">
          <p>Provide a url to preview your photo</p>
        </div>
      </div>
      <div className="form_div">
      <h2>Edit a Cocktail</h2>
        <form onSubmit={handleSubmit} className="form">
          
          {/* ERRORS */}
          {errors.length > 0 && (
            <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}

          {/* NAME */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* DESCRIPTION */}
          <textarea
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
          <div id="btn_div">
            <button
              type="submit"
              disabled={errors.length > 0}
              className="add_btn"
            >
              <i className="fas fa-plus"></i>
            </button>
            <button onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCocktailForm;
