import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListReducers,
  ProductReducers,
} from "./reducers/ProductReducers";
import { CartReducers } from "./reducers/CartReducers";
import { UserLoginReducers } from "./reducers/userReducers";

const reducer = combineReducers({
  ProductList: ProductListReducers,
  Product: ProductReducers,
  Cart: CartReducers,
  UserLogin: UserLoginReducers,
});
const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  Cart: {
    cartItems: cartItemsFromStorage,
  },
  UserLogin: {
    userInfo: userInfoFromStorage
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
