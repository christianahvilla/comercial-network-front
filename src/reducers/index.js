import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    categoryState: categoryReducer,
    authState: authReducer,
});

export default rootReducer;
