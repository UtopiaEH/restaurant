import { takeEvery, put, call } from "@redux-saga/core/effects";
import { ORDER_MEAL_LOCAL } from "../../common/constants";
import { getDataLocalStorage } from "../../utils";

import { setMealData, toggleIsLoading } from "../actions";
import { REQUEST_SET_MEAL_DATA } from "../types";


function* setMealsData() {

  yield put(toggleIsLoading(true))

  let localData  = yield call(getDataLocalStorage, ORDER_MEAL_LOCAL)

  yield put(setMealData(localData))

  yield put(toggleIsLoading(false))

}

export default function* watchSetMealData() {
  yield takeEvery(REQUEST_SET_MEAL_DATA, setMealsData)
}