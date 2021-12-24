import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBars } from "../../store/bar";
import "./BarList.css";

const BarList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBars());
  }, [dispatch]);

  const barsObj = useSelector((state) => state.bar);
  const bars = Object.values(barsObj);
  console.log(bars);
  return <div>{bars.map(({name, description, location, imageUrl, menuUrl, userId })=> {

  })}</div>;
};

export default BarList;
