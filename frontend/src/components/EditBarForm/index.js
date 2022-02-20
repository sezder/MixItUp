import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBar, updateBar, destroyBar } from "../../store/bar";
import "./EditBarForm.css";

/* {name, description, location, imageUrl, menuUrl, reservationUrl,userId} */

const EditBarForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { barId } = useParams();

  useEffect(() => {
    dispatch(getOneBar(barId));
  }, [dispatch, barId]);

  const bar = useSelector((state) => state.bar[barId]);
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  const [name, setName] = useState(bar?.name);
  const [description, setDescription] = useState(bar?.description);
  const [location, setLocation] = useState(bar?.location);
  const [imageUrl, setImageUrl] = useState(bar?.imageUrl);
  const [menuUrl, setMenuUrl] = useState(bar?.menuUrl);
  const [reservationUrl, setReservationUrl] = useState(bar?.reservationUrl);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!name?.length) errors.push("Provide the name of the bar.");
    if (!description?.length) errors.push("Provide a description of the bar.");
    if (!location?.length) errors.push("Provide bar's address.");
    if (!imageUrl?.length) errors.push("Provide a photo of the bar.");
    if (!menuUrl?.length) errors.push("Provide url for menu.");
    if (!reservationUrl?.length)
      errors.push("Provide a url to book a reservation.");
    setErrors(errors);
  }, [name, description, location, imageUrl, menuUrl, reservationUrl]);

  if (bar && userId !== bar.userId) return <Redirect to="/bars" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const editedBar = {
      userId,
      barId,
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
    };
    const response = dispatch(updateBar(editedBar));
    if (response) {
      history.push(`/bars/${barId}`);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const destroyBarPayload = { userId, barId };
    const destroyedBar = dispatch(destroyBar(destroyBarPayload));
    if (destroyedBar) {
      history.push("/bars");
    }
  };

  return (
    <div className="form_page_div">
      <div className="form_img_div">
        <div className="background_image"></div>
        <img src={imageUrl} alt=""></img>
        <div className="bg_text">
          <p>Provide a url to preview photo.</p>
        </div>
      </div>
      <div className="form_div">
        <h2>Edit Bar</h2>
        <form onSubmit={handleSubmit} className="form">
          {/* ERRORS */}
          {errors.length > 0 && (
            <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}

          {/* Name */}
          <input
            name="name"
            placeholder="Name of bar"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <textarea
            name="description"
            placeholder="Provide a description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            name="location"
            placeholder="Provide address"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>

          <input
            name="imageUrl"
            placeholder="Provide a url to preview image of bar"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>

          <input
            name="menuUrl"
            placeholder="Provide a url for the menu."
            type="text"
            value={menuUrl}
            onChange={(e) => setMenuUrl(e.target.value)}
          ></input>

          <input
            name="reservationUrl"
            placeholder="Provide a url to make a reservation."
            type="text"
            value={reservationUrl}
            onChange={(e) => setReservationUrl(e.target.value)}
          ></input>

          {/* SUBMIT */}
          <div id="btn_div">
            <button
              type="submit"
              disabled={errors.length > 0}
              className="add_btn"
            >
              <i className="fas fa-plus"></i>
            </button>
            <button onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBarForm;
