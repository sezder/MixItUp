import React from "react";
import "./BarDetails.css"

const BarDetails = ({ description }) => {
  return (
    <div className="bar_details">
      <p>{description}</p>
    </div>
  );
};

export default BarDetails;
