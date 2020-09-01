import { convertObjectToArray } from "../helpers/product";
import firebaseApp from "./config";

const firebaseDb = firebaseApp.database();

/**
 * Representation for get list product from firebase
 */

export const onceGetProducts = () =>
  firebaseDb
    .ref("products")
    .once("value")
    .then((products) => {
      const result = convertObjectToArray(products.val());
      return { products: result, status: "ok" };
    });

/**
 * Representation for create new product and save to database
 */
export const doCreateProduct = (productData) => {
  const productId = firebaseDb.ref().push().key;

  return firebaseDb
    .ref(`products/${productId}`)
    .set(productData)
    .then(() => {
      return onceGetProducts();
    })
    .catch((error) => ({
      error,
      status: "failure",
    }));
};
