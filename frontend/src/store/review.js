import { csrfFetch } from "./csrf";

//LABEL
//ACTION VARIABLE
//ACTION CREATOR
//THUNK
//STORE
const GET_REVIEW = "reviews/GET_REVIEW";

const loadReview = (review) => ({
  type: GET_REVIEW,
  review,
});

export const getOneReview =
  ({ reviewId, cocktailId }) =>
  async (dispatch) => {
    const res = await csrfFetch(
      `/api/cocktails/${cocktailId}/review/${reviewId}`
    );

    if (res.ok) {
      const response = await res.json();
      dispatch(loadReview(response.review));
    }
  };

// ADD REVIEW
const ADD_REVIEW = "reviews/ADD_REVIEW";

const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const createReview =
  ({ reviewRating, reviewBody, cocktailId, userId }) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/cocktails/${cocktailId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviewRating, reviewBody, cocktailId, userId }),
    });

    if (res.ok) {
      const response = await res.json();
      dispatch(addReview(response));
      return response;
    }
  };

//LABEL
//ACTION VARIABLE
//ACTION CREATOR
//THUNK
//STORE

//LABEL
//ACTION VARIABLE
//ACTION CREATOR
//THUNK
//STORE

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      const allReviews = {};
      action.reviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    case ADD_REVIEW:
      const reviews = { ...state, [action.review.id]: action.review };
    default:
      return state;
  }

  // switch (action.type) {
  //   // case GET_COCKTAIL:
  // case GET_COCKTAILS:
  // const allCocktails = {};
  // action.cocktails.forEach((cocktail) => {
  //   allCocktails[cocktail.id] = cocktail;
  // });
  // return { ...state, ...allCocktails };
  // case ADD_COCKTAIL:
  //   return { ...state, [action.cocktail.id]: action.cocktail };
  //   case DELETE_COCKTAIL:
  //     const newState = { ...state };
  //     delete newState[action.cocktailId];
  //     return newState;
  //   case UPDATE_COCKTAIL:
  //     return {...state, [action.cocktail.id]: action.cocktail}
  //   default:
  //     return state;
  // }
};

export default reviewReducer;
