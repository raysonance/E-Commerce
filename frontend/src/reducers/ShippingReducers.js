import {
  SHIPPING_FAIL,
  SHIPPING_REQUEST,
  SHIPPING_SUCCESS,
} from "../constants/ShippingConstants";

export const ShippingReducers = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_REQUEST:
      return { loading: true, ...state };

    case SHIPPING_SUCCESS:
      return { loading: false, product: action.payload };

    case SHIPPING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
