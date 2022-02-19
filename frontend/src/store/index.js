import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import cocktailReducer from "./cocktail";
import reviewReducer from "./review";
import reviewFeedReducer from "./reviewFeed";
import barReducer from "./bar";
import checkinReducer from "./checkin";

const rootReducer = combineReducers({
  session: sessionReducer,
  cocktail: cocktailReducer,
  review: reviewReducer,
  reviewFeed: reviewFeedReducer,
  bar: barReducer,
  checkin: checkinReducer,
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
