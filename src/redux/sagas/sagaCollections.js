import { takeEvery, call, put } from "@redux-saga/core/effects";

import { fetchPostsSuccess } from "../actions";
import { REQUEST_FETCH_POSTS } from "../types";

import { getCollections } from "../../utils/axiosAPI/api";

function* fetchCollections() {
  const collections = yield call(getCollections)
  yield put(fetchPostsSuccess(collections))
}

export default function* watchFetchCollections() {
  yield takeEvery( REQUEST_FETCH_POSTS, fetchCollections )
}