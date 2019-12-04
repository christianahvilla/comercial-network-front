import {shopConstants} from '../constants/shopConstants';
import {shopApi} from '../api/shopApi';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchStoreBegin
 * @function fetchStoreSuccess
 * @function fetchStoreError
 */

const fetchCartBegin = () => {
  return {
    type: shopConstants.FETCH_SHOP_BEGIN,
  };
};

const fetchCartError = (error) => {
  return {
    type: shopConstants.FETCH_SHOP_ERROR,
    payload: error.message,
  };
};

const fetchCartSuccess = (items) => {
  return {
    type: shopConstants.FETCH_SHOP_SUCCESS,
    payload: items,
  };
};

/**
 * Function to get products from API implementing API request convention
 */

export const shopActions = () => {
  return (dispatch) => {
    dispatch(fetchCartBegin());
    shopApi.getShops().then((response) => {
      dispatch(fetchCartSuccess(response.data));
    }).catch((error) => {
      dispatch(fetchCartError(error));
    });
  };
};
