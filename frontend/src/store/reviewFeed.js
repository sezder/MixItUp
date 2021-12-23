import { csrfFetch } from "./csrf";

// GET REVIEWS FOR FEED
const GET_REVIEW_FEED = "reviews/GET_REVIEW_FEED";

const loadAllReviews = (allReviews) => ({
  type: GET_REVIEW_FEED,
  allReviews,
});

export const getReviewFeed = () => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/feed`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(loadAllReviews(reviews));
    return reviews;
  }
};


const initialState = {};

const reviewFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_FEED:
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
