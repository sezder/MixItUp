import { csrfFetch } from "./csrf";

// GET ALL REVIEWS
const GET_ALL_REVIEWS = "reviews/GET_ALL_REVIEWS";

const loadAllReviews = (allReviews) => ({
  type: GET_ALL_REVIEWS,
  allReviews,
});

export const getAllReviews = () => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(loadAllReviews(reviews));
    return reviews;
  }
};

const initialState = {};

const reviewFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      const allReviews = {};
      action.allReviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    default:
      return state;
  }
};

export default reviewFeedReducer;
