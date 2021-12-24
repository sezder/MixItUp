import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBars } from "../../store/bar";
import "./BarList.css";

const BarList = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllBars())
  }, [dispatch])

  const barsObj = useSelector((state) => state.bar)
  console.log(barsObj)
  return <div>
    <h1>GOT HERE</h1>
  </div>;
};

export default BarList;
