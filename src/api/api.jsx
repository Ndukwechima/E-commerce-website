import axios from "axios";

const apiUrl = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
