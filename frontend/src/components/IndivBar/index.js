import React, { useEffect, useState } from "react";
import { useParams, NavLink, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBar } from "../../store/bar";
import "./IndivBar.css";
import BarDetails from "./BarDetails";

const IndivBar = () => {
  const dispatch = useDispatch();
  const { barId } = useParams();

  useEffect(() => {
    dispatch(getOneBar(parseInt(barId)));
  }, [dispatch]);
  const bar = useSelector((state) => state.bar.indivBar);
  console.log("indivBar frontend bar.bar", bar);

  const backgroundImageStyling = {
    backgroundImage: `url(${bar?.imageUrl})`,
  };

  return (
    <div className="indiv_bar_div">
      <div
        className="bar_banner_container"
        style={backgroundImageStyling}
      ></div>
      <h1>{bar?.name}</h1>
      <main>
        <ul>
          <NavLink to={`/bars/${bar?.id}/details`}><li>Details</li></NavLink>
          <NavLink to={`/bars/${bar?.id}/menu`}><li>Menu</li></NavLink>
          <NavLink to={`/bars/${bar?.id}/location`}><li>Location</li></NavLink>
          <a href={bar?.menuUrl}><li>Reservations</li></a>
          <NavLink to={`/bars/${bar?.id}/checkin`}><li>Check In</li></NavLink>
        </ul>
        <Switch>
          <Route path={`/bars/${bar?.id}/details`}>< BarDetails description={bar?.description}/></Route>
          <Route path={`/bars/${bar?.id}/menu`}>{/* < BarMenu/> */}</Route>
          <Route path={`/bars/${bar?.id}/location`}>{/* < BarLocation/> */}</Route>
          <Route path={`/bars/${bar?.id}/checkin`}>{/* < CheckIn/> */}</Route>
        </Switch>
      </main>
    </div>
  );
};

export default IndivBar;
