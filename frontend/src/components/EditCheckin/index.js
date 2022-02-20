import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { getCocktails } from "../../store/cocktail";
import { getOneBar } from "../../store/bar";
import { updateCheckin } from "../../store/checkin";
import "./EditCheckin.css";

const EditCheckin = ({ barId, id: checkinId, setShowEditCheckin, checkin }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state?.session?.user?.id);

  const [content, setContent] = useState(checkin?.content);
  const [rating, setRating] = useState(checkin?.rating);
  const [cocktailId, setCocktailId] = useState(checkin?.cocktailId);
  const [errors, setErrors] = useState([]);
  const cocktails = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];
    if (!content?.length) errors.push("Provide content for your bar checkin.");
    if (rating > 5 || rating <= 0) errors.push("Rate between 1 and 5 stars.");
    if (cocktailId === "") errors.push("Select a cocktail.");
    setErrors(errors);
  }, [content, rating, cocktailId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editCheckinPayload = {
      userId,
      checkinId,
      content,
      rating,
      cocktailId,
      userId,
      barId,
    };

    dispatch(updateCheckin(editCheckinPayload));
    dispatch(getOneBar(barId));
    setShowEditCheckin(null);
  };

  const onStarClick = (nextValue, prevValue, name) => {
    return setRating(nextValue);
  };

  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     const destroyBarPayload = { userId, barId };
  //     const destroyedBar = dispatch(destroyBar(destroyBarPayload));
  //     if (destroyedBar) {
  //       history.push("/bars");
  //     }
  //   };

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
          <i className="fas fa-check"></i>
        </button>
      </form>
    </div>
  );
};

export default EditCheckin;
