import { combineReducers } from "redux";
import detailedPostReducer from "./detailedPostReducer";
import planMealReducer from "./planMealReducer";
import postsReducer from "./postsReducer";
import searchGlobalReducer from "./searchReducer";

const rootReducers = combineReducers({
  posts: postsReducer,
  planMeal: planMealReducer,
  searchGlobal: searchGlobalReducer,
  detailedPost:  detailedPostReducer
})

export default rootReducers