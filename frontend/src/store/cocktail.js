import { csrfFetch } from "./csrf";

const GET_COCKTAILS = "cocktails/GET_COCKTAILS";
const CLEAR_COCKTAILS = "cocktails/CLEAR_COCKTAILS";

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
    const response = await res.json();
    if(response.ok) {
    dispatch(getCocktails(response));
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
      return { ...state, userCocktails: action.payload };
    case CLEAR_COCKTAILS:
      return { ...state, userCocktails: null };
    default:
      return state;
  }
};

export default cocktailsReducer;