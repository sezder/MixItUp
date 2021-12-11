import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Splash.css";
import "../../index.css";
import NewCocktailReview from "../NewCocktailReview";
import ShowReviews from "../ShowReviews";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm.js";
import BackgroundGif from "./looping_cocktail.mp4";

const Splash = () => {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  let reviewRestriction;
  if (userId) {
    reviewRestriction = <NewCocktailReview />;
  } else {
    reviewRestriction = (
      <>
        <button onClick={() => setShowModal(true)}>
          Log in to leave a review.
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }

  return (
    <div className="video_container">
      <video muted autoplay="autoplay" loop>
        <source src={BackgroundGif} type="video/mp4" />
      </video>

      <a href="https://vine.co/v/5JEQYtUjtgI" id="credit_link">
        <div id="gif_credit">
          <p>GIF by The Videobook</p>
        </div>
      </a>
    </div>
  );
};

export default Splash;
