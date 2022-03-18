import React, { useEffect, useState } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBar } from "../../store/bar";
import "./IndivBar.css";
import BarDetails from "./BarDetails";
import { destroyBar } from "../../store/bar";
import NewCheckin from "../NewCheckin";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import StarRatingComponent from "react-star-rating-component";
import { getAllCheckinsByBarId } from "../../store/checkin";

const IndivBar = ({ setBarComponent, barComponent }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { barId } = useParams();
  barId = Number(barId);
  const [showModal, setShowModal] = useState(false);

  const userId = useSelector((state) => state.session.user)?.id;

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

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyBarPayload = { userId, barId };
    const destroyedBar = dispatch(destroyBar(destroyBarPayload));
    if (destroyedBar) {
      history.push("/bars");
    }
  };

  useEffect(() => {
    dispatch(getOneBar(parseInt(barId)));
    dispatch(getAllCheckinsByBarId(barId));
  }, [dispatch, barId]);

  const bar = useSelector((state) => state.bar[barId]);
  const barUserId = bar?.userId;
  let checkins = useSelector((state) => state.checkin);
  checkins = Object.values(checkins);
  const numCheckins = checkins?.length;

  const backgroundImageStyling = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100vw",
  };

  if (bar?.imageUrl !== undefined) {
    backgroundImageStyling["backgroundImage"] = `url(${bar.imageUrl})`;
  }

  const findAvg = () => {
    let sum = 0;
    checkins.forEach((checkin) => {
      sum += checkin.rating;
    });
    return Math.floor(sum / checkins.length);
  };

  return (
    <div className="indiv_div">
      {/* Banner with bar image */}
      <div
        className="indiv_banner_container"
        style={backgroundImageStyling}
      ></div>
      <h1>{bar?.name}</h1>

      <main>
        {/* Navigation links to switch the component rendered in main */}
        {numCheckins > 0 ? (
          <StarRatingComponent
            name="uneditableRatingAvg"
            starCount={5}
            value={findAvg()}
            starColor="#090C0B"
            emptyStarColor="#d1c1ae"
            editable={false}
            className="indivUneditableRating"
          />
        ) : (
          <br></br>
        )}

        <ul>
          <div>
            <p onClick={() => setBarComponent("info")}>
              <li>Info</li>
            </p>

            <span onClick={() => window.open(bar?.menuUrl)}>
              <li>Menu</li>
            </span>

            <span onClick={() => window.open(bar?.reservationUrl)}>
              <li>Reservations</li>
            </span>

            <p onClick={() => setBarComponent("checkin")}>
              <li>Check In</li>
            </p>

            {/* If the current user is the creator of the bar, show edit/delete */}
            {barUserId === userId && (
              <>
                <NavLink to={`/bars/${barId}/edit`}>
                  <i className="far fa-edit"></i>
                </NavLink>

                <i className="far fa-trash-alt" onClick={handleDelete}></i>
              </>
            )}
          </div>
        </ul>

        {barComponent === "info" ? (
          <BarDetails
            description={bar?.description}
            location={bar?.location}
            barUserId={barUserId}
            id={barId}
            checkins={checkins}
            name={bar?.name}
          />
        ) : (
          reviewRestriction
        )}
      </main>
    </div>
  );
};

export default IndivBar;
