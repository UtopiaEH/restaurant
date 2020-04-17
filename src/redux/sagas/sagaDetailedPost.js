import { takeEvery, call, put, select } from "@redux-saga/core/effects";

import { setDetailedPost, toggleIsLoading } from "../actions";
import { getDetailedPost } from "../selectors";
import { REQUEST_DETAILED_POST } from "../types";
import { getRestaurantDetails } from "../../utils/axiosAPI/api";

function* fetchDetailedPost() {

  yield put(toggleIsLoading(true))

  const { postId } = yield select(getDetailedPost)
  const restaurant = yield call(getRestaurantDetails, postId)

  yield put(setDetailedPost(restaurant))

  yield put(toggleIsLoading(false))

}

export default function* watchFetchDetailedPost() {
  yield takeEvery(REQUEST_DETAILED_POST, fetchDetailedPost)
}