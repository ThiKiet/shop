import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  fetchProductRequest: [],
  fetchProductSuccess: ["data"],
  fetchProductFailure: ["error"],

  createProductRequest: ["productData"],
  createProductSuccess: ["data"],
  createProductFailure: ["error"],
});

export { Types, Creators };
