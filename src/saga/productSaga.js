import { call, put, takeLatest } from "redux-saga/effects";
import { Types, Creators } from "../actions/productAction";
import { doCreateProduct, onceGetProducts } from "../api/productAPI";

export function* fetchProductRequest() {
  try {
    const response = yield call(onceGetProducts);
    if (response.status === "ok") {
      yield put(Creators.fetchProductSuccess(response.products));
    } else {
      yield put(Creators.fetchProductFailure(response.error));
    }
  } catch (error) {
    yield put(Creators.fetchProductFailure(error));
  }
}

export function* createProductRequest(action) {
  try {
    const { productData } = action;
    const response = yield call(doCreateProduct, productData);

    if ((response.status === "ok")) {
      yield put(Creators.createProductSuccess(response.products));
    } else {
      yield put(Creators.createProductFailure(response.error));
    }
  } catch (error) {
    yield put(Creators.createProductFailure(error));
  }
}

export default function* watchProductRequest() {
  yield takeLatest(Types.CREATE_PRODUCT_REQUEST, createProductRequest);
  yield takeLatest(Types.FETCH_PRODUCT_REQUEST, fetchProductRequest);
}
