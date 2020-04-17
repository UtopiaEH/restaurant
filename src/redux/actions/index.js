import {
  FETCH_POSTS,
  IS_LOADING, REMOVE_MEAL_ITEM, REQUEST_DETAILED_POST,
  REQUEST_FETCH_POSTS,
  REQUEST_SET_MEAL_DATA, REQUEST_SET_SEARCH, SET_DETAILED_POST, SET_DETAILED_POST_ID,
  SET_MEAL_DATA, SET_SEARCH, SET_SEARCH_RESULT
} from "../types";

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS,
  payload: { posts }
})

export const requestPostsCollections = () => ({
  type: REQUEST_FETCH_POSTS,
})

export const toggleIsLoading = loading => ({
  type: IS_LOADING,
  payload: { loading }
})

//Meal
export const setMealData = (data) => ({
  type: SET_MEAL_DATA,
  payload: { data }
})

export const removeMealItem = (elemIndex) => ({
  type: REMOVE_MEAL_ITEM,
  payload: { elemIndex }
})


export const requestMealData = () => ({
  type: REQUEST_SET_MEAL_DATA,
})

//Search
export const setSearchWord = (searchWord) => ({
  type: SET_SEARCH,
  payload: { searchWord }
})

export const requestSetSearch = () => ({
  type: REQUEST_SET_SEARCH,
})

export const setSearchResult = (searchResult) => ({
  type: SET_SEARCH_RESULT,
  payload: { searchResult }
})

//Detailed Post
export const requestDetailedPost = () => ({
  type: REQUEST_DETAILED_POST
})

export const setDetailedPost = (post) => ({
  type: SET_DETAILED_POST,
  payload: { post }
})

export const setDetailedPostId = (postId) => ({
  type: SET_DETAILED_POST_ID,
  payload: { postId }
})