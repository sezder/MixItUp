import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/GET_REVIEWS";

const loadReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews,
});

export const getReviews = (cocktailId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cocktails/${cocktailId}/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(loadReviews(reviews));
    return reviews;
  }
};

//review feed on indivCocktail page
// const GET_REVIEWS_BY_COCKTAILID = "reviews/GET_REVIEWS_BY_COCKTAILID";

// const loadParticularReviews = (reviews) => ({
//   type: GET_REVIEWS_BY_COCKTAILID,
//   reviews
// })

// export const getParticularReviews = ()

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
      dispatch(loadReview(response.review)); //reviewId??
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

// EDIT REVIEW
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";

const editReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

export const updateReview =
  ({ reviewRating, reviewBody, cocktailId, userId, reviewId }) =>
  async (dispatch) => {
    console.log("reviewId in updateReview THUNK", reviewId);
    console.log("userId in updateReview THUNK", userId);
    const res = await csrfFetch(
      `/api/cocktails/${cocktailId}/reviews/${reviewId}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewRating,
          reviewBody,
          cocktailId,
          userId,
        }),
      }
    );

    if (res.ok) {
      const response = await res.json();
      dispatch(editReview(response));
    }
  };

//DESTROY
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});

// do I even need the cocktailId to be sent in the body of the request?
export const destroyReview =
  ({ userId, cocktailId, reviewId }) =>
  async (dispatch) => {
    const res = await csrfFetch(
      `/api/cocktails/${cocktailId}/reviews/${reviewId}/edit`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, reviewId }),
      }
    );

    if (res.ok) {
      const response = await res.json();
      dispatch(deleteReview(response));
    }
  };

//LABEL
//ACTION VARIABLE
//ACTION CREATOR
//THUNK
//STORE

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      const allReviews = {};
      action.reviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    case GET_REVIEW:
      const oneReview = {};
      action.reviews.forEach((review) => {
        oneReview[review.id] = review;
      });
      // THIS NEEDS WORK:
      return { ...state, ...allReviews };
    case ADD_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case UPDATE_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case DELETE_REVIEW:
      const postDeletionState = { ...state };
      delete postDeletionState[action.reviewId];
      return { ...postDeletionState };
    default:
      return state;
  }

  // switch (action.type) {
  //   // case GET_COCKTAIL:
  // case GET_REVIEWS:
  // const allCocktails = {};
  // action.cocktails.forEach((cocktail) => {
  //   allCocktails[cocktail.id] = cocktail;
  // });
  // return { ...state, ...allCocktails };
  // case ADD_COCKTAIL:
  //   return { ...state, [action.cocktail.id]: action.cocktail };
  //   case DELETE_REVIEW:
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
