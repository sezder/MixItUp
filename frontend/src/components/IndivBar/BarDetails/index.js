import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./BarDetails.css";
import { destroyBar } from "../../../store/bar";

const BarDetails = ({ description, barUserId, id: barId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.session.user)?.id;

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyBarPayload = { userId, barId };
    const destroyedBar = dispatch(destroyBar(destroyBarPayload));
    if (destroyedBar) {
      history.push("/bars");
    }
  };

  return (
    <div className="bar_details">
      {barUserId === userId && (
        <>
          <NavLink to={`/bars/${barId}/edit`}>
            <button>
              <i className="fas fa-edit"></i>
            </button>
          </NavLink>
            <button onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
        </>
      )}
      <p>{description}</p>
    </div>
  );
};

export default BarDetails;
