import { takeEvery, put, call, select } from "@redux-saga/core/effects";
import { getSearchResult } from "../../utils/axiosAPI/api";

import { setSearchResult, toggleIsLoading } from "../actions";
import { getSearchGlobal } from "../selectors";
import { REQUEST_SET_SEARCH } from "../types";


function* fetchSearchResult() {

  yield put(toggleIsLoading(true))

  const { searchWord } = yield select(getSearchGlobal)

  const searchRes = yield call(getSearchResult, searchWord)

  yield put(setSearchResult(searchRes))

  yield put(toggleIsLoading(false))

}

export default function* watchSearchGlobal() {
  yield takeEvery(REQUEST_SET_SEARCH, fetchSearchResult)
}