import { EMPTY_ARRAY } from "../../common/constants";
import { REMOVE_MEAL_ITEM, SET_MEAL_DATA } from "../types";


const initialState = {
  planMeals: EMPTY_ARRAY,
  isLoading: false,
}

const planMealReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MEAL_DATA:
      return {
        ...state,
        planMeals: action.payload.data
      }
    case REMOVE_MEAL_ITEM:
      return {
        ...state,
        planMeals: state.planMeals.filter((item, index) => index !== action.payload.elemIndex)
      }

    default:
      return state
  }
}

export default planMealReducer