import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

// const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
};

const loggerMiddleware = createLogger();

const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//     pReducer,
//     compose(
//         applyMiddleware(thunkMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__
//             && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     ),
// );

export const store = createStore(pReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export const persistor = persistStore(store);
