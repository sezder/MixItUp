import React, { useEffect, useState } from "react";
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBar } from "../../store/bar";
import "./IndivBar.css";
import BarDetails from "./BarDetails";
import { destroyBar } from "../../store/bar";
import NewCheckin from "../NewCheckin";

const IndivBar = ({ setBarComponent, barComponent }) => {
  const history = useHistory();
  const userId = useSelector((state) => state.session.user)?.id;

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyBarPayload = { userId, barId };
    const destroyedBar = dispatch(destroyBar(destroyBarPayload));
    if (destroyedBar) {
      history.push("/bars");
    }
  };
  const dispatch = useDispatch();
  let { barId } = useParams();
  barId = Number(barId);

  useEffect(() => {
    dispatch(getOneBar(parseInt(barId)));
  }, [dispatch, barId]);
  const bar = useSelector((state) => state.bar[barId]);
  const barUserId = bar?.userId;

  const backgroundImageStyling = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100vw",
  };

  if (bar?.imageUrl !== undefined) {
    backgroundImageStyling["backgroundImage"] = `url(${bar.imageUrl})`;
  }

  return (
    <div className="indiv_bar_div">
      {/* Banner with bar image */}
      <div
        className="bar_banner_container"
        style={backgroundImageStyling}
      ></div>
      <h1>{bar?.name}</h1>

      <main>
        {/* Navigation links to switch the component rendered in main */}
        <ul>
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

          {barUserId === userId && (
            <>
              <NavLink to={`/bars/${barId}/edit`}>
                <i className="fas fa-edit"></i>
              </NavLink>

              <i className="far fa-trash-alt" onClick={handleDelete}></i>
            </>
          )}
        </ul>
        {barComponent === "info" ? (
          <BarDetails
            description={bar?.description}
            location={bar?.location}
            barUserId={barUserId}
            id={barId}
          />
        ) : (
          <NewCheckin barId={barId} setBarComponent={setBarComponent} />
        )}
      </main>
    </div>
  );
};

export default IndivBar;
