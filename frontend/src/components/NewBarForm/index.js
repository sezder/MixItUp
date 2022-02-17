import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBar } from "../../store/bar";
import "./NewBarForm.css";

const NewBarForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [menuUrl, setMenuUrl] = useState("");
  const [reservationUrl, setReservationUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Provide the name of the bar.");
    if (!description.length) errors.push("Provide a description of the bar.");
    if (!location.length) errors.push("Provide bar's address.");
    if (!imageUrl.length) errors.push("Provide a photo of the bar.");
    if (!menuUrl.length) errors.push("Provide url for menu.");
    if (!reservationUrl.length)
      errors.push("Provide a url to book a reservation.");
    setErrors(errors);
  }, [name, description, location, imageUrl, menuUrl, reservationUrl]);

  const userId = useSelector((state) => state.session.user?.id);

  if (!userId) return <Redirect to="/login"></Redirect>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBar = {
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
      userId,
    };

    const createdBar = dispatch(createBar(newBar));
    if (createdBar) {
      //get the id: res.id and the push to redirect there
      // /bars/${createdBar?.id}
      history.push("/bars");
    }
  };

  return (
    <div className="cocktail_add_div">
      <div className="cocktail_add_img_div">
        <div className="background_image"></div>
        <img src={imageUrl} alt=""></img>
        <div className="bg_text">
          <p>Provide a url to preview photo.</p>
        </div>
      </div>
      <div className="add_cocktail_form_div">
        <h2>Add a Bar</h2>
        <form onSubmit={handleSubmit} className="add_cocktail_form">
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
          <button
            type="submit"
            disabled={errors.length > 0}
            className="add_cocktail_button"
          >
            <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBarForm;
