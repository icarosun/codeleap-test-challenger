import { combineReducers } from "redux";
import postsReducer from "./posts.slice";
import usernameReducer from "./username.slice";

export const rootReducer = combineReducers({
  posts: postsReducer,
  username: usernameReducer,
})
