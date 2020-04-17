import { EMPTY_ARRAY, EMPTY_STRING } from "../../common/constants";
import { SET_SEARCH, SET_SEARCH_RESULT } from "../types";


const initialState = {
  searchResult: EMPTY_ARRAY,
  searchWord: EMPTY_STRING,
  searchCount: 10,
  isLoading: false,
}

const searchGlobalReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchWord: action.payload.searchWord
      }
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult
      }

    default:
      return state
  }
}

export default searchGlobalReducer