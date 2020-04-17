import { EMPTY_OBJECT } from "../../common/constants";
import { SET_DETAILED_POST, SET_DETAILED_POST_ID } from "../types";


const initialState = {
  detailedPost: EMPTY_OBJECT,
  postId: 0,
  isLoading: false,
}

const detailedPostReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DETAILED_POST:
      return {
        ...state,
        detailedPost: action.payload.post
      }
    case SET_DETAILED_POST_ID:
      const id = +action.payload.postId.split('').slice(1).join('')
      return {
        ...state,
        postId: id
      }
    default:
      return state
  }
}

export default detailedPostReducer