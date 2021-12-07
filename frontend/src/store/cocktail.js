import { csrfFetch } from "./csrf";

// variable creation to avoid typos: action
const ADD_COCKTAIL = "cocktails/ADD_COCKTAIL";
const GET_COCKTAILS = "cocktails/GET_COCKTAILS";
const DELETE_COCKTAIL = "cocktails/DELETE_COCKTAIL";
const UPDATE_COCKTAIL = "cocktails/UPDATE_COCKTAIL";

//full action creator
const addCocktail = (cocktail) => ({
  type: ADD_COCKTAIL,
  cocktail,
});

const getCocktails = (cocktails) => ({
  type: GET_COCKTAILS,
  cocktails,
});

const deleteCocktails = () => ({
  type: DELETE_COCKTAIL,
  payload: null,
});

export const deleteCocktails = () => async (dispatch) => {
  dispatch(deleteCocktails());
};

export const createCocktail =
  ({ name, description, imageUrl, recipeUrl }) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, imageUrl, recipeUrl }),
    });

    if (res.ok) {
      const response = await res.json();
      dispatch(addCocktail(response));
      return response;
    }
  };

// export const editCocktail =
//   ({ cocktailId, name, description, imageUrl, recipeUrl }) =>
//   async (dispatch) => {
//     const res = await csrfFetch(`/api/cocktails/${cocktailId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cocktailId,
//         name,
//         description,
//         imageUrl,
//         recipeUrl,
//       }),
//     });

//     const response = await res.json();
//     if (response.ok) {
//       dispatch(getCocktails(response));
//     }
//   };

// export const deleteCocktail = (userId, cocktailId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/cocktails/${cocktailId}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ userId, cocktailId }),
//   });

//   const response = await res.json();
//   if (response.ok) {
//     dispatch(getCocktails(response));
//   }
// };

const initialState = { userCocktails: null };

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      const allCocktails = {};
      action.cocktails.forEach((cocktail) => {
        allCocktails[cocktail.id] = cocktail;
      });
      return { ...state, ...allCocktails,};
    case DELETE_COCKTAIL:
      const newState = {...state};
      delete newState[action.cocktailId];
      return newState;
    case ADD_COCKTAIL:
    // case UPDATE_COCKTAIL:
      return {...state, [action.cocktail.id]: action.cocktail};
    default:
      return state;
  }
};

export default cocktailsReducer;
