import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
};

const persist = persistReducer(persistConfig, rootReducer);

export const store = createStore(persist, compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
));
export const persistor = persistStore(store);
