import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
let middleware;

if (process.env !== "production") {
  const loggerMiddleware = createLogger();
  middleware = [loggerMiddleware, sagaMiddleware];
} else {
  middleware = [sagaMiddleware];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
