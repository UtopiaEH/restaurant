import { all } from "@redux-saga/core/effects";

import watchFetchCollections from "./sagaCollections";
import watchFetchDetailedPost from "./sagaDetailedPost";
import watchSetMealData from "./sagaPlanMeal";
import watchSearchGlobal from "./sagaSearch";

export default function* rootSaga() {
  yield all([
    watchFetchCollections(),
    watchSetMealData(),
    watchSearchGlobal(),
    watchFetchDetailedPost()
  ])
}