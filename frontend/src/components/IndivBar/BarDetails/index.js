import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./BarDetails.css";

const BarDetails = ({ description, barUserId, id: barId }) => {
  const userId = useSelector((state) => state.session.user)?.id;


  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   const destroyReviewPayload = { userId, cocktailId, reviewId };
  //   let destroyedReview = dispatch(destroyReview(destroyReviewPayload));
  //   if (destroyedReview) {
  //     history.push(`/cocktails/${cocktailId}`);
  //   }
  // };
  const handleDelete = () => {

  }

  return (
    <div className="bar_details">
      {barUserId === userId && (
        <>
          <NavLink to={`/bars/${barId}/edit`}>
            <button> <i className="fas fa-edit"></i></button>
          </NavLink>
          <NavLink to="/">
            <button onClick={handleDelete}><i className="far fa-trash-alt"></i></button>
          </NavLink>
        </>
      )}
      <p>{description}</p>
    </div>
  );
};

export default BarDetails;
