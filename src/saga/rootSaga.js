import { all } from "redux-saga/effects";

import watchProductRequest from "./productSaga";

export default function* rootSaga() {
  yield all([watchProductRequest()]);
}
