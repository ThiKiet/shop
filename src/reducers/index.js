import { combineReducers } from "redux";
import ProductReducer from "./productReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer;
