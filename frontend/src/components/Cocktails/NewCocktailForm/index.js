import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCocktail } from "../../../store/cocktail";
import "../../../Form.css";

function NewCocktailForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [recipeUrl, setRecipeUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);

  const userId = user?.id;

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Provide a name.");
    if (name.length > 255) errors.push("Name must be less than 255 characters");
    if (!description.length) errors.push("Provide a description.");
    if (!imageUrl.length) errors.push("Provide an image url.");
    if (!recipeUrl.length) errors.push("Provide a recipe url.");
    setErrors(errors);
  }, [name, description, imageUrl, recipeUrl]);

  if (!user) return <Redirect to="/login" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const newCocktail = {
      name,
      description,
      imageUrl,
      recipeUrl,
      userId,
    };

    let createdCocktail = dispatch(createCocktail(newCocktail));
    if (createdCocktail) {
      history.push(`/cocktails`);
    }
  };

  return (
    <div className="form_page_div">
      <div className="form_img_div">
        <div className="background_image"></div>
        <img src={imageUrl} alt=""></img>
        <div className="bg_text">
          <p>Provide a url to preview your photo</p>
        </div>
      </div>
      <div className="form_div">
        <h2>Add a Cocktail</h2>
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
          <button
            type="submit"
            disabled={errors.length > 0}
            className="add_btn"
          >
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCocktailForm;
