import { csrfFetch } from "./csrf";

// variable creation to avoid typos: action
const ADD_COCKTAIL = "cocktails/ADD_COCKTAIL";
const GET_COCKTAILS = "cocktails/GET_COCKTAILS";
const CLEAR_COCKTAILS = "cocktails/CLEAR_COCKTAILS";

//full action creator
const addCocktail = (cocktail) => ({
  type: ADD_COCKTAIL,
  cocktail,
});

const getCocktails = (cocktails) => ({
  type: GET_COCKTAILS,
  cocktails,
});

// const clearCocktails = () => ({
//   type: CLEAR_COCKTAILS,
//   payload: null,
// });

// export const clearCocktails = () => async (dispatch) => {
//   dispatch(clearCocktails());
// };

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
      action.list.forEach((cocktail) => {
        allCocktails[cocktail.id] = cocktail;
      });
      // normalize with key as id, obj as val
      return {...allCocktails, ...state, userCocktails: action.payload };
    case CLEAR_COCKTAILS:
      return { ...state, userCocktails: null };
    case ADD_COCKTAIL:
      return {...state, }; // need to normalize data prior becuase pushing a new cocktail into the array wouldn't really work
      // instead, normalization will help in setting new k:val pair with one indiv
    default:
      return state;
  }
};

export default cocktailsReducer;
