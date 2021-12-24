import { csrfFetch } from "./csrf";

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

const initialState = {};

const barReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_ALL_BARS:
      action.bars.forEach((bar) => {
        newState[bar.id] = bar;
      });
      return { ...state, ...newState };
    default:
      return state;
  }
};

export default barReducer;
