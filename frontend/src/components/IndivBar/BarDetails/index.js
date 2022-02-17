import React from "react";
import "./BarDetails.css";

const BarDetails = ({ description, barUserId, id: barId, location }) => {
  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p>{description}</p>
    </div>
  );
};

export default BarDetails;
