import { setProducts } from "../store";

import { fetchProducts } from "../../api/api";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const products = await fetchProducts();
      dispatch(setProducts(products));
    } catch (error) {
      // Handle error here
    }
  };
};

// // actions.js
// import { setProducts, setError } from "../store"; // Assuming you have an setError action

// import { fetchProducts } from "../../api/api";

// export const getProducts = () => {
//   return async (dispatch) => {
//     try {
//       const products = await fetchProducts();
//       dispatch(setProducts(products));
//     } catch (error) {
//       // Handle error here
//       console.error("Error fetching products:", error);

//       // Dispatch an action to set an error state, if applicable
//       dispatch(setError(error.message)); // You may need to create the setError action
//     }
//   };
// };
