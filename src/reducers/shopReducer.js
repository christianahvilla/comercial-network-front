import {shopConstants} from '../constants/shopConstants';

const INITIAL_STATE = {
  shops: [],
  errors: undefined,
  loading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopConstants.FETCH_SHOP_BEGIN:
      return {...state, loading: true};

    case shopConstants.FETCH_SHOP_SUCCESS:
      return {...state, loading: false, shops: action.payload};

    case shopConstants.FETCH_SHOP_ERROR:
      return {...state, loading: false, errors: action.payload};

    default:
      return state;
  }
};

export default shopReducer;
