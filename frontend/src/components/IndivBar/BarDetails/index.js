import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import EditCheckin from "../../EditCheckin";
import "./BarDetails.css";
import "../../EditCheckin/EditCheckin.css";
import { useSelector } from "react-redux";

const BarDetails = ({
  description,
  barUserId,
  id: barId,
  location,
  checkins,
  name,
}) => {
  const [showEditCheckin, setShowEditCheckin] = useState(null);
  const userId = useSelector((state) => state.session?.user?.id);

  return (
    <div className="bar_details">
      <p id="location">{location}</p>
      <p id="bar_descrip">{description}</p>

      <span>
        <h2>{`See what people have to say about ${name}`} </h2>
        {checkins?.length > 0 &&
          checkins.map((checkin, idx) => {
            const owned = checkin?.userId === userId;
            const checkinId = checkin?.id;
            const user = checkin?.User;
            const cocktail = checkin?.Cocktail;
            return owned && showEditCheckin === idx ? (
              <EditCheckin
                barId={barId}
                id={checkin?.id}
                setShowEditCheckin={setShowEditCheckin}
                key={`editCheckin:${idx}`}
                checkin={checkin}
              />
            ) : (
              <div key={`checkin:${idx}`} className="checkin_div">
                <div id="user_info">
                  <div>
                    <div className="profile_circle">
                      <p>{user?.username.slice(0, 1)}</p>
                    </div>
                    <p>{user?.username}</p>
                  </div>
                  <div>
                    <StarRatingComponent
                      name="uneditableRating"
                      starCount={5}
                      value={checkin?.rating}
                      starColor="#232e2b"
                      emptyStarColor="#d1c1ae"
                      editable={false}
                    />

                    {owned && (
                      <i
                        className="fas fa-edit"
                        onClick={() => setShowEditCheckin(idx)}
                      ></i>
                    )}
                  </div>
                </div>
                <p id="checkin_content">{checkin?.content}</p>

                <NavLink to={`/cocktails/${cocktail?.id}`}>
                  <div className="checkin_cocktail">
                    <div
                      className="bar_img_container"
                      id="checkin_img_container"
                    >
                      <img src={cocktail?.imageUrl}></img>
                    </div>

                    <div id="cocktail_preview_div">
                      <p id="what_have">What'd you have?</p>
                      <p id="checkin_cocktail_name">{cocktail?.name}</p>
                      <p id="checkin_cocktail_descrip">
                        {cocktail.description.length > 100
                          ? `${cocktail?.description.slice(0, 100)}...`
                          : cocktail?.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </span>
    </div>
  );
};

export default BarDetails;
