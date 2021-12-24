import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBar } from "../../store/bar";
import "./IndivBar.css";

const IndivBar = () => {
  const dispatch = useDispatch();
  const { barId } = useParams();

  useEffect(() => {
    dispatch(getOneBar(parseInt(barId)));
  }, [dispatch]);
  const bar = useSelector((state) => state.bar.indivBar);
  console.log("indivBar frontend bar.bar", bar);

  return (
    <div>
      <div></div>
      <h1>{bar?.name}</h1>
    </div>
  );
};

export default IndivBar;
