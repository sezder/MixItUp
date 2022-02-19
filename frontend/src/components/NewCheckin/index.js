import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { getCocktails } from "../../store/cocktail";
import "./NewCheckin.css";

const NewCheckin = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [cocktailId, setCocktailId] = useState(null);
  const [errors, setErrors] = useState([]);
  const cocktails = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];
    if (!content.length) errors.push("Provide content for your bar checkin.");
    if (rating > 5 || rating <= 0) errors.push("Rate between 1 and 5 stars.");
    setErrors(errors);
    if (cocktailId === null) errors.push("Select a cocktail.");
  }, [content, rating, cocktailId]);

  const userId = useSelector((state) => state.session.user.id);
  const paramsObj = useParams();
  const barId = Number(paramsObj?.barId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCheckinPayload = {
      content,
      rating,
      cocktailId,
      userId,
      barId,
    };

    // const checkin = await dispatch();
    // if (checkin) {
    //   history.push(`/bars/${barId}/details`);
    // }
  };

  const onStarClick = (nextValue, prevValue, name) => {
    return setRating(nextValue);
  };

  return (
    <form onSubmit={handleSubmit} className="checkin_form">
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      {/* RATING*/}
      <label for="rate" className="hidden">
        Rate your bar experience
      </label>
      <StarRatingComponent
        className="checkin_star"
        name="rate"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
        starColor="#465d57"
        emptyStarColor="#d1c1ae"
      />

      {/* CONTENT */}
      <label for="content" className="hidden">
        Review content
      </label>
      <textarea
        name="content"
        placeholder="Review content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
      ></textarea>

      {/* SELECT COCKTAIL */}
      <label for="cocktail_id" className="hidden">
        Cocktail you had at the bar
      </label>
      <select
        name="cocktail_id"
        value={cocktailId}
        onChange={(e) => setCocktailId(e.target.value)}
      >
        <option value={null}>-- Select a Cocktail --</option>
        {Object.values(cocktails).map((cocktail, idx) => (
          <option key={idx} value={cocktail.id}>
            {cocktail.name}
          </option>
        ))}
      </select>
      <NavLink to={"/cocktails/new"} className="dark_small">
        Don't see the cocktail you had?
      </NavLink>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCheckin;
