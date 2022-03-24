import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { getCocktails } from "../../store/cocktail";
import { createCheckin, getAllCheckinsByBarId } from "../../store/checkin";
import "./NewCheckin.css";
import { getOneBar } from "../../store/bar";

const NewCheckin = ({ barId, setBarComponent }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [cocktailId, setCocktailId] = useState("");
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
    if (cocktailId === "") errors.push("Select a cocktail.");
  }, [content, rating, cocktailId]);
  const userId = useSelector((state) => state.session.user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCheckinPayload = {
      content,
      rating,
      cocktailId,
      userId,
      barId,
    };

    const checkin = await dispatch(createCheckin(newCheckinPayload));
    if (checkin) {
      setBarComponent("info");
      dispatch(getOneBar(barId));
      dispatch(getAllCheckinsByBarId(barId));
      history.push(`/bars/${barId}`);
    }
  };

  const onStarClick = (nextValue, prevValue, name) => {
    return setRating(nextValue);
  };

  return (
    <div className="checkin_div">
      <form onSubmit={handleSubmit} className="checkin_form">
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {/* RATING*/}
        <label htmlFor="rate" className="hidden">
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
        <label htmlFor="content" className="hidden">
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
        <label htmlFor="cocktail_id" className="hidden">
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
        <button type="submit" disabled={errors.length > 0} className="add_btn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default NewCheckin;
