import {combineReducers} from 'redux';
import shopReducer from './shopReducer';

const rootReducer = combineReducers(
    {
      shopState: shopReducer,
    },
);

export default rootReducer;
