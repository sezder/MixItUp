import { csrfFetch } from "./csrf";

// Get one bar by id
const GET_ONE_BAR = "bars/GET_ONE_BAR";

const loadOneBar = (bar) => ({
  type: GET_ONE_BAR,
  bar,
});

export const getOneBar = (barId) => async (dispatch) => {
  const res = await csrfFetch(`/api/bars/${barId}`);

  if (res.ok) {
    const bar = await res.json();
    dispatch(loadOneBar(bar));
    return bar;
  }
};

// Get all bars
const GET_ALL_BARS = "bars/GET_ALL_BARS";

const loadAllBars = (bars) => ({
  type: GET_ALL_BARS,
  bars,
});

export const getAllBars = () => async (dispatch) => {
  const res = await csrfFetch(`/api/bars`);
  if (res.ok) {
    const bars = await res.json();
    dispatch(loadAllBars(bars));
    return bars;
  }
};

// Create a new bar
const ADD_BAR = "bars/ADD_BAR";
//full action creator
const addBar = (bar) => ({
  type: ADD_BAR,
  bar,
});

export const createBar = (newBar) => async (dispatch) => {
  const res = await csrfFetch(`/api/bars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBar),
  });

  if (res.ok) {
    const bar = await res.json();
    dispatch(addBar(bar));
    return bar;
  }
};

// Edit a bar
const UPDATE_BAR = "bars/UPDATE_BAR";

const editBarPayload = (bar) => ({
  type: UPDATE_BAR,
  bar,
});

export const updateBar =
  ({
    barId,
    name,
    description,
    location,
    imageUrl,
    menuUrl,
    reservationUrl,
    mapsUrl,
    userId,
  }) =>
  async (dispatch) => {
    // console.log("barId in thunk", barId)
    console.log("userId in THUNK DOG", userId);
    const res = await csrfFetch(`/api/bars/${barId}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        barId,
        name,
        description,
        location,
        imageUrl,
        menuUrl,
        reservationUrl,
        mapsUrl,
        userId,
      }),
    });

    if (res.ok) {
      const response = await res.json();
      dispatch(editBarPayload(response));
    }
  };

// Delete Bar

const DELETE_BAR = "bars/DELETE_BAR";

const deleteBar = (barId) => ({
  type: DELETE_BAR,
  barId,
});

export const destroyBar =
  ({ userId, barId }) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/bars/${barId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, barId }),
    });

    if (res.ok) {
      const response = await res.json();
      dispatch(deleteBar(response));
    }
  };

const initialState = {};

const barReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_ONE_BAR:
      newState.indivBar = action.bar;
      return { ...state, ...newState };
    case GET_ALL_BARS:
      action.bars.forEach((bar) => {
        newState[bar.id] = bar;
      });
      return { ...state, ...newState };
    case ADD_BAR:
      return { ...state, [action.bar.id]: action.bar }; // does thi sneed to be indivBar: action.bar
    case UPDATE_BAR:
      return { ...state, indivBar: action.bar };
    case DELETE_BAR:
      newState = { ...state };
      delete newState[action.barId];
      return { ...newState };
    default:
      return state;
  }
};

export default barReducer;
