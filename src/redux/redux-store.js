import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootReducers from "./reducers";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

const middleware = [ sagaMiddleware ]

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware),
  ));

sagaMiddleware.run(rootSaga)

export default store