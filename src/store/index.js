import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
};

const loggerMiddleware = createLogger();

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = process.env.REACT_APP_NODE_ENV === 'development'
    ? createStore(
        pReducer,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
            // eslint-disable-next-line no-underscore-dangle
            window.__REDUX_DEVTOOLS_EXTENSION__
                      // eslint-disable-next-line no-underscore-dangle
                      && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    )
    : createStore(pReducer, applyMiddleware(thunkMiddleware));

export const persistor = persistStore(store);
