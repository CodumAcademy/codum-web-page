import { combineReducers } from "redux";
import app from "./app-reducer";
import user from "./user-reducer";
import convocation from "./convocation-reducer";
import quiz from "./quiz-reducer";
import admin from "./admin-reducer";

const rootReducer = combineReducers({
  app,
  user,
  convocation,
  quiz,
  admin
});

export default rootReducer;
