import axios from "axios";
import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../constants/CartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
  console.log(data._id);

  dispatch({
    type: CART_ADD_ITEMS,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEMS,
    payload: id,
  });
  console.log('why', id)
  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};
