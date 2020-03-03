import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import shopReducer from './ShopReducer';
import authReducer from './AuthReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    categoryState: categoryReducer,
    shopState: shopReducer,
    authState: authReducer,
    userState: userReducer,
});

export default rootReducer;
