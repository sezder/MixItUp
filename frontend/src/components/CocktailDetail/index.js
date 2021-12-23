import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import "./CocktailDetail.css";
import "../../index.css";

const CocktailDetail = ({ id, name, description, imageUrl, avgRating }) => {

  const reviewsObj = useSelector((state) => state.review);
  const reviews = Object.values(reviewsObj);

  return (
    <div className="card">
      <a href={`/cocktails/${id}`} id="card_link">
        <div className="card_img_container">
          <img src={imageUrl} alt={name} className="card_img_container"></img>
        </div>

        <div className="card_content">
          <h2 className="card_title text_large">{name}</h2>
          <StarRatingComponent
            name="uneditableRatingAvg"
            starCount={5}
            value={avgRating}
            starColor="#d1c1ae"
            emptyStarColor="#090C0B"
            editable={false}
          />
          <p className="card_info text_small">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default CocktailDetail;
