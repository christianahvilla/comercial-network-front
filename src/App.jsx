import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {PersistGate} from 'redux-persist/integration/react';
import LoadingView from './components/common/LoadingView';
import Root from './views/Root';

App.propTypes = {
  store: PropTypes.object.isRequired,
};

const App = ({store}) => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView/>} persistor={persistor}>
      <Root/>
    </PersistGate>
  </Provider>
);

export default App;
