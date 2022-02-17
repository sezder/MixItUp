import React, { useEffect } from "react";
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

const IndivBar = () => {
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
  const { barId } = useParams();

  useEffect(() => {
    dispatch(getOneBar(parseInt(barId)));
  }, [dispatch, barId]);
  const bar = useSelector((state) => state.bar[barId]);
  const barUserId = bar?.userId;

  const backgroundImageStyling = {
    backgroundImage: `url(${bar?.imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100vw"
  };

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
          <NavLink to={`/bars/${bar?.id}/info`}>
            <li>Info</li>
          </NavLink>

          <span onClick={() => window.open(bar?.menuUrl)}>
            <li>Menu</li>
          </span>

          <span onClick={() => window.open(bar?.reservationUrl)}>
            <li>Reservations</li>
          </span>

          <NavLink to={`/bars/${bar?.id}/checkin`}>
            <li>Check In</li>
          </NavLink>
          {barUserId === userId && (
            <>
              <NavLink to={`/bars/${barId}/edit`}>
                <i className="fas fa-edit"></i>
              </NavLink>

              <i className="far fa-trash-alt" onClick={handleDelete}></i>
            </>
          )}
        </ul>

        {/* What to display for each path */}
        <Switch>
          <Route path={`/bars/${bar?.id}/info`}>
            <>
              <BarDetails
                description={bar?.description}
                location={bar?.location}
                barUserId={barUserId}
                id={bar?.id}
              />
              {/* <BarsCocktails /> */}
            </>
          </Route>
          <Route path={`/bars/${bar?.id}/menu`}>
            {/* < BarMenu menuUrl={bar?.menuUrl}/> */}
          </Route>
          <Route path={`/bars/${bar?.id}/checkin`}>{/* < CheckIn/> */}</Route>
        </Switch>
      </main>
    </div>
  );
};

export default IndivBar;
