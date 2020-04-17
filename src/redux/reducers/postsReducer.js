import { EMPTY_ARRAY } from "../../common/constants";
import { FETCH_POSTS, IS_LOADING } from "../types";

const initialState = {
  posts: EMPTY_ARRAY,
  isLoading: false
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.posts
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading
      }
    default:
      return state
  }
}

export default postsReducer