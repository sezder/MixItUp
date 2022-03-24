import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";


import EditCheckin from "../../EditCheckin";
import "./BarDetails.css";
import "../../EditCheckin/EditCheckin.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCheckinsByBarId } from "../../../store/checkin";
import NewCheckin from "../../NewCheckin";
import LoginForm from "../../../LoginFormModal/LoginForm";
import { Modal } from "../../../../context/Modal";

const BarDetails = ({ description, id: barId, location, name, setBarComponent }) => {
  const dispatch = useDispatch();
  const [showEditCheckin, setShowEditCheckin] = useState(null);
  const userId = useSelector((state) => state.session?.user?.id);
  const [showModal, setShowModal] = useState(false);

  let checkins = useSelector((state) => state.checkin);
  checkins = Object.values(checkins);

  let reviewRestriction = userId ? (
    <NewCheckin barId={barId} setBarComponent={setBarComponent} />
  ) : (
    <>
      <button onClick={() => setShowModal(true)} id="review_restric">
        Log in to leave a review.
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );

  useEffect(() => {
    dispatch(getAllCheckinsByBarId(barId));
  }, [dispatch, barId]);

  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p id="bar_descrip">{description}</p>

      <span>
        {checkins.length > 0 ? (
          <>
            {" "}
            <h2>{`See what people have to say about ${name}`} </h2>
            {checkins?.length > 0 &&
              checkins.map((checkin) => {
                const owned = checkin?.userId === userId;
                const user = checkin?.User;
                const cocktail = checkin?.Cocktail;
                return owned && showEditCheckin === checkin.id ? (
                  <EditCheckin
                    barId={barId}
                    id={checkin.id}
                    setShowEditCheckin={setShowEditCheckin}
                    key={`editCheckin:${checkin.id}`}
                    checkin={checkin}
                  />
                ) : (
                  <div key={`checkin:${checkin.id}`} className="checkin_div">
                    <div id="user_info">
                      <div>
                        <div className="profile_circle">
                          <p>{user?.username.slice(0, 1)}</p>
                        </div>
                        <p>{user?.username}</p>
                      </div>
                      <div>
                        <StarRatingComponent
                          name="uneditableRating"
                          starCount={5}
                          value={checkin?.rating}
                          starColor="#232e2b"
                          emptyStarColor="#d1c1ae"
                          editable={false}
                        />

                        {owned && (
                          <i
                            className="fas fa-edit"
                            onClick={() => setShowEditCheckin(checkin.id)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <p id="checkin_content">{checkin?.content}</p>

                    <NavLink to={`/cocktails/${cocktail?.id}`}>
                      <div className="checkin_cocktail">
                        <div
                          className="bar_img_container"
                          id="checkin_img_container"
                        >
                          <img
                            src={cocktail?.imageUrl}
                            alt={cocktail?.name}
                          ></img>
                        </div>

                        <div id="cocktail_preview_div">
                          <p id="what_have">What did you have?</p>
                          <p id="checkin_cocktail_name">{cocktail?.name}</p>
                          <p id="checkin_cocktail_descrip">
                            {cocktail?.description.length > 100
                              ? `${cocktail?.description.slice(0, 100)}...`
                              : cocktail?.description}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </>
        ) : (
          <>
            <h2>Be the first to leave a review.</h2>
            {reviewRestriction}
          </>
        )}
      </span>
    </div>
  );
};

export default BarDetails;
