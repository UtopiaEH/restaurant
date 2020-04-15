import { all } from "@redux-saga/core/effects";

import watchFetchCollections from "./sagaCollections";

export default function* rootSaga() {
  yield all([ watchFetchCollections() ])
}