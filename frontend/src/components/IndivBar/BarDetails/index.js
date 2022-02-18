import React from "react";
import "./BarDetails.css";

const BarDetails = ({ description, barUserId, id: barId, location }) => {
  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p>{description}</p>

      <section>
        {/* R: checkins */}
      </section>
    </div>
  );
};

export default BarDetails;