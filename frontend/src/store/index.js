import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import cocktailReducer from "./cocktail";
import reviewReducer from "./review";
import reviewFeedReducer from "./reviewFeed";

const rootReducer = combineReducers({
  session: sessionReducer,
  cocktail: cocktailReducer,
  review: reviewReducer,
  reviewFeed: reviewFeedReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
