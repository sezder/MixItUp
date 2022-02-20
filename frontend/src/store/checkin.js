import { csrfFetch } from "./csrf";
// Get checkin by id
const GET_CHECKIN = "checkins/GET_CHECKINS";

const loadCheckin = (checkin) => ({
  type: GET_CHECKIN,
  checkin,
});

export const getCheckin = (checkinId) => async (dispatch) => {
  const res = await csrfFetch(`/api/checkins/${checkinId}`);
  if (res.ok) {
    const checkin = await res.json();
    dispatch(loadCheckin(checkin));
    return checkin;
  }
};

// Add a checkin
const ADD_CHECKIN = "checkins/ADD_CHECKIN";

const addCheckin = (checkin) => ({
  type: ADD_CHECKIN,
  checkin,
});

export const createCheckin = (newCheckin) => async (dispatch) => {
  const res = await csrfFetch("/api/checkins", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCheckin),
  });
  if (res.ok) {
    const checkin = await res.json();
    dispatch(addCheckin(checkin));
    return checkin;
  }
};

const initialState = {};

const checkinReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_CHECKIN:
      newState[action.checkin.id] = action.checkin;
      return { ...state, ...newState };
    case ADD_CHECKIN:
      return { ...state, [action.checkin.id]: action.checkin };
    default:
      return state;
  }
};

export default checkinReducer;
