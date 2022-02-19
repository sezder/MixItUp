import React from "react";
import "./BarDetails.css";

const BarDetails = ({
  description,
  barUserId,
  id: barId,
  location,
  checkins,
}) => {
  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p>{description}</p>

      <section>
        {checkins?.length > 0 &&
          checkins.map((checkin, idx) => {
            console.log(checkin, "checkin");
            const user = checkin?.User;
            console.log(user, "user");
            return <div key={`checkin:${idx}`}></div>;
          })}
      </section>
    </div>
  );
};

export default BarDetails;
