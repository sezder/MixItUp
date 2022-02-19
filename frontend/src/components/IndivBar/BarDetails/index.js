import React from "react";
import "./BarDetails.css";

const BarDetails = ({
  description,
  barUserId,
  id: barId,
  location,
  checkins,
}) => {
  console.log(checkins, "checkins");
  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p>{description}</p>
{/* 
      <section>{checkins.map((checkin) => {
        return (
          <div>

          </div>
        )
      })}</section> */}
    </div>
  );
};

export default BarDetails;
