import { csrfFetch } from "./csrf";

// GET ONE COCKTAIL
const GET_COCKTAIL = "cocktails/GET_COCKTAILS";

const loadCocktail = (cocktail) => ({
  type: GET_COCKTAIL,
  cocktail,
});

export const getOneCocktail = (cocktailId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cocktails/${cocktailId}`);
  if (res.ok) {
    const response = await res.json();
    dispatch(loadCocktail(response.cocktail));
  }
};

// GET COCKTAILS
const GET_COCKTAILS = "cocktails/GET_COCKTAILS";

// action creator
const loadCocktails = (cocktails) => ({
  type: GET_COCKTAILS,
  cocktails,
});

// thunk creator
export const getCocktails = () => async (dispatch) => {
  const res = await csrfFetch(`/api/cocktails`);
  if (res.ok) {
    const cocktails = await res.json();
    dispatch(loadCocktails(cocktails.cocktails));
    return cocktails; // needed if want to use elsewhere outside of thunk
  }
};

// ADD COCKTAIL
const ADD_COCKTAIL = "cocktails/ADD_COCKTAIL";
//full action creator
const addCocktail = (cocktail) => ({
  type: ADD_COCKTAIL,
  cocktail,
});

export const updateCocktail =
  (newCocktail) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCocktail),
    });

    if (res.ok) {
      const response = await res.json();
      dispatch(addCocktail(response));
      return response;
    }
  };

// DELETE COCKTAILS
const DELETE_COCKTAIL = "cocktails/DELETE_COCKTAIL";

const deleteCocktail = () => ({
  type: DELETE_COCKTAIL,
  payload: null,
});

// export const destroyCocktail = () => async (dispatch) => {
//   dispatch(deleteCocktail());
// };

export const destroyCocktail = (userId, cocktailId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cocktails/${cocktailId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, cocktailId }),
  });

  const response = await res.json();
  if (response.ok) {
    dispatch(deleteCocktail(response));
  }
};

// EDIT COCKTAIL
const UPDATE_COCKTAIL = "cocktails/UPDATE_COCKTAIL";

export const editCocktail =
  ({ cocktailId, name, description, imageUrl, recipeUrl }) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/cocktails/${cocktailId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cocktailId,
        name,
        description,
        imageUrl,
        recipeUrl,
      }),
    });

    const response = await res.json();
    if (response.ok) {
      dispatch(getCocktails(response));
    }
  };

const initialState = {};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      const allCocktails = {};
      action.cocktails.forEach((cocktail) => {
        allCocktails[cocktail.id] = cocktail;
      });
      return { ...state, ...allCocktails };
    case DELETE_COCKTAIL:
      const newState = { ...state };
      delete newState[action.cocktailId];
      return newState;
    case ADD_COCKTAIL:
      return { ...state, [action.cocktail.id]: action.cocktail };
    default:
      return state;
  }
};

export default cocktailReducer;
