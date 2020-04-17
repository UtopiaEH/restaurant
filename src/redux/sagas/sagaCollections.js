import { takeEvery, call, put } from "@redux-saga/core/effects";

import { fetchPostsSuccess, toggleIsLoading } from "../actions";
import { REQUEST_FETCH_POSTS } from "../types";
import { getCollections } from "../../utils/axiosAPI/api";

function* fetchCollections() {

  yield put(toggleIsLoading(true))

  const collections = yield call(getCollections)

  yield put(fetchPostsSuccess(collections))
  yield put(toggleIsLoading(false))

}

export default function* watchFetchCollections() {
  yield takeEvery(REQUEST_FETCH_POSTS, fetchCollections)
}