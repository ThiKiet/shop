import { createReducer } from "reduxsauce";
import { Types } from "../actions/productAction";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: "",
};

const fetchProductRequest = (state, action) => ({
  ...state,
  loading: true,
});

const fetchProductSuccess = (state, action) => ({
  ...state,
  loading: false,
  products: action.data,
});

const fetchProductFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const createProductRequest = (state, action) => ({
  ...state,
  loading: true,
  type: action.type,
});

const createProductSuccess = (state, action) => ({
  ...state,
  loading: false,
  products: action.products,
  type: action.type,
});

const createProductFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
  type: action.type,
});

export const HANDLERS = {
  [Types.FETCH_PRODUCT_REQUEST]: fetchProductRequest,
  [Types.FETCH_PRODUCT_SUCCESS]: fetchProductSuccess,
  [Types.FETCH_PRODUCT_FAILURE]: fetchProductFailure,

  [Types.CREATE_PRODUCT_REQUEST]: createProductRequest,
  [Types.CREATE_PRODUCT_SUCCESS]: createProductSuccess,
  [Types.CREATE_PRODUCT_FAILURE]: createProductFailure,
};

const productReducer = createReducer(INITIAL_STATE, HANDLERS);

export default productReducer;
