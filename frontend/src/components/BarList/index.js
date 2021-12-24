import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBars } from "../../store/bar";
import BarDetail from "../BarDetail";
import "./BarList.css";

const BarList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBars());
  }, [dispatch]);

  const barsObj = useSelector((state) => state.bar);
  const bars = Object.values(barsObj);

  return (
    <div className="bar_list_container">
      {bars.map(
        ({ id, name, description, location, imageUrl, menuUrl, userId }) => {
          return (
            <BarDetail
              key={id}
              name={name}
              id={id}
              description={description}
              location={location}
              imageUrl={imageUrl}
              menuUrl={menuUrl}
              userId={userId}
            />
          );
        }
      )}
    </div>
  );
};

export default BarList;
