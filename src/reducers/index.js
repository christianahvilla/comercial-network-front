import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import authReducer from './AuthReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    categoryState: categoryReducer,
    authState: authReducer,
    userState: userReducer,
});

export default rootReducer;
