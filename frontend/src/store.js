import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductListReducers, ProductReducers } from "./reducers/ProductReducers";
import { CartReducers } from "./reducers/CartReducers";

const reducer = combineReducers({ProductList: ProductListReducers,  Product: ProductReducers, Cart: CartReducers});
const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  Cart: {
    cartItems: cartItemsFromStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store