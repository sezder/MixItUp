import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllBars } from "../../store/bar";
import BarDetail from "../BarDetail";
import "./BarList.css";

const BarList = ({ setBarComponent }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBars());
  }, [dispatch]);

  const barsObj = useSelector((state) => state.bar);
  const bars = Object.values(barsObj);

  return (
    <div className="bar_list_container">
      <div className="submit_new_bar">
        <h2>Bar you've visited not already listed?</h2>
        <NavLink to="/bars/new">
          <button>Submit a Bar</button>
        </NavLink>
      </div>
      {bars.map(
        ({
          id,
          name,
          description,
          location,
          imageUrl,
          menuUrl,
          reservationUrl,
          userId,
        }) => {
          return (
            <BarDetail
              key={id}
              name={name}
              id={id}
              description={description}
              location={location}
              imageUrl={imageUrl}
              menuUrl={menuUrl}
              reservationUrl={reservationUrl}
              setBarComponent={setBarComponent}
            />
          );
        }
      )}
    </div>
  );
};

export default BarList;
