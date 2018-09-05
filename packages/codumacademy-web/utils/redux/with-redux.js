import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import withRedux from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "../../app-state/reducers";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));

const withReduxStore = comp => withRedux(initStore)(comp);

export default withReduxStore;
